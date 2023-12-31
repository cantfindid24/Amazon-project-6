import React, { useEffect, useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import logo from '../image-folder/logo/logo1.png';
// import '../../src/footer.css';
import { LinkContainer } from 'react-router-bootstrap';
import axios from 'axios';
import { getError } from './../utils';
import { toast } from 'react-toastify';

export default function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(`/api/products/categories`);
        setCategories(data);
      } catch (err) {
        toast.error(getError(err));
      }
    };
    fetchCategories();
  }, []);

  const handleScrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <div className="footer">
      <a
        href="#"
        id="navBackToTop"
        aria-label="Back to top"
        onClick={handleScrollToTop}
      >
        <div className="navFooterBackToTop">
          <span className="navFooterBackToTopText">Back to top</span>
        </div>
      </a>
      <section className="w-100">
        <Container className="container">
          <div className="logo2">
            <img src={logo} alt="footer/logo" />
          </div>

          <Nav className="nav">
            {/* {categories.map((category) => (
              <Nav.Item key={category}>
                <LinkContainer
                  to={{
                    pathname: '/search',
                    search: `category=${category}`,
                  }}
                >
                  <Nav.Link> {category}</Nav.Link>
                </LinkContainer>
              </Nav.Item>
            ))} */}

            <Nav.Item>
              <Nav.Link className="text-white">
                Conditions of Use & Sale
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">Privacy Notice</Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link className="text-white">Interest-Based Ads</Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="copyright">
            <p>
              &copy;{' '}
              <a href="#" target="blank">
                amazon-onrender.com
              </a>{' '}
              -Ankit Mehra <br /> All Rights Reserved 2023
            </p>
          </div>
          <Nav className="nav wrapper">
            <ul>
              <li className="facebook">
                <a href="#">
                  <i class="fa fa-facebook fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="twitter">
                <a href="#">
                  <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="instagram">
                <a href="#">
                  <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="google">
                <a href="#">
                  <i class="fa fa-google fa-2x" aria-hidden="true"></i>
                </a>
              </li>
              <li className="whatsapp">
                <a href="#">
                  <i className="fa fa-whatsapp fa-2x" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </Nav>
        </Container>
      </section>
    </div>
  );
}
