import axios from "axios";
import uuid from "uuid";
import React, { useEffect, useState } from "react";

const useAxios = (baseUrl) => {
  const [response, setResponse] = useState([]);

  const getResponse = async (parameter = null) => {
    let url =
      typeof parameter === "string" ? `${baseUrl}${parameter}` : baseUrl;
    const res = await axios.get(url);
    setResponse((response) => [...response, { ...res.data, id: uuid() }]);
  };

  const clearResponse = () => setResponse([]);

  return [response, getResponse, clearResponse];
};

export default useAxios;
