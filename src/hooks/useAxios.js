import axios from "axios";
import React, { useEffect, useState } from "react";

const useAxios = (url) => {
  const [response, setResponse] = useState();

  const getResponse = async () => {
    const res = await axios.get(url);
    console.log(res);
    setResponse(res.data);
  };

  return [response, getResponse];
};

export default useAxios;
