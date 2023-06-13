
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import app from '../../firebase/firebase-config';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';




const Register = () => {

    const auth = getAuth(app)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    let sigIuError;

    if (loading) {
        return <span className="loading loading-ring loading-lg"></span>
    }

    if (error) {
        sigIuError = <p className='text-red-600'><small>{error?.message}</small> </p>
        console.error(error?.message)
    }
    if (user) {
        console.log(user);
    }

    const handleSignUp = (data) => {
        console.log(data);
        createUserWithEmailAndPassword(data.name, data.email, data.password)


    }
    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="card w-full max-w-sm  overflow-x-hidden shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className='text-xl text-center'>Sing Up Now</h1>
                        <form onSubmit={handleSubmit(handleSignUp)} >

                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type='text' {...register("name", {
                                    required: "Name is required"
                                })} className="input input-bordered w-full max-w-xs" placeholder="Name" />
                            </div>
                            {errors.name && <p className='label-text-alt text-red-600'>{errors.name.message}</p>}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type='email' {...register("email", {
                                    required: "Email is Required"
                                })} className="input input-bordered w-full max-w-xs" placeholder="Emil" />
                            </div>
                            {errors.email && <p className='label-text-alt text-red-600'>{errors.email.message}</p>}
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type='password' {...register("password", {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 character long" },
                                })} className="input input-bordered w-full max-w-xs" placeholder="Password" />
                            </div>
                            {errors.password && <p className='label-text-alt text-red-600'>{errors.password.message}</p>}
                            <div className="form-control mt-6">
                                {sigIuError}
                                <input type="submit" className="btn btn-primary" />
                            </div>


                        </form>
                        <div className="divider">OR</div>

                        <div className="form-control">
                            <Social></Social>
                        </div>
                        <label className="label">
                            <p className='label-text-alt'> Already have an account <Link className='label-text-alt link link-hover text-secondary' to='/Login'>Pleas Login</Link></p>
                        </label>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Register;