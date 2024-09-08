import {AzulClaro, AzulEscuro, AzulFundo, CinzaClaro} from "@/utils/cores";
import styled from "styled-components";

export const FaleConosco = () => {
  return (
    <Container>
      <h1>Fale Conosco</h1>
      <span id="texto">
        Estamos prontos para transformar suas ideias em soluções digitais.
        Preencha o formulário abaixo e nossa equipe entrará em contato com você
        em breve.
      </span>
      <div id="divBody">
        <div id="divConteudo">
          <span>Github</span>
          <span>Github</span>
        </div>
        <div id="divForm">
          <form id="form">
            <input id="input" type="text" />
            <input id="input" type="text" />
            <textarea id="mensagem" name="mensagem" rows={10}></textarea>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button id="button">Limpar</button>
              <button id="button">Enviar</button>
            </div>
          </form>
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
  color: ${AzulFundo};
  background-color: ${AzulFundo};

  h1 {
    /* background-color: ${AzulEscuro}; */
    text-align: center;
    padding: 10px 0;
    font-weight: 800;
    font-size: 2rem;
    color: #fefefe;

    width: 100%;
    border-top: 15px solid ${AzulClaro};
  }
  span {
    height: 50px;
  }
  #texto {
    width: 100%;
    color: #fefefe;
    text-align: center;
    /* background-color: red; */
  }

  #divBody {
    display: flex;
    justify-content: space-between;
    width: 100%;

    /* background-color: red; */
  }

  #divConteudo,
  #divForm {
    width: 45%;
    height: 75vh;
    padding: 10px;
    margin: 10px 50px;

    display: flex;
    flex-direction: column;
    background-color: #eeeeee;
    border-radius: 3px;
  }
  #form {
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 10px;
    #input,
    #mensagem {
      margin: 5px 0;
    }
    #button {
      width: 120px;
      height: 40px;

      color: #fefefe;
      font-size: 1rem;
      background-color: ${AzulClaro};
      outline: none;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      &:hover {
        transition: 300ms ease-in-out;
        filter: drop-shadow(1px 1px 2px black);
        background-color: ${AzulEscuro};
      }
    }
  }
`;
