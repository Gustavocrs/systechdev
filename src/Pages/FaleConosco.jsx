import {AzulClaro, AzulEscuro, AzulFundo, CinzaClaro} from "@/utils/cores";
import styled from "styled-components";
import {useEffect, useState} from "react";
import {addData} from "@/Firebase/contatosData";

export const FaleConosco = () => {
  const [formControl, setFormControl] = useState({
    nome: "",
    email: "",
    cel: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormControl((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleClearForm = () => {
    setFormControl({
      nome: "",
      email: "",
      cel: "",
      mensagem: "",
    });
  };
  const handleAddContato = (e) => {
    e.preventDefault();
    const data = {
      cel: formControl.cel,
      email: formControl.email,
      mensagem: formControl.mensagem,
      nome: formControl.nome,
    };
    addData("contatos", data)
      .then((data) => {
        console.log("Mensagem enviada", data);
        setFormControl({
          nome: "",
          email: "",
          cel: "",
          mensagem: "",
        });
      })
      .catch((error) => {
        console.error("Erro ao ler dados:", error);
      });
  };
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
          <form id="form" onSubmit={handleAddContato}>
            <input
              id="input"
              type="text"
              name="nome"
              placeholder="Nome"
              value={formControl.nome}
              onChange={handleChange}
            />
            <input
              id="input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formControl.email}
              onChange={handleChange}
            />
            <input
              id="input"
              type="tel"
              name="cel"
              placeholder="Celular"
              value={formControl.cel}
              onChange={handleChange}
            />
            <textarea
              id="mensagem"
              name="mensagem"
              rows={10}
              placeholder="Mensagem"
              value={formControl.mensagem}
              onChange={handleChange}
            ></textarea>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
              }}
            >
              <button id="button" type="button" onClick={handleClearForm}>
                Limpar
              </button>
              <button id="button" type="submit">
                Enviar
              </button>
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

    #input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      border-bottom: 5px solid ${AzulClaro};
      outline: none;
      margin: 5px 0;
      padding: 5px 8px;
      font-size: 1rem;
      color: ${AzulEscuro};
    }
    #mensagem {
      border-radius: 5px;
      border: none;
      outline: none;
      border-bottom: 5px solid ${AzulClaro};
      margin: 5px 0;
      padding: 3px 8px;
      font-size: 1rem;
      color: ${AzulEscuro};
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
