import axios from "axios";
import { auth } from "./firebase";

const fetchFitnessData = async () => {
    const response = await axios.get('https://www.googleapis.com/fitness/v1/users/me/dataset:aggregate', {
      headers: {
        Authorization: `Bearer ${auth.currentUser?.getIdToken}`,
      },
    });
    console.log(response.data);
  };

  export {
    fetchFitnessData
  }