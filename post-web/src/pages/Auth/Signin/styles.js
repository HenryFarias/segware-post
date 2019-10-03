import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SignForm = styled.form`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  padding: 40px;
  width: 400px;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
    margin: 0 0 10px;
  }

  span {
    color: #333;
    font-size: 14px;
    line-height: 16px;
    margin-top: 15px;
  }

  input {
    height: 40px;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid rgba(0, 0, 0, 0.3);
    background-color: #fff;
    color: #333;
    margin-top: 8px;
    transition: border 0.15s ease-in-out;
    font-size: 16px;

    &:focus {
      border-color: #a18aff;
    }
  }

  button {
    margin-top: 20px;
  }
`;
