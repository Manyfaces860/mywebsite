import useData from "./useData";

const usePost = (JsonStringData : string) =>
  useData(
    "/send",
    JsonStringData
  );
  
export default usePost;
