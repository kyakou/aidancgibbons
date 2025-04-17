import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header about-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp mb-0">
          <Col lg="5">
            <h3 className="color_sec py-4 mb-9">My Story</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center mb-0">
            <div className="">
            <p>Aidan Gibbons is an 18-year-old social impact leader pursuing both a bachelor's and master's degree in Business Management as an incoming freshman at The University of British Columbia. He is very enthusiastic about change-making, youth leadership, and disability awareness.</p>

            <p>Aidan is the Co-founder and Executive Director of one of the fastest-growing youth-led nonprofit organizations in the world, helping spread awareness and support for kids facing disabilities: INSPIRED 2 UPLIFT. His NGO works towards normalizing the school environment and providing a caring and safe community for students with disabilities as they navigate the uphill battle against societal stigmas at school and in their community. In the past year, Aidan, along with his partners, cultivated a team of youth leaders in growing their own I2U chapters throughout Western Canada and the USA.</p>

            <p>Aidan's work has been recognized in local news outlets and has been awarded through distinctions and scholarships within his community.</p>

            <p>He strongly believes in uniting the younger generations to make positive change and plans on discussing his journey, youth leadership, and nonprofit at speaking events across the nation in the coming years.</p>
            </div>
          </Col>
        </Row>

        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4">Work Experience</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Timeline data={worktimeline} />

        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4">Awards and Press</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp mb-5">
          <Col lg="5">
            <a href="https://www.richmondchamber.ca/2023/06/20/richmond-chambers-carol-young-scholarship-recipient-announced/">
              <h3 className="color_sec py-2 mb-0" style={{ textDecoration: 'none !important' }}>Carol Young Scholarship Award</h3>
            </a>

            <p className="mb-2"> 2023</p>
          </Col>
          <Col lg="7">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="https://www.richmondsentinel.ca/uploads/article/CarolYoungScholarship_230620.jpg"
                alt="test"
                style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
            <div className="mt-4">
              <p>The Richmond Chamber of Commerce Carol Young Scholarship is a $2,500 award that recognizes high school students from Richmond who have demonstrated resilience and leadership by overcoming significant challenges. The scholarship supported my own academic journey, recognizing my efforts to overcome adversity and inspire others.</p>
            </div>
          </Col>
        </Row>

        <Row className="sec_sp mb-5">
          <Col lg="5">
            <a href="https://www.cnib.ca/en/blog/meet-aidan-gibbons-recipient-2023-cnib-national-youth-council-leadership-award">
              <h3 className="color_sec py-2 mb-0" style={{ textDecoration: 'none !important' }}>CNIB National Youth Council Leadership Award</h3>
            </a>

            <p className="mb-2"> 2023</p>
          </Col>
          <Col lg="7">
            <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img
                src="https://www.cnib.ca/sites/default/files/styles/banner_image_wide/public/2023-09/AG_Banner.png?h=7acbc861&itok=GA5Kb35m"
                alt="test"
                style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover', objectPosition: 'top center' }}
              />
            </div>
            <div className="mt-4">
              <p>The CNIB National Youth Council Leadership Award annually honors young leaders who have demonstrated significant community impact. Recipients receive a $1,000 prize and recognition for their leadership that aligns with the CNIB's mission to support and raise awareness for young Canadians with sight loss. </p>
            </div>
          </Col>
        </Row>

        <Row className="mb-3 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4">Contact</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong> aidan@inspired2uplift.com
              <br />
              <br />
            </address>
            <a href="https://calendly.com/aidancgibbons" target="_blank" rel="noopener noreferrer">
              <div id="button_h" className="ac_btn btn dark-mode-btn">
                Book me
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/theaidangibbons/" target="_blank" rel="noopener noreferrer">
              <div id="button_h" className="ac_btn btn dark-mode-btn">
                Linkedin
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
            <a href="https://instagram.com/aidancgibbons" target="_blank" rel="noopener noreferrer">
              <div id="button_h" className="ac_btn btn dark-mode-btn">
                Instagram
                <div className="ring one"></div>
                <div className="ring two"></div>
                <div className="ring three"></div>
              </div>
            </a>
          </Col>
          <Col lg="7" className="d-flex justify-content-end align-items-center">
            <div className="intro_btn-action pb-5">
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
