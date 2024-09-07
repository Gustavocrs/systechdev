import {
  AzulClaro,
  AzulEscuro,
  AzulFundo,
  CinzaClaro,
  CinzaEscuro,
  CinzaMedio,
} from "@/utils/cores";
import styled from "styled-components";

export const Servicos = () => {
  return (
    <Container>
      <h1>Etapas de Criação</h1>
      <div id="elements">
        <div id="elemento_left">
          <div id="quadrado"></div>
          <div id="retangulo"></div>
        </div>
        <div id="elemento_right">
          <div id="retangulo"></div>
          <div id="quadrado"></div>
        </div>
        <div id="elemento_left">
          <div id="quadrado"></div>
          <div id="retangulo"></div>
        </div>
        <div id="elemento_right">
          <div id="retangulo"></div>
          <div id="quadrado"></div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;

  width: 100vw;
  height: 100vh;
  color: #fff;
  background-color: ${CinzaClaro};

  span {
    position: relative;
    top: 250px;
    margin: 0 auto;
    font-size: 2rem;
    font-family: Cairo;
  }

  h1 {
    /* background-color: ${AzulEscuro}; */
    text-align: center;
    padding: 10px 0;
    font-weight: 800;
    font-size: 2rem;
    color: ${AzulFundo};

    width: 100%;
    border-top: 15px solid ${AzulClaro};
  }
  #elements {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: ${CinzaClaro};
  }
  #elemento_left,
  #elemento_right {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 0 20px;
    margin-top: 5px;
    /* padding: 0 150px; */
    background-color: ${AzulClaro};
    border-radius: 3px;
  }

  #quadrado {
    width: 20%;
    height: 70px;
    background-color: ${CinzaMedio};
    margin-right: 5px;
    &:nth-child(1) {
      margin-left: 5px;
    }
  }

  #retangulo {
    width: 80%;
    height: 70px;
    background-color: ${CinzaMedio};
    margin-right: 5px;
    &:nth-child(1) {
      margin-left: 5px;
    }
  }

  @media screen and (max-width: 600px) {
    #elemento_left,
    #elemento_right {
      width: 90%;
      margin-top: 30px;
    }
    #quadrado {
      width: 29%;
      height: 100px;
      background-color: ${CinzaMedio};
      margin-right: 5px;
      &:nth-child(1) {
        margin-left: 5px;
      }
    }

    #retangulo {
      width: 69%;
      height: 100px;
      background-color: ${CinzaMedio};
      margin-right: 5px;
      &:nth-child(1) {
        margin-left: 5px;
      }
    }
  }
`;
