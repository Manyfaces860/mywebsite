import { formdetails } from "../App";
import useData from "./useData";

const usePost = (details : formdetails) =>
  useData(
    "/send",
    {
      data : {
        data : JSON.stringify(details.formdetail),
      }
    },
    [details]
    );
  
export default usePost;
