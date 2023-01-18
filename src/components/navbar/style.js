import styled from "styled-components";

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #212121;
  height: 56px;
  padding: 0 15px;
  position: sticky;
  top: 0;
`;
const Mini_box = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  justify-content: ${({ first }) => first && "space-between"};
  margin: ${({ active }) => active && "0 0 0 80px"};
`;
const Imge = styled.img`
  width: 35px;
  height: 35px;
  width: ${({ youtube }) => youtube && "85px"};
  height: ${({ youtube }) => youtube && "40px"};
  width: ${({ change }) => change && "18px"};
  height: ${({ change }) => change && "18px"};
  margin: ${({ change }) => change && "0 5px"};
  width: ${({ changed }) => changed && "16px"};
  height: ${({ changed }) => changed && "16px"};
  width: ${({ changedd }) => changedd && "25px"};
  height: ${({ changedd }) => changedd && "25px"};
  margin: ${({ changed }) => changed && "10px"};
  margin: ${({ changedd }) => changedd && "10px"};
  border-radius: ${({ changedd }) => changedd && "50%"};
`;
const Input = styled.input`
  background-color: #121212;
  border: none;
  border-radius: 2px 0px 0px 2px;
  width: 350px;
  height: 30px;
  
`;
const Div = styled.div`
  background-color: #303030;
  height: 32px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({ act }) => act && "0 3px"};
`;
export { Box, Mini_box, Imge, Input, Div };
