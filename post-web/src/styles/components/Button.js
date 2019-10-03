import styled, { css } from "styled-components";

const sizes = {
  small: css`
    height: 28px;
    font-size: 12px;
  `,

  default: css`
    height: 36px;
    font-size: 14px;
  `,

  big: css`
    height: 44px;
    font-size: 18px;
  `
};

const colors = {
  default: css`
    background: #a18aff;

    &:hover {
      background: #9178f7;
    }
  `,

  danger: css`
    background: #e74c3c;

    &:hover {
      background: #c0392b;
    }
  `,

  gray: css`
    background: #b9bbbe;
    color: #666;

    &:hover {
      background: #999;
    }
  `
};

const Button = styled.button.attrs({
  type: "submit"
})`
  border-radius: 3px;
  border: 0;
  color: #fff;
  transition: background-color 0.15s ease-in;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    width: 20px;
    height: 20px;
  }
  
   ${ props => props.loading && css`
        
        &:before {
          position: absolute;
          top: 0;
          left: 0;
          content: '';
          width: 100%;
          height: 100%;
        }
      
   `}
  
  ${props => sizes[props.size || "default"]}
  ${props => colors[props.color || "default"]}

  ${props =>
    props.filled &&
    css`
      background: none;
      &:hover {
        background: none;
        opacity: 0.6;
      }
    `}
`;

export default Button;
