import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (url) => {
  const [response, setResponse] = useState([]);

  const getResponse = async (parameter = "") => {
    const res = await axios.get(`${url}${parameter}`);
    console.log(res);
    setResponse((d) => [...d, res.data]);
  };

  return [response, getResponse];
};

export default useAxios;
