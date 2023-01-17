import * as React from "react"
import { Link, graphql } from "gatsby"
import '../css/style.css';
import Header from "../components/header";
import Footers from '../components/Footers';
import styled from "styled-components";
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

            {data.allContentfulProjectPage.edges.map(({ node }) => {
              return <Link to={"/categories/" + node.categori.categori}>
                <button className="categorie-btn" >{node.categori.categori}</button>
              </Link>
            })
            }

          </div>
          <div className="projects-wrapper">
            {data.allContentfulProjectPage.edges.map(({ node }) => (
              <Link to={"/project/" + node.slug}>
                <img src={node.img.file.url} alt="picture of project" />
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
    `