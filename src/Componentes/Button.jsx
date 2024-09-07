import styled from "styled-components";

export const Button = ({
  children,
  corFundo,
  corFonte,
  corHoverFundo,
  corHoverFonte,
  tamFonte,
  onClick,
  w,
  h,
}) => {
  return (
    <ButtonStyled
      corFundo={corFundo}
      corFonte={corFonte}
      corHoverFundo={corHoverFundo}
      corHoverFonte={corHoverFonte}
      onClick={onClick}
      tamFonte={tamFonte}
      w={w}
      h={h}
    >
      {children}
    </ButtonStyled>
  );
};
const ButtonStyled = styled.button`
  width: ${(props) => props.w || "100px"};
  height: ${(props) => props.h || "30px"};
  padding: 5px 10px;
  background-color: ${(props) => props.corFundo || "#gray"};
  color: ${(props) => props.corFonte || "#140202"};
  font-size: ${(props) => props.tamFonte || "0.8rem"};
  border-radius: 2px;
  border: none;
  &:hover {
    /* transition: all 1000ms; */
    background-color: ${(props) => props.corHoverFundo || null};
    color: ${(props) => props.corHoverFonte || null};
    cursor: pointer;
  }
`;
