import styled from "styled-components";

export const Container = styled.aside`
  max-width: 60px;
  width: 100%;
  height: 100%;
  background-color: #a18aff;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  > a {
    margin-top: auto;
  }

  a {
    width: 100%;
    color: #fff;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }

    > svg {
      width: 24px;
      height: 24px;
    }
  }
`;

export const Logo = styled.h1`
  background-color: #6a50d2;
  width: 60px;
  height: 60px;
  position: relative;

  &:before {
    content: "D";
    font-size: 28px;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;
