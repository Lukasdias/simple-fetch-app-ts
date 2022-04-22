import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border: 1.5px solid #fefefe;
  padding: 1.75rem;
  margin: 1rem 0;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: blueviolet;
    transition: transform 150ms ease-in-out;
    transform: scaleX(0);
    transform-origin: right;
  }
  :hover {
    ::before {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  * {
    position: relative;
    z-index: 2;
    color: white;
    font-size: 1.5rem;
    font-weight: 550;
  }
`;
