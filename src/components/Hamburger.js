import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Hamburger = ({ state }) => {
  //Vars for our dom nodes
  let menu = useRef(null);
  let revealMenu = useRef(null);
  let reavealMenuBackground = useRef(null);
  let line1 = useRef(null);
  let line2 = useRef(null);
  let line3 = useRef(null);
  let line4 = useRef(null);

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

  const staggerText = (node1, node2, node3, node4) => {
    gsap.from([node1, node2, node3, node4], {
      duration: 0.7,
      y: 100,
      delay: 0.1,
      ease: "power3.inOut",
      stagger: {
        amount: 0.3,
      },
    });
  };

  return (
    <div ref={(el) => (menu = el)} className="hamburger-menu">
      <div
        ref={(el) => (reavealMenuBackground = el)}
        className="menu-secondary-background-color"
      ></div>
      <div ref={(el) => (revealMenu = el)} className="menu-layer">
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
                  </li>{" "}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
