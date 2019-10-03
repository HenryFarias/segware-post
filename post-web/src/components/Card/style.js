import styled, {css} from 'styled-components'

export const Container = styled.article`
  background-color: #fff;
  padding: 30px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);
  margin-bottom: 15px;
  
  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const ButtonIcon = styled.button`
  width: auto;
  color: #333;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  margin-left: 8px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #ddd;
  }

`;

export const CardHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  position: relative;
`;


export const CardHeaderInfo = styled.header`
  display: flex;
  align-items: center; 
  width: 100%;
`;

export const CardActions = styled.div`
  display: flex;
  align-items: center; 
`;

export const CardContent = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #333;
  margin-top: 15px;
  line-height: 1.4;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  margin-right: 15px;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500; 
  color: #2c3e50;
`;

export const LikeIcon = styled.div`
    display: flex;
     align-items: center; 
    margin-left: auto;
    cursor: pointer;
    
    & > svg {
        margin-right: 5px;
        fill: ${props => props.upVote ? 'red' : '#333'}
    }
    
    
`;