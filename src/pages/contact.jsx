import * as React from "react"
import { Link, graphql } from "gatsby"
import '../css/style.css';
import Header from "../components/header";
import Footers from '../components/Footers';
import bird from '../images/bird.png';


const ContactPage = ({
    data
}) => {

    const about = data.contentfulAboutPagePortfolio

    return (
        <div className="body">
            <Header />
            <main className="about-main">
                <section className="about-wrapper">
                    <section className="about-left">
                        <article className="contact-title-container">
                            <h1>Get in touch</h1>
                            <p>If you have other request och questions , dont hesitat to use the form.</p>
                            <form action="">
                                <input className="input-field input-field-name" type="text" id="fname" name="firstname" placeholder="Name"></input>
                                <input className="input-field" type="email" name="email" placeholder="Email"></input>
                                <input className="input-field-subject" type="text" id="fname" name="firstname" placeholder="Subject"></input>
                                {/* <textarea id="subject" name="subject" placeholder="Message" style="height:200px"></textarea> */}
                                <textarea className="textarea" name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
                                <div className="btn-about-container">
                                    <button className="btn-about btn-send-message">Send message</button>
                                </div>
                            </form>
                        </article>
                    </section>
                    <section className="about-right">
                        <div>
                            <img src={bird} />
                        </div>
                    </section>
                </section>
            </main>
            <Footers />
        </div>
    )
}

export default ContactPage

export const Head = () => < title > start sida </title>

//Graphql query

export const AboutPageQuery = graphql`
query AboutPageQuery {
    contentfulAboutPagePortfolio {
        title
        subtitleName
        subtitle1
        presentation
        imageOfSara {
          file {
            url
          }
        }
        subtitle2
      }
}
    `
