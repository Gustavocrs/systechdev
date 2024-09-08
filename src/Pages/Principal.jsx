"use client";
import {TypingEffect} from "@/Componentes/TypingEffect";
import {AzulFundo} from "@/utils/cores";
import styled from "styled-components";

export const Principal = () => {
  return (
    <ContainerBanner>
      <div id="typing">
        <TypingEffect text="Em breve..." speed={50} repeat={5} />
      </div>
    </ContainerBanner>
  );
};

const ContainerBanner = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  /* height: calc(100vh - 50px); */
  height: 100vh;
  color: #fff;
  background: url("modelo.svg") no-repeat;
  background-position: 50% 30%;
  background-size: 300px 300px;
  background-color: ${AzulFundo};

  #typing {
    position: relative;
    top: 25%;
    margin: 0 auto;
    font-size: 2rem;
    font-family: Cairo;
  }

  @media screen and (max-width: 600px) {
    top: 200px;
    background-size: 65% 65%;

    #typing {
      font-size: 1rem;
    }
  }
`;
