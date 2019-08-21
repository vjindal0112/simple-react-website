import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  a, .navbar-brand, .navbar-nav, .nav-link {
    color #bbb;

    &:hover {
      color: #fff;
    }
  }
`;





export const Footer = () => (
  <div className="fixed-bottom">
    <Styles>
      <Navbar color="dark">
          <Container>
              <Navbar.Brand style={{fontSize: 12}}>© Varun Jindal</Navbar.Brand>
          </Container>
      </Navbar>
    </Styles>
  </div>
)
