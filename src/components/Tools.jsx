import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../css/style.css';


const Tools = () => {

    const data = useStaticQuery(graphql`
    query ToolsQuery {
        allContentfulSkills {
            edges {
              node {
                skills
              }
            }
          }  
    }  
    `)

    return (
        <>
            <article className="about-info-container">
                {data.allContentfulSkills.edges.map(({ node }) => (

                    <div>
                        <p> {node.skills}</p>
                        {/* <p> {node.subtitle}</p>
                        <p> {node.date}</p> */}
                    </div>
                ))
                }
            </article>
        </>
    )
}

export default Tools
