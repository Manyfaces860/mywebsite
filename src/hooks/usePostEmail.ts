import { Datatopass } from "../App";


const usePostEmail = () => {
    const postEmail = async (data: Datatopass) => {
      const userDataJSON = JSON.stringify(data);
  
      try {
        const response = await fetch('https://mywebsiteapi-1-q7439559.deta.app/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: userDataJSON,
        });
  
        const responseData = await response.json();
        return responseData;
      } catch (error) {
        console.error('Error posting email:', error);
        return null;
      }
    };
  
    return postEmail;
  }

  export default usePostEmail;