import styled from "styled-components";
const Box = styled.div`
  background-color: #212121;
  border-top: 1px solid #303030;
  width: 100%;
  height: 56px;
  position: sticky;
  top: 56px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Container = styled.div`
  background-color: #303030;
  width: 80%;
  height: 100vh;
`;
const Vidio = styled.iframe`
  width: 240px;
  height: 135px;
`;
const Button = styled.button`
  background-color: #303030;
  border: 0.3px solid #aaaaaa;
  border-radius: 32px;
  color: white;
  height: 25px;
  margin: 0 0 0 15px;
  font-size: 13px;
`;
const Box2 = styled.div`
  width: 240px;
  margin: 20px 12px;
`;
const Img = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
const Latters = styled.p`
  color: white;
  margin: 0 10px;
`;
const Box4 = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Box5 = styled.div`
  display: flex;
  flex-direction: column;
  margin: -5px 38px;
`;
const Latter = styled.p`
  color: #aaaaaa;
  font-size: 13px;
  margin: ${({ vvv }) => vvv && "-10px 0"};
`;

const Box3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;
export { Box, Container, Button, Box2, Img, Latters, Box3, Box4, Box5, Latter,Vidio };
