import * as React from "react"
import { Link, graphql } from "gatsby"
import '../css/style.css';
import Header from "../components/header";
import Footers from '../components/Footers';
import styled from "styled-components";

const NotFoundPage = () => {

        return (
                <div className="body">
                        <Header />
                        <main className="home-main">
                                <section className="header-container">
                                        <h2>404</h2>
                                        <h1>Page not found</h1>
                                        <p>The link you clicked may be broken or the page may have been removed</p>

                                        <Link to="/" className="return">Return home</Link>
                                </section>
                        </main>
                        <Footers />
                </div>
        )
}

export default NotFoundPage