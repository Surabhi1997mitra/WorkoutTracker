import { useState, useEffect } from "react";
import { auth, firestore } from "../../services/firebase";
import firebase from 'firebase/app'; // Import for authentication (if needed)
import { collection, add, serverTimestamp } from 'firebase/firestore'; // Import Firestore functions

const ChatBox = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const unsubscribe = firestore
            .collection('messages')
            .orderBy('createdAt')
            .onSnapshot((snapshot: any) => {
                const data = snapshot.docs.map((doc: any) => doc.data());
                setMessages(data);
            });
        return () => unsubscribe();
    }, []);

    const sendMessage = async (text: string) => {
        await firestore.collection('messages').add({
            text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            uid: auth.currentUser?.uid,
        });
    };
}

export default ChatBox