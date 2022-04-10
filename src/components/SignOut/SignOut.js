import { signOut } from 'firebase/auth';
import React from 'react';
import auth from '../../firebase.init';

const SignOut = () => {
    return signOut(auth);
};

export default SignOut;