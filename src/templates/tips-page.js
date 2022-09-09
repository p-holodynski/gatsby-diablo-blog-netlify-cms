import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import FullWidthImage from "../components/FullWidthImage";

// eslint-disable-next-line
export const TipsPageTemplate = ({
  image,
  heading,
  description,
  fullImage,
}) => {
  const heroImage = getImage(image) || image;
  // const fullWidthImage = getImage(fullImage) || fullImage;

  return (
    <div className="content">
      <FullWidthImage img={heroImage} />
      <section className="section section--gradient tips">
        <div className="container">
          <div className="section tips">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <h3 className="has-text-weight-semibold is-size-2">
                  {heading}
                </h3>
                <p>{description}</p>
              </div>
            </div>
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="column">
                  <h3>Vault guidelines</h3>
                  <p>
                    Please also view vault procedures before joining for the first time. They will also be covered on coms via discord for first couple sessions.
                    Only party leaders are to be near vault entrance. Leaders shall line up along the right hand wall with a clear space between to retain order. Leaders need 3/4 members in a party to get in line 15+ mins before vault opens. Leaders need 4/4 or actively filling to get in line when vault is in progress. If the first team in line does not enter vault within 15 secs, the 2nd team shall go.
                    Do not stack your team unless defenders are limited. The idea is to have strong defenses within all groups so that all vaults are defended. 
                    Don’t spam abilities or continually check vault portal for openings while in line. It’s distracting for those waiting semi afk in line and confuses newcomers. Officers will monitor the vault each run and inform teams if there is an active vault.
                    Do not leave a team to join one closer in line.
                  </p>
                  <h4>Guide to viewing and requesting vault items</h4>
                  <iframe src="https://youtube.com/embed/yFKlF1JwMgE" title={"Vault request"} frameBorder={0} allowFullScreen width={"100%"} height={300}></iframe>
                </div>
                <div className="column">
                  <h3>Contribution guidelines</h3>
                  <p>
                      All sigils are to be turned in on Sunday for the first few weeks until instructed otherwise. If you are unable to play on Sunday turn your sigils in on the last day you're online before the weekly reset.
                      Be honest with other players if they ask which items and order you’ve selected from the vault. We’re all on the same side as immortals and coordinating vault rewards strengthens our entire team (see video guide below).
                      There is free selection for all items in the vault, you've earned your points spend them how you wish. However do not be malicious.
                  </p>
                </div>
                <div className="column">
                  <h3>General guidelines</h3>
                  <p>
                  If you attend Kions you should be signed up and available for the Rite of Exile. Repeated absences or not being available for the Rite may lead to exclusion from Kion’s until you attend a Rite (credit for attending Rite is whether on team or reserve provided you’re online).
                  Do not gate older raids based on combat rating if you’re hosting within allied clans. We have an enormous amount of players who can carry old content and it’s simply not needed so please include all that need.
                  Immortal chat is intended for organization. Please keep it clear of banter, memes and other garbage. This is especially important during events. You have clan chat, zone, whispers and other areas you can do those. As time goes on and less direction is needed, immortal chat can be used more globally.
                  Our allied clans have a wait list and your behavior in game is expected to reflect that.  Racist, political or religious chat will not be tolerated in the allied immortal chat and violation will lead to removal from the immortal clans.
                  </p>
                </div>
                <div className="column">
                  <h3>Corvus guidelines</h3>
                  <p>
                  No requirement to join, simply show up or navigate down at the start of event and join a raid created by any member of the allied clans. 
                  During the trivia portion please only answer quickly if you are highly certain you're correct. If you're incorrect please use the in game chat to let others know before they lock in as well.
                  </p>
                </div>
                <div className="column">
                  <h3>Efficiency guidelines</h3>
                  <iframe src="https://youtube.com/embed/RlPdsOWr02U" title={"Efficiency guide"} frameBorder={0} allowFullScreen width={"100%"} height={300}></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

TipsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  description: PropTypes.string,
  fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
};

const TipsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <TipsPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        description={frontmatter.description}
        fullImage={frontmatter.full_image}
      />
    </Layout>
  );
};

TipsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default TipsPage;

export const tipsPageQuery = graphql`
  query TipsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        description
      }
    }
  }
`;
