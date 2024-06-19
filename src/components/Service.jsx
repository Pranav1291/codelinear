import "./Service.css";
import { gsap } from "gsap/gsap-core";
import { useRef, useEffect } from "react";
import arrow from "/src/assets/arrow.svg";
import circle from '/src/assets/Ellipse 1.svg';
import serviceimage from "/src/assets/glass (1).png";

export default function Work() {
  const about = useRef(null);
  const arrowanimate = useRef(null);
  const arrow1 = useRef(null);
  const serv = useRef(null);
  const menuhead = useRef(null);
  const menupara = useRef(null);
  const menulist = useRef(null);
  const menuitems = useRef(null);
  const menuhead1 = useRef(null);
  const menupara1 = useRef(null);
  const menulist1 = useRef(null);
  const menuitems1 = useRef(null);
  const menuhead2 = useRef(null);
  const menupara2 = useRef(null);
  const menulist2 = useRef(null);
  const menuitems2 = useRef(null);
  const menuhead3 = useRef(null);
  const menupara3 = useRef(null);
  const menulist3 = useRef(null);
  const menuitems3 = useRef(null);
  const menuhead4 = useRef(null);
  const menupara4 = useRef(null);
  const menulist4 = useRef(null);
  const menuitems4 = useRef(null);
  const menuhead5 = useRef(null);
  const menupara5 = useRef(null);
  const menulist5 = useRef(null);
  const menuitems5 = useRef(null);
  const menuhead6 = useRef(null);
  const menupara6 = useRef(null);
  const menulist6 = useRef(null);
  const menuitems6 = useRef(null);
  const menuhead7 = useRef(null);
  const menupara7 = useRef(null);
  const menulist7 = useRef(null);
  const menuitems7 = useRef(null);
  const mobileView = useRef(null);
  


  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleChange = () => {
        if (mediaQuery.matches) {
            gsap.to(about.current, {
                background: 'conic-gradient(from 193.23deg at 35.28% 47.29%, #386128 0deg, #BCC66F 50.44deg, #386128 360deg)',
                color: 'white',
                duration: 0.5
            });
        } 
    };

    handleChange(); // Initial check
    mediaQuery.addListener(handleChange); // Add listener to media query

    return () => {
        mediaQuery.removeListener(handleChange); // Cleanup listener on unmount
    };
}, []);

  const animate = () => {
    gsap.to(about.current, {
      color: "#F5FF9D",
      background:
        "conic-gradient(from 193.23deg at 35.28% 47.29%, #386128 0deg, #BCC66F 50.44deg, #386128 360deg)",
    });
    gsap.to(arrowanimate.current, {
      scale: 1.03,
      border: "1px solid #F5FF9D",
      background: "#f5ff9d63",
    });
    gsap.to(arrow1.current, { x: 20 });
  };
  const animateout = () => {
    gsap.to(about.current, { color: "#000", background: "#f9f9f9" });
    gsap.to(arrowanimate.current, {
      scale: 1,
      border: "1px solid black",
      background: "transparent",
    });
    gsap.to(arrow1.current, { x: 0 });
  };
  const vanish = () => {
    gsap.to(serv.current, { opacity: 0 });
  };
  const appear = () => {
    gsap.to(serv.current, { opacity: 1 });
  };

  const hover = () => {
    gsap.to(menuhead.current, { y: -85 });
    gsap.to(menupara.current, {
      opacity: 0,
    });
    gsap.to(menulist.current, { opacity: 1 });
    gsap.to(menuitems.current, { background: "#D3DAA7" });
  };
  const unhover = () => {
    gsap.to(menuhead.current, { y: 0 });
    gsap.to(menupara.current, {
      opacity: 1,
    });
    gsap.to(menulist.current, { opacity: 0 });
    gsap.to(menuitems.current, { background: "transparent" });
  };
  const hover1 = () => {
    gsap.to(menuhead1.current, { y: -85 });
    gsap.to(menupara1.current, {
      opacity: 0,
    });
    gsap.to(menulist1.current, { opacity: 1 });
    gsap.to(menuitems1.current, { background: "#D3DAA7" });
  };
  const unhover1 = () => {
    gsap.to(menuhead1.current, { y: 0 });
    gsap.to(menupara1.current, {
      opacity: 1,
    });
    gsap.to(menulist1.current, { opacity: 0 });
    gsap.to(menuitems1.current, { background: "transparent" });
  };
  const hover2 = () => {
    gsap.to(menuhead2.current, { y: -85 });
    gsap.to(menupara2.current, {
      opacity: 0,
    });
    gsap.to(menulist2.current, { opacity: 1 });
    gsap.to(menuitems2.current, { background: "#D3DAA7" });
  };
  const unhover2 = () => {
    gsap.to(menuhead2.current, { y: 0 });
    gsap.to(menupara2.current, {
      opacity: 1,
    });
    gsap.to(menulist2.current, { opacity: 0 });
    gsap.to(menuitems2.current, { background: "transparent" });
  };
  const hover3 = () => {
    gsap.to(menuhead3.current, { y: -85 });
    gsap.to(menupara3.current, {
      opacity: 0,
    });
    gsap.to(menulist3.current, { opacity: 1 });
    gsap.to(menuitems3.current, { background: "#D3DAA7" });
  };
  const unhover3 = () => {
    gsap.to(menuhead3.current, { y: 0 });
    gsap.to(menupara3.current, {
      opacity: 1,
    });
    gsap.to(menulist3.current, { opacity: 0 });
    gsap.to(menuitems3.current, { background: "transparent" });
  };
  const hover4 = () => {
    gsap.to(menuhead4.current, { y: -85 });
    gsap.to(menupara4.current, {
      opacity: 0,
    });
    gsap.to(menulist4.current, { opacity: 1 });
    gsap.to(menuitems4.current, { background: "#D3DAA7" });
  };
  const unhover4 = () => {
    gsap.to(menuhead4.current, { y: 0 });
    gsap.to(menupara4.current, {
      opacity: 1,
    });
    gsap.to(menulist4.current, { opacity: 0 });
    gsap.to(menuitems4.current, { background: "transparent" });
  };
  const hover5 = () => {
    gsap.to(menuhead5.current, { y: -85 });
    gsap.to(menupara5.current, {
      opacity: 0,
    });
    gsap.to(menulist5.current, { opacity: 1 });
    gsap.to(menuitems5.current, { background: "#D3DAA7" });
  };
  const unhover5 = () => {
    gsap.to(menuhead5.current, { y: 0 });
    gsap.to(menupara5.current, {
      opacity: 1,
    });
    gsap.to(menulist5.current, { opacity: 0 });
    gsap.to(menuitems5.current, { background: "transparent" });
  };
  const hover6 = () => {
    gsap.to(menuhead6.current, { y: -85 });
    gsap.to(menupara6.current, {
      opacity: 0,
    });
    gsap.to(menulist6.current, { opacity: 1 });
    gsap.to(menuitems6.current, { background: "#D3DAA7" });
  };
  const unhover6 = () => {
    gsap.to(menuhead6.current, { y: 0 });
    gsap.to(menupara6.current, {
      opacity: 1,
    });
    gsap.to(menulist6.current, { opacity: 0 });
    gsap.to(menuitems6.current, { background: "transparent" });
  };
  const hover7 = () => {
    gsap.to(menuhead7.current, { y: -85 });
    gsap.to(menupara7.current, {
      opacity: 0,
    });
    gsap.to(menulist7.current, { opacity: 1 });
    gsap.to(menuitems7.current, { background: "#D3DAA7" });
  };
  const unhover7 = () => {
    gsap.to(menuhead7.current, { y: 0 });
    gsap.to(menupara7.current, {
      opacity: 1,
    });
    gsap.to(menulist7.current, { opacity: 0 });
    gsap.to(menuitems7.current, { background: "transparent" });
  };

  

  return (
    <section
      className="services-section  "
      ref={about}
      onMouseEnter={animate}
      onMouseLeave={animateout}
    >
      <div  className="service ">
        <div className="work-content ">
          <h1 className="work-head ">INDUSTRIES WE SERVED</h1>
          <p className="work-para">
            Id donec rutrum mauris venenatis ac. Id metus lorem mus sit magna
            varius cum proin. Accumsan volutpat natoque purus pellentesque nec
            ac nulla turpis consectetur. Fermentum ut non commodo lacus enim.
          </p>
        </div>
        <div className="services-button ">
          <p className="about-button-content">SERVICES</p>
          <div className="arrow-div" ref={arrowanimate}>

            <img src={arrow} alt="" className="arrow" ref={arrow1} />
          </div>
          <img src={circle} alt="" className="circle" ref={arrowanimate} />
        </div>
        <div className="">
          <img src={serviceimage} alt="" className="serviceimage" ref={serv} />
        </div>
        <div
          className="services-menu"
          onMouseEnter={vanish}
          onMouseLeave={appear}
        >
          <div
            className="menuitems  "
            onMouseEnter={hover}
            onMouseLeave={unhover}
            ref={menuitems}
          >
            <h1 className="menu-head " ref={menuhead}>
              FINTECH
            </h1>
            <p className="menu-para" ref={menupara}>
              FINTECH
            </p>
            <p className="menu-list" ref={menulist}>
              <p>KLUB</p>
              <p>|</p>
              <p>MIDDLE</p>
              <p>|</p>
              <p>KERNEL WEALTH</p>
              <p>|</p>
              <p>TRADEJINI</p>
            </p>
          </div>
          <div
            className="menuitems "
            onMouseEnter={hover1}
            onMouseLeave={unhover1}
            ref={menuitems1}
          >
            <h1 className="menu-head " ref={menuhead1}>
              TECHNOLOGY
            </h1>
            <p className="menu-para " ref={menupara1}>
              TECHNOLOGY
            </p>
            <p className="menu-list" ref={menulist1}>
              <p>DEEL</p>
              <p>|</p>
              <p>BOOKING FACTORY</p>
            </p>
          </div>
          <div
            className="menuitems"
            onMouseEnter={hover2}
            onMouseLeave={unhover2}
            ref={menuitems2}
          >
            <h1 className="menu-head" ref={menuhead2}>
              ECOMMERCE
            </h1>
            <p className="menu-para" ref={menupara2}>
              ECOMMERCE
            </p>
          </div>
          <div
            className="menuitems"
            onMouseEnter={hover3}
            onMouseLeave={unhover3}
            ref={menuitems3}
          >
            <h1 className="menu-head " ref={menuhead3}>
              SUPPLY CHAIN AND LOGISTICS
            </h1>
            <p className="menu-para" ref={menupara3}>
              SUPPLY CHAIN AND LOGISTICS
            </p>
            <p className="menu-list" ref={menulist3}>
              <p>CONVOY</p>
            </p>
          </div>
          <div
            className="menuitems"
            onMouseEnter={hover4}
            onMouseLeave={unhover4}
            ref={menuitems4}
          >
            <h1 className="menu-head " ref={menuhead4}>
              HEALTHCARE
            </h1>
            <p className="menu-para" ref={menupara4}>
              HEALTHCARE
            </p>
            <p className="menu-list" ref={menulist4}>
              <p>LYRA HEALTH</p>
              <p>|</p>
              <p>HINGE HEALTH</p>
            </p>
          </div>
          <div
            className="menuitems"
            onMouseEnter={hover5}
            onMouseLeave={unhover5}
            ref={menuitems5}
          >
            <h1 className="menu-head " ref={menuhead5}>
              FOOD AND BEVERAGES
            </h1>
            <p className="menu-para" ref={menupara5}>
              FOOD AND BEVERAGES
            </p>
            <p className="menu-list" ref={menulist5}>
              <p>BRITANNIA</p>
              <p>|</p>
              <p>BEE AND HIVE</p>
            </p>
          </div>
          <div
            className="menuitems"
            onMouseEnter={hover6}
            onMouseLeave={unhover6}
            ref={menuitems6}
          >
            <h1 className="menu-head " ref={menuhead6}>
              BIOPHARMACEUTICAL
            </h1>
            <p className="menu-para" ref={menupara6}>
              BIOPHARMACEUTICAL
            </p>
            <p className="menu-list " ref={menulist6}>
              <p>IMAPAC</p>
            </p>
          </div>
          <div
            className="menuitems"
            onMouseEnter={hover7}
            onMouseLeave={unhover7}
            ref={menuitems7}
          >
            <h1 className="menu-head " ref={menuhead7}>
              MANUFACTURING
            </h1>
            <p className="menu-para" ref={menupara7}>
              MANUFACTURING
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
