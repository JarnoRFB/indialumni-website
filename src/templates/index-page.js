import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import { getImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import FullWidthImage from "../components/FullWidthImage";
import Mission from "../components/Mission";
import BoardMember from "../components/BoardMember";
import Board from "../components/Board";

// eslint-disable-next-line
export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => {
  const heroImage = getImage(image) || image;
  const board = {
    groupImg:
      "https://indialumni.de/wp-content/uploads/2022/01/board_21-e1642536870230.jpeg",
    president: {
      title: "President",
      name: "Aman Anand",
      profession: "Working on organic solar cell technology",
      img: "https://indialumni.de/wp-content/uploads/2022/01/aman-scaled-e1642535494748-300x300.jpg",
      statement:
        "I've been with DAAD IndiAlumni Netzwerk e.V. for three years, and now that I'm starting a new role as President, I'm incredibly excited since this association is the best place to bring two cultures together and establish a network that benefits everyone.",
    },
    vice: {
      title: "Vice-President",
      name: "Rüdiger Busche",
      profession: "Working on machine learning",
      img: "https://indialumni.de/wp-content/uploads/2022/01/IMG_20200820_193105-e1642536654982-300x300.jpg",
      statement:
        "Visiting India was an extremely valuable experience for me. IndiAlumni is a great way to to keep the exchange alive and help new people make equally amazing experiences. I am happy to support the association as board member, because I can give something back this way, but also because it is a lot of fun.",
    },
    treasurer: {
      title: "Treasurer",
      name: "Pravesh Tamang",
      profession: "Working on biotechnology",
      img: "https://indialumni.de/wp-content/uploads/2022/01/pravesh-scaled-e1642536444979-300x300.jpg",
      statement:
        "The goal of our association is to connect peoples from India and Germany. I would like to be that bridge that brings these two countries together and strengthen the bonds.",
    },
  };
  const boardMember = {
    img: "https://indialumni.de/wp-content/uploads/2022/01/aman-scaled-e1642535494748-300x300.jpg",
  };
  return (
    <div>
      <FullWidthImage img={heroImage} title={title} subheading={subheading} />
      <section className="section section--gradient">
        <div className="container">
          <div className="section">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="content">
                  <div className="columns">
                    <div className="column is-12">
                      <h3 className="has-text-weight-semibold is-size-2">
                        {heading}
                      </h3>
                      <p>{description}</p>
                    </div>
                  </div>
                  <Mission text={mainpitch.description} img={mainpitch.image} />
                  <Board props={board} />
                  {/* <BoardMember props={boardMember} /> */}
                  <Features gridItems={intro.blurbs} />
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/products">
                        See all products
                      </Link>
                    </div>
                  </div>
                  <div className="column is-12">
                    <h3 className="has-text-weight-semibold is-size-2">
                      Latest stories
                    </h3>
                    <BlogRoll />
                    <div className="column is-12 has-text-centered">
                      <Link className="btn" to="/blog">
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        intro={frontmatter.intro}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          image
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                gatsbyImageData(width: 240, quality: 64, layout: CONSTRAINED)
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`;
