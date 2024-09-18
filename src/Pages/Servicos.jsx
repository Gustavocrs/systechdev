import {
  AzulClaro,
  AzulEscuro,
  AzulFundo,
  CinzaClaro,
  CinzaEscuro,
  CinzaMedio,
} from "@/utils/cores";
import styled from "styled-components";
import {GoChecklist} from "react-icons/go";
import {TbBulb} from "react-icons/tb";
import {BsCodeSlash} from "react-icons/bs";
import {PiRocketLaunch} from "react-icons/pi";

export const Servicos = (id) => {
  return (
    <Container id={id}>
      <h1>Etapas de Criação</h1>
      <div id="elements">
        <div id="elemento_left">
          <div id="quadrado">
            <GoChecklist id="icon" />
          </div>
          <div id="retangulo">
            <h3>Descoberta e Planejamento</h3>
            <div id="textoCard">
              Nessa etapa, mergulhamos no seu negócio para entender
              profundamente seus objetivos, público-alvo e a mensagem que deseja
              transmitir. Com base nessas informações, elaboramos um plano
              estratégico e definimos a estrutura do site.
            </div>
          </div>
        </div>
        <div id="elemento_right">
          <div id="retangulo">
            <h3 className="alignright">Criação e Design</h3>
            <div className="alignright" id="textoCard">
              Com base no planejamento estratégico, criamos um design
              visualmente atraente e intuitivo, que reflete a identidade da sua
              marca. Desenvolvemos uma interface que proporciona uma experiência
              de navegação fluida e agradável para seus visitantes.
            </div>
          </div>
          <div id="quadrado">
            <TbBulb id="icon" />
          </div>
        </div>
        <div id="elemento_left">
          <div id="quadrado">
            <BsCodeSlash id="icon" />
          </div>
          <div id="retangulo">
            <h3>Desenvolvimento e Construção</h3>
            <div id="textoCard">
              Descrição: Nesta etapa, transformamos o design em um site
              funcional e responsivo, utilizando as tecnologias mais adequadas
              para garantir um desempenho otimizado em diferentes dispositivos.
            </div>
          </div>
        </div>
        <div id="elemento_right">
          <div id="retangulo">
            <h3 className="alignright">Lançamento e Otimização</h3>
            <div id="textoCard" className="alignright">
              Após a realização dos testes, lançamos seu site e o otimizamos
              para que tenha uma melhor performance. Continuamos monitorando o
              desempenho do site e realizando ajustes para garantir a melhor
              experiência para seus visitantes.
            </div>
          </div>
          <div id="quadrado">
            <PiRocketLaunch id="icon" />
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  width: 100vw;
  height: 100vh;
  color: #fff;
  background-color: ${CinzaClaro};

  overflow: hidden;

  span {
    /* position: relative;
    top: 250px;
    margin: 0 auto;
    font-size: 2rem;
    font-family: Cairo; */
  }

  h1 {
    /* background-color: ${AzulEscuro}; */
    text-align: center;
    padding: 5px 0 10px 0;
    font-weight: 800;
    font-size: 2rem;
    color: ${AzulFundo};

    width: 100%;
    border-top: 15px solid ${AzulClaro};
  }

  #elements {
    width: 70%;
    height: 100vh;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-end;
    background-color: ${CinzaClaro};
    /* background-color: green; */
  }
  #elemento_left,
  #elemento_right {
    width: 100%;
    margin-top: 20px;
    display: flex;
    border-radius: 3px;
    background-color: ${AzulClaro};
  }

  #quadrado {
    width: 20%;
    height: 140px;
    background-color: ${CinzaMedio};
    margin-right: 5px;
    border-left: 3px solid ${AzulClaro};
    border-right: 3px solid ${AzulClaro};

    display: flex;
    justify-content: center;
    align-items: center;

    #icon {
      font-size: 5rem;
      color: ${AzulClaro};
    }

    &:nth-child(1) {
      margin-left: 5px;
    }
  }

  #retangulo {
    width: 80%;
    height: 140px;
    background-color: ${CinzaMedio};
    margin-right: 5px;
    color: ${AzulFundo};

    &:nth-child(1) {
      margin-left: 5px;
    }

    h3 {
      padding: 0 10px;
      margin: 10px 0;
      font-size: 1.5rem;
    }

    #textoCard {
      width: 100%;
      padding: 10px;
      font-size: 1.2rem;
      /* background-color: red; */
    }
    .alignright {
      text-align: right;
    }
  }

  @media screen and (max-width: 600px) {
    #elements {
      align-items: center;
      padding: 0;
      width: 100%;
    }
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
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1rem;

      width: 69%;
      height: 100px;

      background-color: ${CinzaMedio};
      margin-right: 5px;
      &:nth-child(1) {
        margin-left: 5px;
      }
      h3 {
        text-align: center;
        font-size: 1.2rem;
      }
      #textoCard {
        display: none;
      }
      .alignright {
        text-align: center;
      }
    }
  }
`;
