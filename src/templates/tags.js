import * as React from "react";
import { Helmet } from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const TagRoute = (props) =>  {

    const posts = props.data.allMarkdownRemark.edges;

    const postLinks = posts.map((post) => (
      <li key={post.node.fields.slug}>
        <Link to={post.node.fields.slug}>
        <div className="featured-thumbnail" style={{ flexBasis: "20%" }}>
            <PreviewCompatibleImage
              imageInfo={{
                image: post.node.frontmatter.featuredimage,
                alt: `featured image thumbnail for post ${post.node.frontmatter.title}`,
                width:
                  post.node.frontmatter.featuredimage.childImageSharp
                  .gatsbyImageData.width,
                height:
                  post.node.frontmatter.featuredimage.childImageSharp
                  .gatsbyImageData.height,
              }}
            />
          </div>
          <h2 className="is-size-4">{post.node.frontmatter.title}</h2>
        </Link>
      </li>
    ));

    const { tag } = props.pageContext;
    const { title } = props.data.site.siteMetadata;
    const { totalCount } = props.data.allMarkdownRemark;
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? "" : "s"
    } tagged with “${tag}”`;

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container content">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: "3rem", minHeight: "76vh" }}
              >
                <h3 className="title is-size-4 is-bold-light">{tagHeader}</h3>
                <ul className="taglist">{postLinks}</ul>
                <hr></hr>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
}

export default TagRoute;

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            featuredimage {
              childImageSharp {
                gatsbyImageData(
                  width: 120
                  quality: 100
                  layout: CONSTRAINED
                )
              }
            }
          }
        }
      }
    }
  }
`;
