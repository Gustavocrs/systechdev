"use client";
import styled from "styled-components";
import {AzulClaro, AzulEscuro, AzulFundo, BrancoLeve} from "@/utils/cores";
import Link from "next/link";

export const Navbar = ({NavAreas = []}) => {
  return (
    <Nav>
      <div style={{backgroundColor: "transparent"}} />
      <Ul>
        {NavAreas.map((nav, index) => (
          <Li key={index}>
            <a href={nav.href}>{nav.title}</a>
          </Li>
        ))}
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${AzulFundo};
  @media screen and (max-width: 600px) {
  }
`;

const Ul = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${BrancoLeve};
  background-color: ${AzulFundo};
  @media screen and (max-width: 600px) {
    width: 100%;
    /* background-color: red; */
  }
`;

const Li = styled.li`
  width: 120px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  color: white;
  /* background-color: red; */
  @media screen and (max-width: 600px) {
    width: 50px;
    /* background-color: red; */
  }
`;
