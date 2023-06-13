
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import app from '../../firebase/firebase-config';
import { getAuth } from 'firebase/auth';


const auth = getAuth(app)
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let sigInError;

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    if (error) {
        sigInError = <p className='text-red-600'><small>{error?.message}</small> </p>
        console.error(error?.message)
    }
    if (user) {
        console.log(user);
    }



    const handleLogin = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password)
    }


    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="card w-full max-w-sm  overflow-x-hidden shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-xl text-center'>Login Now</h1>
                        <form onSubmit={handleSubmit(handleLogin)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: "Email Address is required" })} type='email' className="input input-bordered w-full max-w-xs" placeholder="Email" />


                            </div>
                            {errors.email && <p className='label-text-alt text-red-600' role="alert">{errors.email?.message}</p>}

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  {...register("password", { required: "password is required", minLength: { value: 6, message: 'Password must be 6 character or longr' } })} type='password' className="input  input-bordered w-full max-w-xs" placeholder="Password" />


                                {/* {errors.email && <p role="alert">{errors.email?.message}</p>} */}
                            </div>

                            {errors.password && <p className='label-text-alt text-red-600' role="alert">{errors.password?.message}</p>}


                            <div className="form-control mt-6">
                                {sigInError}
                                <input type="submit" className="btn btn-primary" />
                            </div>

                            <div className="divider mt-7">OR</div>


                        </form>
                        <div className="form-control">
                            <Social></Social>
                        </div>
                        <label className="label">
                            <p className='label-text-alt '>Create a new acount <Link className='label-text-alt link link-hover text-secondary' to='/Register'>Please Sing Up</Link></p>
                        </label>

                    </div>
                </div>
            </div>




        </div>
    );
};

export default Login;