import * as React from "react"
import { Link, graphql } from "gatsby"
import '../css/style.css';
import Header from "../components/header";
import Footers from '../components/Footers';
import Tools from '../components/Tools';
import Work from '../components/Work';
import Education from '../components/Education';
import pic from '../images/bildSara.webp';


const AboutPage = ({
    data
}) => {
    const [currentComponent, setCurrentComponent] = React.useState('Skills');

    const [button1Color, setButton1Color] = React.useState('rgba(0, 0, 0, 0)');
    const [button2Color, setButton2Color] = React.useState('rgba(0, 0, 0, 0)');
    const [button3Color, setButton3Color] = React.useState('rgba(0, 0, 0, 0)');

    const handleButton1Click = () => {
        setButton1Color('#FF4181');
        setButton2Color('rgba(0, 0, 0, 0)');
        setButton3Color('rgba(0, 0, 0, 0)');
    };

    const handleButton2Click = () => {
        setButton1Color('rgba(0, 0, 0, 0)');
        setButton2Color('#FF4181');
        setButton3Color('rgba(0, 0, 0, 0)');
    };
    const handleButton3Click = () => {
        setButton1Color('rgba(0, 0, 0, 0)');
        setButton2Color('rgba(0, 0, 0, 0)');
        setButton3Color('#FF4181');
    };

    const about = data.contentfulAboutPagePortfolio
    return (
        <div className="body">
            <Header />
            <main className="about-main">
                <section className="about-wrapper">
                    <section className="about-left">
                        <article className="about-text-holder">
                            <h1>{about.title}</h1>
                            <h2>{about.subtitle1} <span className="pinktext">{about.subtitleName}</span> <br />{about.subtitle2}</h2>
                            <p>{about.presentation} </p>
                            <div className="btn-about-container">
                                <Link to="/contact/"> <button className="btn-about">Get in touch</button></Link>

                            </div>
                        </article>
                    </section>
                    <div className="about-info">
                        <React.Fragment>
                            {/* change component view on click */}
                            <div className="about-buttons-holder">
                                <button style={{ backgroundColor: button1Color }} className="btn-about-info" onClick={() => { setCurrentComponent('Skills'); handleButton1Click() }} >Skills</button>
                                <button style={{ backgroundColor: button2Color }} className="btn-about-info" onClick={() => { setCurrentComponent('Work'); handleButton2Click() }}>Work</button>
                                <button style={{ backgroundColor: button3Color }} className="btn-about-info" onClick={() => { setCurrentComponent('Education'); handleButton3Click() }}>Education</button>
                            </div>

                            {currentComponent === 'Skills' && <Tools />}
                            {currentComponent === 'Work' && <Work />}
                            {currentComponent === 'Education' && <Education />}

                        </React.Fragment>
                    </div>
                    <section className="about-right">
                        <div>
                            <img src={pic} />
                        </div>
                    </section>
                </section>
            </main>
            <Footers />
        </div>
    )
}

export default AboutPage

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
