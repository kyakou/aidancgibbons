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
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div className="mb-5">
              <p>Hey there, I'm Aidan and I am one of the Co-Founders of Inspired 2 Uplift.</p>
            <p>In my free time, you can find me doing a variety of things. I love playing sports, especially basketball and soccer. I'm also really into music and enjoy making my own beats and lyrics. One of my favorite hobbies is going on hikes with my family. I love the physical, yet mental challenge it provides. And of course, I am passionate about entrepreneurship and am constantly striving to learn more and grow in that field.</p>
            <p>So, why did I start Inspired 2 Uplift? Well, I've always had a desire to help others. I know what it's like to face adversity and I wanted to create a platform where people could come together, share their stories, and lift each other up. Inspired 2 Uplift is a community that encourages and empowers individuals to find their own strength, and to spread positivity wherever they go.</p>

            <p>In the future, I aspire to become a successful entrepreneur who uses my platform to continue supporting those facing adversity. I am excited to see what the future holds for Inspired 2 Uplift, and I can't wait to see the impact that we can make together.</p>
            </div>
          </Col>
        </Row>
        {/* <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Timeline</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
              <div style={{ width: '100%', height: '100%' }}>
                <img
                  src="https://raw.githubusercontent.com/kyakou/aidancgibbons/master/src/assets/images/aidanbg.jpg"
                  alt="test"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

          </Col>
        </Row> */}
        {/* <Row className="sec_sp">
          <Col lg="5">
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
