import * as React from "react"
import { Link, graphql } from "gatsby"
import Header from '../components/header';
import styled from "styled-components";
import Footers from '../components/Footers';

const SingelPortfolio = ({ data }) => {
  const portfolio = data.contentfulProjectPage
  const project = data.contentfulSinglePortfolio

  return (
    <Body>
      <Header />
      <main className="portfolio-main" >
        <section>
          <h1>{portfolio.title}</h1>
          <div className="description">
            <p>{portfolio.description}</p>
          </div>
          <div className="tool-container">
            <div className="tool-wrapper">
              <p>{portfolio.tool1}</p>
              <p>{portfolio.tool2}</p>
              <p>{portfolio.tool3}</p>
              <p>{portfolio.tool4}</p>
            </div>
            <a href={portfolio.link}><img src={portfolio.icon.url} alt="" /></a>
          </div>

          <div className="single-projects-wrapper">
            <div className="singel-portfolio-images">
              <img src={portfolio.img1.url} alt="picture of project" />
            </div>
            <div className="singel-portfolio-images">
              <img src={portfolio.img2.url} alt="picture of project" />
            </div>
            <div className="singel-portfolio-images">
              <img src={portfolio.img3.url} alt="picture of project" />
            </div>
          </div>

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


export default SingelPortfolio

export const Head = () => <title > single portfolio page </title>

export const SingelPortfolioQuery = graphql`
query SingelPortfolioQuery($slug: String) {
    contentfulProjectPage(slug: {eq: $slug}) {
      title
      skill
      img {
        file {
          url
        }
        
      }
      img1 {
        url
      }
      img2 {
        url
      }
      img3 {
        url
      }
      tool1
      tool2
      tool3
      link
      description
      icon {
        url
      }
    }
    
  }
`
