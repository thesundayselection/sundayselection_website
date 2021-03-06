import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
//import Features from '../components/Features'
//import BlogRoll from '../components/BlogRoll'
//import Video from "../components/Video"

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  videos,
}) => (
  <div>
    <div
      className="margin-top-0"
      style={{
        textAlign: 'center',
        paddingTop: '120px',
        background: '#f3b97b'
        }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: 'black',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <div
    style={{
            paddingTop: '52px',
            paddingBottom: '52px',
            textAlign: 'center',
            background: '#f3b97b'
          }}
    >
    <input
    style={{
            outline: '1px solid black',
            fontSize: '20px',
            placeholder: "Your email",
            padding: '6px',
          }}
    />
    &nbsp;
    &nbsp;
    <button className="btn">Subscribe</button>

    <br />
    <br />

    <Link to="/archive">
    <button className="button">View previous editions</button>
    </Link>
    </div>

  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  //videos: PropTypes.object,

}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        videos={frontmatter.videos}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        videos {
            videoSrcURL
        }
        description
      }
    }
  }
`
