// import useFirebase from "../Hooks/useFirebase";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase-config'


const auth = getAuth(app);

const Social = () => {

    // const { singInWithGoogle } = useFirebase();

    const provider = new GoogleAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error('error', error);
            })
    }
    return (
        <div className="form-control mt-6">
            <button onClick={handleGoogleSingIn} className="btn btn-outline">GOOGLE</button>
        </div>
    );
};

export default Social;