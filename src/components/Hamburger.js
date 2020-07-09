import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import react from "../images/react2.jpg";
import redux from "../images/redux2.jpg";
import bootstrap from "../images/bootstrap.png";
import sass from "../images/sass.jpg";
import gatsby from "../images/gatsby.png";

const cities = [
  {
    name: "React",
    image: react,
  },
  {
    name: "Redux",
    image: redux,
  },
  {
    name: "Bootstrap",
    image: bootstrap,
  },
  {
    name: "Sass",
    image: sass,
  },
  {
    name: "Gatsby JS",
    image: gatsby,
  },
];

const Hamburger = ({ state }) => {
  //Vars for our dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let reavealMenuBackground = useRef(null);
  let cityBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let info = useRef(null);

  useEffect(() => {
    if (state.clicked === false) {
      //close our menu
      gsap.to([revealMenu, reavealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });
      gsap.to(menu, {
        duration: 1,
        css: {
          display: "block",
        },
      });
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      //open our menu
      gsap.to(menu, {
        duration: 0,
        css: {
          display: "block",
        },
      });
      gsap.to([reavealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: "100%",
      });
      staggerReveal(reavealMenuBackground, revealMenu);
      fadeInUp(info);
      staggerText(line1, line2, line3);
    }
  }, [state]);

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: "right top",
      skewY: 2,
      ease: "power3.inOut",
      stagger: {
        amount: 0.1,
      },
    });
  };
  const fadeInUp = (node1) => {
    gsap.from(node1, {
      duration: 1,
      y: 60,
      delay: 0.2,
      opacity: 0,
      ease: "power3.inOut",
    });
  };
  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  const handleCity = (city) => {
    gsap.to(cityBackground, {
      duration: 0,
      background: `url(${city}) center center`,
    });
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 1,
      ease: "power3.inOut",
    });
    gsap.from(cityBackground, {
      duration: 0.4,
      skewY: 2,
      transformOrigin: "right top",
    });
  };

  const handleCityRemove = () => {
    gsap.to(cityBackground, {
      duration: 0.4,
      opacity: 0,
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (reavealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
        <div
          ref={(el) => (cityBackground = el)}
          className="menu-city-background"
        ></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link ref={(el) => (line1 = el)} to="/projects">
                      Projects
                    </Link>
                  </li>{" "}
                  <li>
                    <Link ref={(el) => (line2 = el)} to="/blog">
                      Blog
                    </Link>
                  </li>{" "}
                  <li>
                    <Link ref={(el) => (line3 = el)} to="/contact">
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </nav>
              <div ref={(el) => (info = el)} className="info">
                <h3>Our Promise</h3>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Totam, alias est laboriosam ipsum perspiciatis quam illum
                  sapiente doloribus maxime sequi! Dolores maiores molestiae
                  repellendus? Veniam quos omnis mollitia sapiente corrupti.
                </p>
              </div>
              <div className="locations">
                Locations :
                {cities.map((el) => (
                  <span
                    key={el.name}
                    onMouseEnter={() => handleCity(el.image)}
                    onMouseOut={handleCityRemove}
                  >
                    {el.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
