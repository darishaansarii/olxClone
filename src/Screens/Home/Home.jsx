import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import carImg from "../../assets/Car-icon.png";
import { Link } from "react-router-dom";
import homeImg from "../../assets/Home-icon.png";
import styles from "./Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { CiLocationOn } from "react-icons/ci";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg from "../../assets/slide1.webp";
import { SmallCard } from "../../Components/Small Card/SmallCard";
import smCard1 from "../../assets/smCard1.png";
import smCard2 from "../../assets/smCard2.png";
import smCard3 from "../../assets/smCard3.png";
import smCard4 from "../../assets/smCard4.png";
import smCard5 from "../../assets/smCard5.png";
import smCard6 from "../../assets/smCard6.png";
import smCard7 from "../../assets/smCard7.png";
import smCard8 from "../../assets/smCard8.png";
import smCard9 from "../../assets/smCard9.png";
import smCard10 from "../../assets/smCard10.png";
import smCard11 from "../../assets/smCard11.png";
import smCard12 from "../../assets/smCard12.png";
import smCard13 from "../../assets/smCard13.png";
import smCard14 from "../../assets/smCard14.png";
import { data } from "../../Data.jsx";
import Cards from "../../Components/Card/Card.jsx";
import footAd from "../../assets/footerAd.jpeg";
import footMbl from "../../assets/footMbl.webp";
import foot1 from "../../assets/foot1.svg";
import foot2 from "../../assets/foot2.svg";
import foot3 from "../../assets/foot3.svg";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export const Home = () => {
    return (
        <>
        {/* =============================Navbar Section===================================== */}

      <Navbar expand="lg" fixed="top" className={styles.navbar}>
        <Container fluid>
          <Navbar.Brand href="#home" className={styles.logo}>
            Olx
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className={`${styles.focus} ${styles.shadow} `}
          />

          <Navbar.Collapse id="basic-navbar-nav " className={`${styles.collapse}`}>
            <Nav className={`me-auto`}>
              <Nav.Link
                href="#"
                className={`d-flex gap-2 ${styles["nav-link"]}`}
              >
                <img src={carImg} className={styles["nav-img"]} alt="" />
                Motors
              </Nav.Link>
              <Nav.Link
                href="#"
                className={`d-flex gap-2 ${styles["nav-link"]}`}
              >
                <img src={homeImg} className={styles["nav-img"]} alt="" />
                Property
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto d-flex gap-4">
              <Link className={styles.login}>Login</Link>
              <button className={`${styles.cursor} ${styles.sell}`}>
                <span className={styles.plusIcon}>+</span>SELL
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>

        <Container fluid className={`${styles["inputDiv"]}  ${styles.bg}`}>
          <div className={styles.location}>
            <CiLocationOn
              className={`${styles.locationIcon} ${styles.focus}`}
            />
            <select
              name=""
              id=""
              className={`${styles.focus} ${styles.cursor}`}
            >
              <option value="Pk">Pakistan </option>
            </select>
          </div>

          <div className={styles.searchBox}>
            <input
              type="text"
              className={`${styles.focus}`}
              placeholder="Find Cars, Mobile Phones and more..."
            />
            <button type="submit" className={styles.search}>
              <FontAwesomeIcon
                icon={faSearchengin}
                className={styles.searchIcon}
              />
              Search
            </button>
          </div>
        </Container>
      </Navbar>

      {/* =============================Categories Section===================================== */}

      <Container fluid className={styles.categories}>
        <li>
          <select name="" id="" className={`${styles.focus} ${styles.cursor}`}>
            <option value="all">All Categories</option>
          </select>
        </li>
        <li>Mobile Phones</li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Houses</li>
        <li>Video-Audios</li>
        <li>Tablets</li>
        <li>Land & Plots</li>
      </Container>

      {/* =============================Carousel Section===================================== */}

      <Container fluid className={styles.carousel}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={CarouselImg}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* =============================Small Card Section===================================== */}

      <Container fluid className={styles.smallCardContainer}>
      <SmallCard img={smCard1} text="Mobile Phones" />
      <SmallCard img={smCard2} text="Vehicles" />
      <SmallCard img={smCard3} text="Property for sale" />
      <SmallCard img={smCard4} text="Property for rent" />
      <SmallCard img={smCard5} text="Electronic & Home" />
      <SmallCard img={smCard6} text="Bikes" />
      <SmallCard img={smCard7} text="Business & Industrial" />
      <SmallCard img={smCard8} text="Services" />
      <SmallCard img={smCard9} text="Jobs" />
      <SmallCard img={smCard10} text="Animals" />
      <SmallCard img={smCard11} text="Furnitures & Home Decor" />
      <SmallCard img={smCard12} text="Fashion & Beauty" />
      <SmallCard img={smCard13} text="Books, Sports & Hobbies" />
      <SmallCard img={smCard14} text="Kids" />
      </Container>

      {/* =============================Card Section===================================== */}

      <Container fluid className={styles.cardContainer}>
        {
          data.map((e, i) => {
            return (
              <Cards key={e.id} img={e.image} price={e.price} title={e.title} id={e.id} />
            )
          })
        }
      </Container>

      {/* =============================Footer Section===================================== */}

      <Container fluid className={styles.footAd}>
        <img src={footAd} alt="" />
      </Container>

      <Container fluid className={styles.footDownload}>
         <div className={`${styles.footContent} ${styles.footBox}`}>
          <h2>Find amazing deals on the go.</h2>
          <h2 className={styles.color}>Download OLX App now!</h2>
         </div>
         <div className={`${styles.footImg} ${styles.footBox}`}>
         <img src={footMbl} />
         </div>
         <div className={`${styles.footApp} ${styles.footBox}`}>
          <img src={foot1} alt="" />
          <img src={foot2} alt="" />
          <img src={foot3} alt="" />
         </div>
      </Container>

      <Container fluid className={styles.footDiv}>
        <div className={`${styles.footComp}`}>
          <h6>Popular categories</h6>
          <li>Cars</li>
          <li>Flats for rent</li>
          <li>Mobile Phones</li>
          <li>Jobs</li>
        </div>
        <div className={`${styles.footComp}`}>
          <h6>Trending Searches</h6>
          <li>Bikes</li>
          <li>Watches</li>
          <li>Books</li>
          <li>Dogs</li>
        </div>
        <div className={`${styles.footComp}`}>
          <h6>About Us</h6>
          <li>About Dubizzle Group</li>
          <li>OLX Blog</li>
          <li>Contact Us</li>
          <li>OLX for Businesses</li>
        </div>
        <div className={`${styles.footComp}`}>
          <h6>OLX</h6>
          <li>Help</li>
          <li>Sitemap</li>
          <li>Terms of use</li>
          <li>Privacy Policy</li>
        </div>
        <div className={`${styles.socialLinks}`}>
          <h6>Follow Us</h6>
          <div className={styles.iconContainer}>
          <div><FaFacebook /></div>
          <div><FaXTwitter /></div>
          <div><FaInstagram /></div>
          <div><FaYoutube /></div>
          </div>
        </div>
      </Container>

      <Container fluid className={styles.footCopyright}>
        <p><span>Classfieds in Pakistan.</span> 2006-2025 OLX</p>
      </Container>

        </>
    )
}