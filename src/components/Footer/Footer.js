import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  height: 80vh;
  padding-top: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1.8fr;
  position: relative;
`;

const FooterAboveCard = styled.div`
  color: white;
  width: 80%;
  text-align: center;
  height: 15rem;
  border: 0.2px solid black;
  border-radius: 20px;
  margin: 0 auto;
  background-color: #141c3a;
  z-index: 5;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 0.6fr;

  @media screen and (max-width: 989px) {
    height: 28rem;
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 0.5fr 0.6fr;
  }

  h2 {
    font-size: 3.2rem;

    @media screen and (max-width: 989px) {
      font-size: 2.2rem;
    }
  }
  p {
    font-size: 1.8rem;
    text-align: left;

    @media screen and (max-width: 989px) {
      font-size: 1.4rem;
      padding: 0 4rem;
      text-align: center;
    }
  }
  .lets-talk-btn {
    box-sizing: border-box;
    appearance: none;
    border: 0.2px solid #7510f7;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    align-self: center;
    font-size: 1.5rem;
    line-height: 1;
    margin-right: 3rem;
    padding: 20px 80px;
    text-decoration: none;
    text-align: center;
    text-transform: uppercase;
    transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);

    @media screen and (max-width: 989px) {
      font-size: 1.2rem;
      text-align: center;
      padding: 10px 50px;
      margin: 0 7rem;
    }
    a {
      color: #fff;
      text-decoration: none;
    }
    &:hover {
      background-position: 0;
      transform: scale(1.05) translateY(-3px);
      box-shadow: 0 20px 60px rbga(0, 0, 0, 7);
    }
  }
`;

const FooterSection = styled.div`
  width: 100%;

  max-height: 75vh;
  position: absolute;
  top: 12rem;
  background: linear-gradient(104deg, #7510f7 0%, #7510f7 100%);

  display: grid;
  grid-gap: 40px;
  grid-template-rows: repeat(3, 1fr);
  justify-items: center;
`;

const FooterImage = styled.img`
  width: 100px;
  height: 130px;
  padding: 10rem 0 0 0;
  transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    transform: scale(1.1) rotate(-8deg);
  }

  @media (max-width: 720px) {
    width: 60px;
    height: 100px;
  }
`;

const FooterLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  font-size: 25px;

  a {
    color: #eee;
    font-family: "Poppins";
    text-decoration: none;
    list-style-type: none;
    text-shadow: 0 0.2px 1px #5334e9;
    transition: 0.5s cubic-bezier(0.2, 0.8, 0.2, 1);
  }

  a:hover {
    transform: scale(1) translateY(-3px);
  }

  @media (max-width: 720px) {
    font-size: 23px;
  }
`;

const Footer = (props) => (
  <FooterWrapper>
    <FooterAboveCard>
      <h2>Have an idea ?</h2>
      <p>" I could turn your ideas into actions : ) "</p>
      <div href="#" className="lets-talk-btn">
        <a href="#">Let's talk</a>
      </div>
    </FooterAboveCard>
    <FooterSection>
      <FooterImage src={props.image}></FooterImage>
      <FooterLinks>
        <a href="">Facebook</a>
        <a href="">Instagram</a>
        <a href="">Linked-in</a>
        <a href="">Github</a>
        <a href="">Mail</a>
      </FooterLinks>
    </FooterSection>
  </FooterWrapper>
);

export default Footer;
