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
  background-color: black;
  width: 80%;
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
`;
const Img = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;
const Latters = styled.p``;
const Box3 = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin: 20px 20px;
`;
export { Box, Container, Button, Box2, Img, Latters, Box3 };
