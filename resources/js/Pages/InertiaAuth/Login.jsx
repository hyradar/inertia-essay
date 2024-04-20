import { Head } from "@inertiajs/inertia-react";
import { useEffect, useState } from "react";
import { useForm } from "@inertiajs/inertia-react";

const Login = () => {



    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
      });

      const submitForm = (event) => {
        event.preventDefault();

        post('/login');
      }
      

    return (
        <main className="grid place-items-center min-h-screen">

            <Head title="Login Page" />

            <section className="bg-white p-8 rounded-xl max-w-md mx-auto border">
                <h1 className="text-3xl mb-6">Login</h1>

                <form  method="POST"  action="/"  className="max-w-md mx-auto mt-8" onSubmit={submitForm}>
                    
                    <div className="mb-6">
                
                        {/* Email */}
                        <label className = "block mb-2 uppercase font-bold text-xs text-gray-700" htmlFor = "email" >
                            Email
                        </label>

                        <input
                            className="border p-2 w-full rounded"
                            type="email"
                            name="email"
                            id="email"
                            onChange={e => setData('email', e.target.value)}
                            value={data.email}
                            // required
                        >
                        </input>

                        {errors.email &&
                            <div className="text-red-500 text-xs mt-1">
                                {errors.email}
                            </div>
                        }

                        {/* Password */}
                        <label  className = "block mb-2 uppercase font-bold text-xs text-gray-700" htmlFor = "password" >
                            Password
                        </label>

                        <input
                            className="border p-2 w-full rounded"
                            type="password"
                            name="password"
                            id="password"
                            onChange={e => setData('password', e.target.value)}
                            value={data.password}
                            // required
                        >
                        </input>

                        {errors.password &&
                            <div className="text-red-500 text-xs mt-1">
                                {errors.password}
                            </div>
                        }
                    </div>


                    <div className="mb-8">
                        <button
                        type="submit"
                        className="bg-blue-400 text-white rounded py-2 px-4 hoverbg-blue-500"
                        disabled={processing}
                        >
                            Log In
                        </button>
                    </div>

                </form>
            </section>
            
        </main>
    )
};

export default Login;


Login.layout = null;