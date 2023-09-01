import { Datatopass } from "../App";
import usePost from "./usePost";


const usePostEmail = () => {
    const postEmail = (data: Datatopass) => {
      const userDataJSON = JSON.stringify(data);
  
      try {
        // removed await because it said there is no effect of await on this line/statement
        const { Data , Error } = usePost(userDataJSON);
  
        const responseData = Data;
        return responseData;
      } catch (Error) {
        console.error('Error posting email:', Error);
        return null;
      }
    };
  
    return postEmail;
  }

  export default usePostEmail;