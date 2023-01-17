import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from '../components/header';
import Footers from '../components/Footers';
import styled from "styled-components";

const ListCategories = ({ data }) => {

    return (
        <Body>
            <Header />
            <main className="portfolio-main" >
                <section className="header-container">
                    <h1>Projects</h1>
                    <div className="projects-wrapper">

                        {data.allContentfulProjectPage.edges.map(({ node }) => (

                            <Link to={"/project/" + node.slug}>
                                <img src={node.img.url} alt="" />
                                <div className="project-title-wrapper">
                                    <h5> {node.title}</h5>
                                    <button className="categorie-btn">{node.skill}</button>
                                </div>
                            </Link>
                        ))
                        }
                    </div>
                    <Link to="/portfolio/" className="return">Back to portfolio</Link>
                </section>
            </main >
            <Footers />
        </Body>
    )
}

const Body = styled.div`
      background:#121212;
      background-image: url(${props => props.backgroundImage});
      background-size:cover;
      color: white;
      font-family: 'Montserrat', sans-serif;
      `


export default ListCategories

export const Head = () => <title > list categories page </title>

export const ListCategoriesQuery = graphql`
query SingelPortfolioQuery($skill: String) {
    
    allContentfulProjectPage(filter: {skill: {eq: $skill}}) {
        edges {
          node {
            title
            skill
            img {
              url
            }
            slug
            
          }
        }
      }
  }

`

