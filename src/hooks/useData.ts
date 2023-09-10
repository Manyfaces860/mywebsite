import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { AxiosRequestConfig } from "axios";

export interface PostResponse {
  status?: any | '';
}

const useData = (endpoint: string, requestConfig : AxiosRequestConfig , deps : any[] ) => {
  const [responseData, setResponseData] = useState<PostResponse>();
  const [Error, setError] = useState();
  // const [isLoading, setLoading] = useState(false);


  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .post<PostResponse>(endpoint, { signal: controller.signal , ...requestConfig })
      .then((res) => {
        setResponseData(res.data);
        console.log(res.data);
        // setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        // setLoading(false);
      });

  },deps ? [...deps] : [])

  return { responseData, Error };

};

export default useData;
