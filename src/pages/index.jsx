import * as React from "react"
import { Link, graphql } from "gatsby"
import '../css/style.css';
import Header from "../components/header";
import Footers from '../components/Footers';
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
{/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,900;1,500&display=swap" rel="stylesheet"></link> */ }


const IndexPage = ({
  data
}) => {
  const home = data.contentfulHomePage

  return (
    <Body backgroundImage={home.heroImgHome.url}>
      <Header />
      <main className="home-main">
        <section className="header-container">
          <h2>{home.headerFirstname}</h2>
          <h1>{home.headerLastname}</h1>
          <h3>{home.subTitle}</h3>
          <div className="btn-home-container">
            <Link to="/portfolio/"><button className="btn-home">Portfolio</button></Link>
            <Link to="/contact/"><button className="btn-home">Contact</button></Link>

          </div>
        </section>
      </main>
      <Footers />
    </Body>
  )
}

const Body = styled.div`
      background:black;
      background-image: url(${props => props.backgroundImage});
      background-size:cover;
      color: white;
      font-family: 'Montserrat', sans-serif;
      `

export default IndexPage

export const Head = () => < title > start page </title>


// Graphql query

export const IndexPageQuery = graphql`
    query HomePageQuery {
      contentfulHomePage {
      headerFirstname
    headerLastname
    subTitle
    heroImgHome {
      url
    }
  }
}
    `