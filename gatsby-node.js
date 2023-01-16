const slugify = require('slugify')
const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve(`./src/templates/postDetail.js`)

  const allBlogPostsQuery = `
  query MyBlogPosts {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
        frontmatter {
          title
        }
        internal{
          contentFilePath
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
      const posts = result.data.allMdx.nodes

      // Loop through posts and create a page for each post
      posts.forEach((post) => {
        // Create a slug for the path using the post title
        // For example, 'Our First Post' => '/post/our-first-post'
        let path = '/blog/' + slugify(post.frontmatter.title,{lower:true})

        createPage({
          path,
          component:`${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
          context: {
            id: post.id
          }
        })

        return null

      })
    })
    .catch(e => {
      throw e
    })
}
