import { useEffect, useState } from "react";
import { auth, firestore } from "../../services/firebase";

const RoutineList = () => {
    const [routines, setRoutines] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore
            .collection('routines')
            .where('uid', '==', auth.currentUser?.uid)
            .onSnapshot((snapshot: any) => {
                const data = snapshot.docs.map((doc: any) => doc.data());
                setRoutines(data);
            });
        return () => unsubscribe();
    }, []);
}