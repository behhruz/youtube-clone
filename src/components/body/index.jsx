import React, { useContext, useState } from "react";
import { AllContext, MassaContext, VidioContext } from "../../context";
import FirstMassiv from "../../utilities/backend1";
import {
  Box,
  Box2,
  Box3,
  Box4,
  Box5,
  Button,
  Container,
  Img,
  Latter,
  Latters,
} from "./style";
const Body = () => {
  const { Vidio, SetVidio } = useContext(VidioContext);
  const {mas, SetMas} = useContext(MassaContext);
  const {value,SetValue} = useContext(AllContext);
  // const msg = useContext(AllContext);
  const allFilter = ({ target }) => {
    SetMas(target.value);
    SetVidio((Vidio = mas));
  };
  return (
    <>
      <Container>
        <Box>
          <Button value={"all"} onClick={allFilter}>
            all
          </Button>
          <Button value={"programming"} onClick={allFilter}>
            programming
          </Button>
          <Button value={"music"} onClick={allFilter}>
            music
          </Button>
          <Button value={"interview"} onClick={allFilter}>
            interview
          </Button>
          <Button value={"sport"} onClick={allFilter}>
            sport
          </Button>
          <Button value={"cars"} onClick={allFilter}>
            cars
          </Button>
        </Box>
        <Box3>
          {Vidio.filter((i) =>
            i.text.toLowerCase().includes(value.toLowerCase())
          )
            .filter((i) => (mas == "all" ? true : i.type == mas))
            .map((v) => (
              <Box2 key={v.id}>
                <iframe
                  style={{ borderRadius: "10px" }}
                  src={v.vidio}
                  width="240"
                  height="140"
                  frameborder="0"
                ></iframe>
                <Box4>
                  {" "}
                  <Img src={v.img} />
                  <Latters>{v.text}</Latters>
                </Box4>
                <Box5>
                  <Latter>{v.name}</Latter>
                  <Latter vvv>
                    {v.watch}.{v.data}
                  </Latter>
                </Box5>
              </Box2>
            ))}
        </Box3>
      </Container>
    </>
  );
};
export default Body;
