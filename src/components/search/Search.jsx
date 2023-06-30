import React, { useContext, useEffect, useState } from "react";
import "./search.css";
import { Input, Space } from "antd";
import { fetchFunction } from "../fetch";
import { appContext } from "../../App";
const Search = () => {
  const { setData } = useContext(appContext);

  const onSearch = (value) =>
    fetchFunction(value).then((data) => setData(data[0]));

  return (
    <Input.Search
      style={{ width: "70%", marginTop: "50px" }}
      placeholder="input search text"
      allowClear
      enterButton
      size="large"
      onSearch={onSearch}
    />
  );
};

export default Search;
