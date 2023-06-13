import { useEffect, useState } from "react"


const useFirebase = () => {
    const [user] = useState({});



    const singInWithGoogle = () => {
        console.log('singing in soon');
    }

    useEffect(() => {

    }, []);

    // return [user, singInWithGoogle]
    return {
        user,
        singInWithGoogle
    }
}

export default useFirebase;