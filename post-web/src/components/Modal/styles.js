import styled from "styled-components";

export const Container = styled.div`
  max-width: 450px;
  width: 100%;
  background-color: #fff;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 3;
  border-radius: 5px;
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2),
    0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12);
`;

export const ModalOverflow = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.85);
  z-index: 2;
`;

export const ButtonIcon = styled.button`
  width: auto;
  position: absolute;
  top: 8px;
  right: 8px;
  color: #333;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }

  & > svg {
    width: 20px;
    height: 20px;
  }
`;
