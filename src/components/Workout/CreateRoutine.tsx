import { useState } from "react";
import { auth, firestore } from "../../services/firebase";

const CreateRoutine = () => {
    const [routine, setRoutine] = useState({ name: '', exercises: [] });

    const createRoutine = async () => {
        await firestore.collection('routines').add({
            ...routine,
            uid: auth.currentUser?.uid,
        });
    };
}

export default CreateRoutine