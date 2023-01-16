import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../css/style.css';


const Education = () => {

    const data = useStaticQuery(graphql`
    query EducationQuery {
        allContentfulEducation {
            nodes {
              id
            }
            edges {
              node {
                title
                subtitle
                date
                slug
              }
            }
          }   
    }  
    `)

    return (
        <>
            <article className="about-info-container">
                {data.allContentfulEducation.edges.map(({ node }) => (

                    <div>
                        <h4> {node.title}</h4>
                        <p> {node.subtitle}</p>
                        <p> {node.date}</p>
                    </div>
                ))
                }
            </article>
        </>
    )
}

export default Education
