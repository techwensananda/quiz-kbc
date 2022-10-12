import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (api) => {
  const [data, setData] = useState({});

  useEffect(() => {
    // console.log(api);
    let source = axios.CancelToken.source();
    const apiCall = async () => {
      const res = await axios.get(api, {
        cancelToken: source.token,
      });
      setData(res.data);
    };
    apiCall();
    return () => source.cancel();
  }, [api]);

  return [data];
};

export default useFetchApi;
