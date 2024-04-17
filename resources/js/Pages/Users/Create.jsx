import { Head } from "@inertiajs/inertia-react"
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";

export default function Create() {

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: ''
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
        Inertia.post('/users', form);
      }


    return(
        <div>
            <Head title="Create User" />

            <h1 className="text-3xl">Create New User</h1>  


            <form 
                method="POST" 
                action="/" 
                className="max-w-md mx-auto mt-8"
                onSubmit={submitForm}>
                <div className="mb-6">

                    {/* Name */}
                    <label 
                        className = "block mb-2 uppercase font-bold text-xs text-gray-700"
                        for = "name"
                    >
                        Name
                    </label>

                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleInputChange}
                        value={form.name}
                        required
                    >
                    
                    </input>

                    {/* Email */}
                    <label 
                        className = "block mb-2 uppercase font-bold text-xs text-gray-700"
                        for = "email"
                    >
                        Email
                    </label>

                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="email"
                        name="email"
                        id="email"
                        onChange={handleInputChange}
                        value={form.email}
                        required
                    >
                    
                    </input>


                    {/* password */}
                    <label 
                        className = "block mb-2 uppercase font-bold text-xs text-gray-700"
                        for = "password"
                    >
                        Password
                    </label>

                    <input
                        className="border border-gray-400 p-2 w-full"
                        type="password"
                        name="password"
                        id="password"
                        onChange={handleInputChange}
                        value={form.password}
                        required
                    >
                    
                    </input>
                </div>

                <div className="mb-8">
                    <button
                    type="submit"
                    className="bg-blue-400 text-white rounded py-2 px-4 hoverbg-blue-500"
                    >
                        Submit
                    </button>

                </div>



            </form>

        </div>
    )
}