import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <StaticImage
            src={"../../../static/img/di-end-of-season.jpg"}
            objectFit={"cover"}
            objectPosition={"left top"}
            alt={""}
            layout="fullWidth"
            placeholder="blurred"
            aspectratio={3 / 1}
            style={{
              gridArea: "1/1",
              // You can set a maximum height for the image, if you wish.
              maxHeight: "600px",
            }}
            formats={["auto", "webp", "avif"]}
          />
        <section className="section">
          <div className="container">
            <div className="content">
            <h1
            className="has-text-weight-bold is-size-3-mobile is-size-2-tablet news-title"
            style={{
              color: "black",

            }}
            >
              Latest News
            </h1>
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
