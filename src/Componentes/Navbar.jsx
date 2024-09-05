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
          <Link key={index} href={nav.href}>
            <Li>{nav.title}</Li>
          </Link>
        ))}
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  width: 100%;
  height: 30px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  background-color: ${AzulFundo};
`;

const Ul = styled.ul`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${BrancoLeve};
  background-color: ${AzulFundo};
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
`;
