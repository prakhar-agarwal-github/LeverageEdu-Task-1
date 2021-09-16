import React from "react";
import { Container, Button } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Blog.css";

const Blog = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container style={{ height: "500px" }}>
      <Carousel responsive={responsive}>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-study-abroad.png"
              alt="Study Abroad"
            />
            <p className="blog-name">Study Abroad</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-scholarship.png"
              alt="Scholarships"
            />
            <p className="blog-name">Scholarships</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-success-stories.png"
              alt="Success Stories"
            />
            <p className="blog-name">Success Stories</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-exams.png"
              alt="Exams"
            />
            <p className="blog-name">Exams</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-how-to-guide.png"
              alt="How to Guides"
            />
            <p className="blog-name">How to Guides</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-quiz.png"
              alt="Quiz"
            />
            <p className="blog-name">Quiz</p>
          </div>
        </div>
        <div className="blog-card">
          <div className="content-box">
            <img
              className="blog-icon"
              src="https://images.leverageedu.com/blogs/blog-view-more.png"
              alt="View More"
            />
            <div className="consulation-box text-center">
              <a
                href="https://leverageedu.com/blog/ "
                className="consult-btn seeAll"
              >
                <Button style={{ marginTop: "16px" }} variant="light">
                  View Details
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </Container>
  );
};

export default Blog;
