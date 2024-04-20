import { Head } from "@inertiajs/inertia-react"
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { usePage } from "@inertiajs/inertia-react";
import { useForm } from "@inertiajs/inertia-react";

export default function Create() {
    // const errors = usePage().props.errors;
    // const [processing, setProcessing] = useState(false);

    // console.log(errors);

    // const [form, setForm] = useState({
    //     name: '',
    //     email: '',
    //     password: ''
    // });

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        remember: false
      });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const submitForm = (event) => {
        event.preventDefault();
        // first argument - where you are sending the post request
        // second argument = the data

        post('/users');

        // Inertia.post('/users', form, {
        //     onStart () { setProcessing(true)},
        //     onFinish () { setProcessing(false)},
        // });
      }


    return(
        <div>
            <Head title="Create User" />

            <h1 className="text-3xl">Create New User</h1>  

            {/* Inertia Forms Docs */}
            {/* https://www.inertiajs.com/forms */}
            <form 
                method="POST" 
                action="/" 
                className="max-w-md mx-auto mt-8"
                onSubmit={submitForm}>
                <div className="mb-6">

                    {/* Name */}
                    <label 
                        className = "block mb-2 uppercase font-bold text-xs text-gray-700"
                        htmlFor = "name"
                    >
                        Name
                    </label>

                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        name="name"
                        id="name"
                        onChange={e => setData('name', e.target.value)}
                        value={data.name}
                        // required
                    >
                    
                    </input>
                    {errors.name &&
                        <div className="text-red-500 text-xs mt-1">
                            {errors.name}
                        </div>
                    }
                    <div></div>

                    {/* Email */}
                    <label 
                        className = "block mb-2 uppercase font-bold text-xs text-gray-700"
                        htmlFor = "email"
                    >
                        Email
                    </label>

                    <input
                        className="border border-gray-400 p-2 w-full"
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
                    <label 
                        className = "block mb-2 uppercase font-bold text-xs text-gray-700"
                        htmlFor = "password"
                    >
                        Password
                    </label>

                    <input
                        className="border border-gray-400 p-2 w-full"
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

                <input type="checkbox" checked={data.remember} onChange={e => setData('remember', e.target.checked)} /> Remember Me



                <div className="mb-8">

                    
                    <button
                    type="submit"
                    className="bg-blue-400 text-white rounded py-2 px-4 hoverbg-blue-500"
                    disabled={processing}
                    >
                        Submit
                    </button>

                </div>



            </form>

        </div>
    )
}