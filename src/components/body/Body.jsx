import { List, Typography } from "antd";
import React, { useContext } from "react";
import "./body.css";
import { appContext } from "../../App";
import { fetchFunction } from "../fetch";
const Body = () => {
  const { data, setData, moon } = useContext(appContext);
  const defData = data?.meanings[0].definitions.map(
    (element) => element.definition
  );
  const onSearch = (value) =>
    fetchFunction(value).then((data) => setData(data[0]));

  return (
    <>
      <div style={{ width: "70%" }}>
        <h1 className="h1" style={{ color: moon ? "white" : "black" }}>
          {data?.word}
        </h1>
        <h2 style={{ color: moon ? "white" : "black" }}>{data?.phonetic}</h2>
        {/* <h3 className="h3">hellow</h3> */}
      </div>

      <List
        style={{ width: "70%" }}
        header={data ? <div className="meaningDiv">Meaning</div> : ""}
        dataSource={defData}
        renderItem={(item) => (
          <List.Item>
            <div
              className="bullet-point"
              style={{ color: moon ? "white" : "black" }}
            >
              &#8226; {item}
            </div>
          </List.Item>
        )}
      />

      <List
        className="listsynonyms"
        grid={{
          gutter: 8,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        style={{ width: "70%" }}
        header={data ? <div className="synonymsDiv">Synonyms</div> : null}
        dataSource={data?.meanings[0].synonyms}
        renderItem={(item) => (
          <div className="synonyms" onClick={() => onSearch(item)}>
            {item}
          </div>
        )}
      />
    </>
  );
};

export default Body;
