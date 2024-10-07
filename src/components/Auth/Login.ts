import { auth } from '../../services/firebase';

const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
};

const logIn = (email: string, password: string) => {
    return auth.signInWithEmailAndPassword(email, password);
};

const logOut = () => {
    return auth.signOut();   
};