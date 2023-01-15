const slugify = require('slugify')
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const component = path.resolve(`./src/templates/postDetail.js`)

  const allBlogPostsQuery = `
    query BlogPosts {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `

  return graphql(allBlogPostsQuery)
    .then(result => {
      if (result.errors) {
        throw result.errors
      }

      // Get the posts
      const posts = result.data.allMarkdownRemark.edges

      // Loop through posts and create a page for each post
      posts.forEach(({ node }) => {
        // Create a slug for the path using the post title
        // For example, 'Our First Post' => '/post/our-first-post'
        let path = '/blog/' + slugify(node.frontmatter.title, { lower: true })

        createPage({
          path,
          component,
          context: {
            id: node.id
          }
        })

        return null

      })
    })
    .catch(e => {
      throw e
    })
}
