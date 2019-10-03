import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  h1 {
    margin-bottom: 15px;
    font-size: 24px;
  }

  img {
    margin-right: 15px;
  }
  
  form {
    width: 100%;
  }

  textarea {
    flex-grow: 1;
    margin-bottom: 10px;
    border: 0;
    padding-right: 30px;

    &:focus {
      outline: 0;
    }
  }
`;

export const RowInfos = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
`;
export const RowActions = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  justify-content: flex-end;

  > button {
    margin-left: 10px;
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
`;

export const BoxText = styled.textarea`
  width: 100%;
  font-size: 20px;
`;
