const slugify = require("slugify")
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


  // page Detail
  const postTemplate = path.resolve(`./src/templates/postDetail.js`)
  const allPosts = await graphql(`
  query{
  allMdx(sort: {frontmatter: {date: DESC}}) {
    nodes {
      id
      frontmatter {
        title
        slug
      }
      internal{
        contentFilePath
      }
     
    }
  }}
  `)
  if (allPosts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return;
  }
  const posts = allPosts.data.allMdx.nodes
  posts.forEach(post => {
    // Create a slug for the path using the post title
    // For example, 'Our First Post' => '/post/our-first-post'
    const slug =
      post.frontmatter.slug ??
      slugify(post.frontmatter.title, { lower: true })
    const path = "/blog/" + slug

    createPage({
      path,
      component: `${postTemplate}?__contentFilePath=${post.internal.contentFilePath}`,
      context: {
        id: post.id,
      },
    })

    return null
  })


  // create blog-list pages
  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: path.resolve(`./src/templates/blogList.js`),
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },

    })
  })


  // create blog-list by tag pages

  const postsByTag = await graphql(`
  query  {
    allMdx {
      group(field: {frontmatter: {tag: SELECT}}) {
        edges {
          node {
            id
            frontmatter {
              tag
            }
          }
        }
      }
    }
  }
  
  `)

  if (postsByTag.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return;
  }

  const tagGroup = postsByTag.data.allMdx.group
  tagGroup.forEach((item) => {
    const numPages = Math.ceil(item.edges.length / postsPerPage)
    const tag = item.edges[0].node.frontmatter.tag
    Array.from({ length: numPages }).forEach((_, i) => {
      createPage({
        path: i === 0 ? `/blog/${tag}` : `/blog/${tag}/${i + 1}`,
        component: path.resolve(`./src/templates/blogListByTag.js`),
        context: {
          limit: postsPerPage,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          tag
        },

      })
    })
  })



}


