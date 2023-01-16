import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../css/style.css';


const Work = () => {

    const data = useStaticQuery(graphql`
    query WorkQuery {
        allContentfulWork {
            edges {
              node {
                title
                subtitle
                date
              }
            }
          }  
    }  
    `)

    return (
        <>
            <article className="about-info-container">
                {data.allContentfulWork.edges.map(({ node }) => (

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

export default Work