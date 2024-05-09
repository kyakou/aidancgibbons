import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
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
      <Container className="About-header">
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
            <h3 className="color_sec py-4 mb-9">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center mb-0">
            <div className="">
            <p>Hey there, I'm Aidan and I am one of the Co-Founders of Inspired 2 Uplift.</p>
            <p>In my free time, you can find me doing a variety of things. I love playing sports, especially basketball and soccer. I'm also really into music and enjoy making my own beats and lyrics. One of my favorite hobbies is going on hikes with my family. I love the physical, yet mental challenge it provides. And of course, I am passionate about entrepreneurship and am constantly striving to learn more and grow in that field.</p>
            <p>In the future, I aspire to become a successful entrepreneur who uses my platform to continue supporting those facing adversity. I am excited to see what the future holds for Inspired 2 Uplift, and I can't wait to see the impact that we can make together.</p>
            </div>
          </Col>
        </Row>

  <Row className="mb-3 mt-3 pt-md-3">
    <Col lg="8">
      <h1 className="display-4">Work</h1>
      <hr className="t_border my-4 ml-0 text-left" />
    </Col>
  </Row>

<Row className="sec_sp mb-5">
<Col lg="5">
  <h3 className="color_sec py-2 mb-0"> Inspired 2 Uplift</h3>
  <p className="mb-0"> Executive Director and Co-founder</p>
  <p className="mb-0"> 2022 - Present</p>
</Col>
<Col lg="7">
    <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://lh4.googleusercontent.com/0E_PPlHtk7prXey0qIu6LC7tfrVuJv5ojysg2nkM3fCvFk3ZOPGNACSEJp3Emj38AlUd2Q6QFNsx5EHC_-O8A9Jowcn3eRsJH_7ZM0tnZQAD_oQYNoILG_MSGfcck4U3sA=w1280"
        alt="test"
        style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover', objectPosition: 'top center' }}
      />
    </div>
            <div className="mt-4">
              <p>I started Inspired 2 Uplift because I've always had a desire to help others. I know what it's like to face adversity and I wanted to create a platform where people could come together, share their stories, and lift each other up. Inspired 2 Uplift is a community that encourages and empowers individuals to find their own strength, and to spread positivity wherever they go.</p>
            </div>
</Col>
</Row>

<Row className="sec_sp mb-5">
<Col lg="5">
<h3 className="color_sec py-2 mb-0" style={{ fontSize: '24px' }}>Management Students Association</h3>
  <p className="mb-0"> First Year Representative of Innovation Council</p>
  <p className="mb-0"> 2023 - Present</p>
</Col>
<Col lg="7">
    <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/5c05b92355b02c26c5014801/96ea08b0-55bc-4796-9acb-dc54c60b6060/IMG_6864.jpg?format=750w"
        alt="test"
        style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover', objectPosition: 'top center' }}
      />
    </div>
            <div className="mt-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
              <p>i stole this off the internet aidan lmao</p>
            </div>
</Col>
</Row>

<Row className="sec_sp mb-5">
<Col lg="5">
<h3 className="color_sec py-2 mb-0" style={{ fontSize: '24px' }}>The Well Pub @ UBC Okanagan</h3>
  <p className="mb-0"> Kitchen Staff</p>
  <p className="mb-0"> 2023 - Present</p>
</Col>
<Col lg="7">
    <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <img
        src="https://okmain.cms.ok.ubc.ca/wp-content/uploads/sites/26/2022/04/ubco-aerials-campus-sunset.jpg"
        alt="test"
        style={{ width: '100%', height: '100%', borderRadius: '10px', objectFit: 'cover', objectPosition: 'top center' }}
      />
    </div>
            <div className="mt-4">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
</Col>
</Row>

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

  <p className="mb-0"> 2023</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
</Col>
</Row>

<Row className="sec_sp mb-5">
<Col lg="5">
<a href="https://www.cnib.ca/en/blog/meet-aidan-gibbons-recipient-2023-cnib-national-youth-council-leadership-award">
  <h3 className="color_sec py-2 mb-0" style={{ textDecoration: 'none !important' }}>CNIB National Youth Council Leadership Award</h3>
</a>

  <p className="mb-0"> 2023</p>
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
</Col>
</Row>

        {/* <Row className="sec_sp">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
            <h5>Strategic Leadership</h5>
            <p>test</p>
            <h5>Branding & Marketing</h5>
            <p>test</p>
            <h5>Negotations & Communication</h5>
            <p>test</p>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">services</h3>
          </Col>
          <Col lg="7">
            {services.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                </div>
              );
            })}
          </Col>
        </Row> */}
      </Container>
    </HelmetProvider>
  );
};
