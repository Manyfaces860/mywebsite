import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";

export interface PostResponse {
  status: string;
}

const useData = (endpoint: string, JsonStringData: string) => {
  const [Data, setData] = useState<PostResponse>();
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  // const controller = new AbortController();
  useEffect(() => {
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .post<PostResponse>(endpoint, JsonStringData)
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });

      // return () => controller.abort();
    },[]);

  return { Data, error, isLoading };
};

export default useData;
