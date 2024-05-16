import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <HelmetProvider>
      <section
        id="home"
        className="home"
        style={{
          backgroundImage: `url(${introdata.your_img_url})`,
          minHeight: '100vh' // Ensuring it covers at least the height of the viewport
        }}
      >
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-flex h-100">
          <div className="text">
            <div className="intro">
              <h2 className="mb-1x dark-mode-text">{introdata.title}</h2>
              <h1 className="fluidz-48 mb-3 dark-mode-text">
                <Typewriter
                  options={{
                    strings: [
                      "activist",
                      "entrepreneur",
                      "academic weapon",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 10,
                  }}
                />
              </h1>
              <p className="mb-1x dark-mode-text">{introdata.description}</p>
              <div className="intro_btn-action pb-5">
                <Link to="/about" className="text_2">
                  <div id="button_p" className="ac_btn btn dark-mode-btn">
                    About
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
                {/* <Link to="/portfolio" className="text_2">
                  <div id="button_p" className="ac_btn btn">
                    Portfolio
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link> */}
                <Link to="/contact">
                  <div id="button_h" className="ac_btn btn dark-mode-btn">
                    Book me
                    <div className="ring one"></div>
                    <div className="ring two"></div>
                    <div className="ring three"></div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
