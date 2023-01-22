const slugify = require('slugify')
const path = require(`path`)
const { createRemoteFileNode } = require("gatsby-source-filesystem")


exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  createTypes(`
    type Mdx implements Node {
      frontmatter: Frontmatter
      featuredImg: File @link(from: "fields.localFile")
    }

    type Frontmatter {
      title: String!
      featuredImgUrl: String
      featuredImgAlt: String
    }
  `)
}

exports.onCreateNode = async ({
  node,
  actions: { createNode, createNodeField },
  createNodeId,
  getCache,
}) => {
  // For all MarkdownRemark nodes that have a featured image url, call createRemoteFileNode
  if (
    node.internal.type === "Mdx" &&
    node.frontmatter.featuredImgUrl !== null
  ) {
    const fileNode = await createRemoteFileNode({
      url: node.frontmatter.featuredImgUrl, // string that points to the URL of the image
      parentNodeId: node.id, // id of the parent node of the fileNode you are going to create
      createNode, // helper function in gatsby-node to generate the node
      createNodeId, // helper function in gatsby-node to generate the node id
      getCache,
    })

    // if the file was created, extend the node with "localFile"
    if (fileNode) {
      createNodeField({ node, name: "localFile", value: fileNode.id })
    }
  }
}

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
