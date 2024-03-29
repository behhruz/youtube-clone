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
} from "./style";
const Body = () => {
  const { Vidio, SetVidio } = useContext(VidioContext);
  const { Short, SetShort } = useContext(ShortsContext);
  const { mas, SetMas } = useContext(MassaContext);
  const { value, SetValue } = useContext(AllContext);
  const [active, setActive] = useState(0);
  // const msg = useContext(AllContext);
  const allFilter = ({ target }) => {
    SetMas(target.value);
    SetVidio((Vidio = mas));
    SetShort((Short = mas));
  };
  // active buttons

  const findIndex = (item) => {
    setActive(item);
  };

  const api = [
    { id: 1, name: "all", value: "all", onClick: { allFilter } },
    {
      id: 2,
      name: "programming",
      value: "programming",
      onClick: { allFilter },
    },
    { id: 3, name: "music", value: "music", onClick: { allFilter } },
    { id: 4, name: "interview", value: "interview", onClick: { allFilter } },
    { id: 5, name: "sport", value: "sport", onClick: { allFilter } },
    { id: 6, name: "cars", value: "cars", onClick: { allFilter } },
  ];
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
              <div key={v.id}>
                <Box2>
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
              </div>
            ))}
        </Box3>
        <Latter short>Shorts</Latter>
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
export default Body;


