const path = require('path')

exports.createPages = async ({
  graphql,
  actions
}) => {
  const {
    data: projectsData
  } = await graphql(`
  query getAllSlugs {
    allContentfulProjectPage  {
      edges {
        node {
          slug
        }
      }
    }
  }
    `);


  projectsData.allContentfulProjectPage.edges.forEach(edge => {
    actions.createPage({
      //URL
      path: '/project/' + edge.node.slug,
      //Template
      component: path.resolve('./src/templates/singelPortfolio.jsx'),
      context: {
        slug: edge.node.slug
      }
    })
  });

  const {
    data: categoriesData
  } = await graphql(`
  query MyQuery {
    allContentfulProjectPage {
      edges {
        node {
          title
          slug
          skill
          categori {
            categori
          }
          img {
            file {
              url
            }
          }
        }
      }
    }
    }
    `);


  {
    categoriesData.allContentfulProjectPage.edges.map(({
      node
    }) => (

      actions.createPage({
        //URL
        path: '/categories/' + node.categori.categori,
        //Template
        component: path.resolve('./src/templates/listCategories.jsx'),
        context: {
          skill: node.categori.categori
        }
      })
    ))
  }

}