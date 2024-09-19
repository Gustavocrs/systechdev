import {
  AzulClaro,
  AzulEscuro,
  AzulFundo,
  Branco,
  BrancoLeve,
  CinzaClaro,
} from "@/utils/cores";
import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import {getData, postData} from "@/Firebase/services";
import emailjs from "emailjs-com";
import Image from "next/image";
import Inputmask from "inputmask";
import Link from "next/link";

export const FaleConosco = () => {
  const [formControl, setFormControl] = useState({
    nome: "",
    email: "",
    cel: "",
    mensagem: "",
  });
  const [response, setResponse] = useState([]);
  const [disabledBtn, setDisabledBtn] = useState(true);
  const celInputRef = useRef(null);

  useEffect(() => {
    Inputmask("(99) 99999-9999").mask(celInputRef.current);
  }, []);
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
  // const handleAddContato = (e) => {
  //   e.preventDefault();
  //   const data = {
  //     cel: formControl.cel,
  //     email: formControl.email,
  //     mensagem: formControl.mensagem,
  //     nome: formControl.nome,
  //   };
  //   postData("contatos", data)
  //     .then((data) => {
  //       console.log("Mensagem enviada", data);
  //       setFormControl({
  //         nome: "",
  //         email: "",
  //         cel: "",
  //         mensagem: "",
  //       });
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao ler dados:", error);
  //     });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      from_name: formControl.nome,
      message: formControl.mensagem,
      email: formControl.email,
      phone: formControl.cel,
    };

    console.log(data);
    emailjs
      .send("service_i9jxq8o", "template_t6556na", data, "SMChjk4mJCaFWIr9m")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setFormControl({
          nome: "",
          email: "",
          cel: "",
          mensagem: "",
        });
      })
      .catch((error) => {
        console.log("FAILED...", error);
      });
  };

  useEffect(() => {
    if (
      formControl.nome == "" ||
      formControl.cel == "" ||
      formControl.email == "" ||
      formControl.mensagem == ""
    ) {
      setDisabledBtn(true);
    } else {
      setDisabledBtn(false);
    }
  }, [formControl]);

  return (
    <Container>
      <h1>Fale Conosco</h1>
      <span id="texto">
        Estamos prontos para transformar suas ideias em soluções digitais.
        Preencha o formulário abaixo e nossa equipe entrará em contato com você
        em breve.
      </span>
      <div id="divBody">
        <div id="divForm">
          <form id="form" onSubmit={handleSubmit}>
            <input
              id="input"
              type="text"
              name="nome"
              placeholder="Nome"
              value={formControl.nome}
              onChange={handleChange}
              required
            />
            <input
              id="input"
              type="email"
              name="email"
              placeholder="E-mail"
              value={formControl.email}
              onChange={handleChange}
              required
            />
            <input
              id="input"
              type="tel"
              name="cel"
              placeholder="Celular"
              value={formControl.cel}
              onChange={handleChange}
              required
              ref={celInputRef}
            />
            <textarea
              id="mensagem"
              name="mensagem"
              rows={10}
              placeholder="Mensagem"
              value={formControl.mensagem}
              onChange={handleChange}
              required
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
              <button id="button" type="submit" disabled={disabledBtn}>
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div id="divConteudo">
          <Link href="https://github.com/Gustavocrs" target="blank">
            <Image
              id="imgGithub"
              src="/github.png"
              width={150}
              height={150}
              alt="logo do github"
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/gustavocrsilva/"
            target="blank"
          >
            <Image
              id="imgLinkedin"
              src="/linkedin.png"
              width={150}
              height={150}
              alt="logo do linkedin"
            />
          </Link>
        </div>
      </div>
      <footer id="rodape">{`Copyright © 2024 - < Systech Dev />`}</footer>
    </Container>
  );
};
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 100vw;
  height: 100vh;
  color: ${AzulFundo};
  background-color: ${AzulFundo};
  overflow: scroll;

  h1 {
    /* background-color: ${AzulEscuro}; */
    text-align: center;
    padding: 10px 0;
    font-weight: 800;
    font-size: 2rem;
    color: ${BrancoLeve};

    width: 100%;
    border-top: 15px solid ${AzulClaro};
  }
  span {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: red; */
  }
  #texto {
    color: ${BrancoLeve};
    text-align: center;
    width: 100%;
    height: auto;
    font-size: 1.1rem;
    /* background-color: red; */
  }
  #divBody {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: red; */
  }
  /* #divConteudo {
    width: 100%;
    height: 60vh;
    padding: 10px;
    margin: 10px 50px;

    display: flex;
    flex-direction: column;
    background-color: #eeeeee;
    border-radius: 3px;
  } */
  #divForm,
  #divConteudo {
    width: 100%;
    height: 60vh;
    padding: 10px;
    margin: 10px 50px;

    display: flex;
    /* flex-direction: column; */
    justify-content: space-around;
    align-items: center;
    background-color: ${AzulFundo};
    /* background-color: red; */
    border-radius: 3px;
  }
  #divConteudo {
    background-color: transparent;
  }
  #divForm {
    /* filter: drop-shadow(1px -1px 5px white); */
  }
  #form {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 10px;

    #input {
      width: 100%;
      height: 40px;
      border-radius: 5px;
      border: none;
      border-bottom: 10px solid ${AzulClaro};
      outline: none;
      margin: 5px 0;
      padding: 5px 8px;
      font-size: 1rem;
      color: ${AzulEscuro};
      background-color: ${BrancoLeve};
    }
    #mensagem {
      border-radius: 5px;
      border: none;
      outline: none;
      border-bottom: 10px solid ${AzulClaro};
      margin: 5px 0;
      padding: 5px 8px;
      font-size: 1rem;
      color: ${AzulEscuro};
      background-color: ${BrancoLeve};
      resize: none;
    }
    #button {
      width: 120px;
      height: 40px;
      margin: 10px 0;
      color: ${BrancoLeve};
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
      &:disabled {
        background-color: transparent;
        color: ${BrancoLeve};
        cursor: not-allowed;
        border: 1px solid ${BrancoLeve};
      }
    }
  }
  #imgGithub,
  #imgLinkedin {
    /* background-color: #0077b5; */
    filter: drop-shadow(16px -16px 20px ${AzulClaro});
    &:hover {
      filter: drop-shadow(-16px 16px 20px ${Branco});
      cursor: pointer;
      transition: 300ms ease-in-out;
    }
  }
  #rodape {
    width: 100%;
    color: ${BrancoLeve};
    font-size: 0.8rem;
    padding: 15px 0;
    /* height: 30px; */
    text-align: center;
    /* background-color: red; */
  }

  @media screen and (max-width: 600px) {
    #divBody {
      flex-direction: column;
      justify-content: space-between;
      height: auto;
    }
    #divConteudo {
      height: 100px;
    }
    #divForm {
      height: auto;
    }
    #form {
    }
    #imgGithub,
    #imgLinkedin {
      width: 60px;
      height: 60px;
    }
    #rodape {
      /* background-color: red; */
      font-size: 0.7rem;
      padding: 5px 0;
    }
    #texto {
      padding: 20px 0;
    }
  }
`;
