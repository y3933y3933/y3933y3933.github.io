import * as React from "react"
import { graphql } from "gatsby"

const Blog = ({ data }) => {
  console.log(data)
  return (
    <>
      <section>
        Blog
      </section>
    </>

  )
}


export const blogPostsQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }  
`


export default Blog