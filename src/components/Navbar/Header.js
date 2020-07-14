import { Link } from "gatsby"
import React, { useState, useEffect, useRef } from "react"
import logo from '../../images/header/logo.png';
import { Navbar, Nav, Container, NavItem } from 'react-bootstrap';
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import style from './Header.module.css';
import { Person } from '@material-ui/icons';
import cx from 'classnames';
export const Header = () => {
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 50
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <header id="header" className={cx(style.bg, navBackground ? style.uponscroll : style.defaultscroll)} >
      <Container>
        <Navbar variant="light" className={cx(navBackground ? style.uponscroll : style.defaultscroll)} expand="lg">
          <Navbar.Brand className={style.navbrand}>
            <Link to="/"> <img src={logo} className={style.logo} alt="logo" /></Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarResponsive" />
          <NavbarCollapse id="navbarResponsive">

            <Nav as="ul" className={cx("mr-auto", style.ulelements)}>
              <Nav.Item as="li">
                <Link to="/" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>HOME</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/Courses" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>COURSES</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/Instructors" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>INSTRUCTORS</Link>
              </Nav.Item>
              {/* <Nav.Item as="li">
              <Link to="/page" className={cx("nav-link",style.lilink,style.lielements)} activeClassName={style.navitem}>ShortCodes</Link>
            </Nav.Item> */}
              <Nav.Item as="li">
                <Link to="/blog" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>BLOG</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/404" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>GALLERY</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/faq" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>FAQ</Link>
              </Nav.Item>
              <Nav.Item as="li">
                <Link to="/contact" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}>CONTACT US</Link>
              </Nav.Item>
            </Nav>
            <Nav as="ul" className={cx(style.login, style.ulelements)}>
              <NavItem as="li">
                <Link to="/login" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}><span className={style.loginreg}>Login</span></Link>

              </NavItem>
              <NavItem as="li">
                <Link to="/signup" className={cx("nav-link", style.lilink, style.lielements)} activeClassName={style.navitem}><span>Register</span></Link>

              </NavItem>
            </Nav>
          </NavbarCollapse>
        </Navbar>
      </Container>
    </header>
  )
}
export default Header;