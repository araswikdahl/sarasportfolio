import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import '../css/style.css';


const Footers = () => {

    const data = useStaticQuery(graphql`
    query FootersQuery {
        allContentfulLinks {
            edges {
              node {
                link
                icon {
                  file {
                    url
                  }
                }
              }
            }
          }
    }
    `)

    return (
        <>
            <footer>
                <section className="footer-icons-holder">
                    {data.allContentfulLinks.edges.map(({ node }) => (
                        <div>
                            <a href={node.link}><img src={node.icon.file.url} alt="" /></a>
                        </div>
                    ))
                    }
                </section>

            </footer>
        </>
    )
}

export default Footers