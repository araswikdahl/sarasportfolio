import * as React from "react"
import { Link, graphql } from "gatsby"
import '../css/style.css';
import Header from "../components/header";
import Footers from '../components/Footers';
import styled from "styled-components";
// import screenshot from '../images/screenshot.jpg';
import { useState } from 'react';
import backgroundImg from '../images/newcode.png';


const PortfolioPage = ({
  data
}) => {
  console.log(data, 'hej')

  return (
    <Body>
      <Header />
      <main className="portfolio-main">
        <section className="header-container">
          <h1>Projects</h1>
          <div className="categories-container">
            <h4>Categories</h4>
            {data.allContentfulProjectPage.edges.map(({ node }) => (

              <Link to={"/categories/" + node.skill}>
                <button className="categorie-btn" >{node.skill}</button>
                {/* <button className="categorie-btn" onClick={handleClick} >{node.categorie[0].categorieName}</button> */}
              </Link>

            ))
            }

          </div>
          <div className="projects-wrapper">
            {data.allContentfulProjectPage.edges.map(({ node }) => (
              <Link to={"/project/" + node.slug}>
                <img src={node.img.file.url} alt="" />
                <div className="project-title-wrapper">
                  <h5> {node.title}</h5>
                  <button className="categorie-btn">{node.skill}</button>
                </div>
              </Link>
            ))
            }
          </div>
        </section>
      </main>
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

export default PortfolioPage

export const Head = () => < title > portfolio page </title>


// Graphql query

export const IndexPageQuery = graphql`
    query PortfolioPageQuery { 
        allContentfulCategories {
        edges {
          node {
            categorieName
            slug
          }
        }
      }
        allContentfulProjectPage {
            edges {
              node {
                title
                slug
                skill
                categorie {
                  categorieName
                }
                img {
                  file {
                    url
                  }
                }
                categorie {
                  categorieName
                  slug
                 
                 
                }
              }
            }
          }
}
    `