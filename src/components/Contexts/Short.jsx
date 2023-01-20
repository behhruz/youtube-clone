import React, { useContext, useState } from "react";
import {
  AllContext,
  HomeContext,
  MassaContext,
  ShortsContext,
  VidioContext,
} from "../../context";
import {
  Box,
  Box2,
  Box3,
  Box4,
  Box5,
  Boxes,
  Boxes1,
  Button,
  Container,
  Img,
  Latter,
  Latters,
} from "../body/style";
const Shorts = () => {
  const { Short, SetShort } = useContext(ShortsContext);
  const { mas, SetMas } = useContext(MassaContext);
  const { value, SetValue } = useContext(AllContext);
  // const msg = useContext(AllContext);
  const allFilter = ({ target }) => {
    SetMas(target.value);
    SetShort((Short = mas));
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
        <Boxes>
          {Short.filter((i) =>
            i.texts.toLowerCase().includes(value.toLowerCase())
          )
            .filter((i) => (mas == "all" ? true : i.type == mas))
            .map((x) => (
              <Boxes1>
                <iframe
                  style={{ borderRadius: "10px" }}
                  src={x.vidios}
                  width="150"
                  height="240"
                  frameborder="0"
                ></iframe>
                <Latters dd>{x.texts}</Latters>
                <Latter rr>{x.watchs}</Latter>
              </Boxes1>
            ))}
        </Boxes>
      </Container>
    </>
  );
};
export default Shorts;
