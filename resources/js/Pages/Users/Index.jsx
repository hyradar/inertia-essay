import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { useState } from "react";
import { Inertia } from "@inertiajs/inertia";
import { throttle, debounce } from "lodash";
import Layout from "@/Shared/Layout";

export default function Users( { can, users, filters } ) {
    const [inputValue, setInputValue] = useState(filters.search);

      // Event handler to handle input changes
  const handleInputChange = debounce((event) => {
    event.preventDefault(); 
    // Update the inputValue state with the new value entered by the user
    const newValue = event.target.value;
    console.log("New input:", newValue);
    setInputValue(newValue);
    getNewNames(newValue);
  }, 300);

 const getNewNames = (value) => {
    Inertia.get('/users', { search: value }, {
        preserveState: true, // preserves the state of the iput
        replace: true // makes it so that the back button isn't broken
        // otherwise every time you hit the back button it 
        // will show the search result with each letter
        // Robert Rober Robe Rob Ro R
        // now, if you were on the home page, come to the users page, and want to go
        // back to the home page, it will work because of replace: true
    })
}

    return (
    <Layout>
        <div className="flex flex-col text-center items-center">
            <Head  title="Users Page">
            <meta 
                type="Users description" 
                content="Users information" 
                // the head-key attribute is what prevents
                // multiple meta tags from being in the <head>
                // theres a generic one as a backup in layout
                // but you don't want them both in the head at once
                head-key="Users description" 
                />
            </Head>
            <div className="flex gap-4 justify-between w-100 mb-8">

                <h1 className="self-center">Users Page</h1>

                <div className="flex items-center">
                    <h1 className="text-3xl">Users</h1>

                    {can.createUser
                    ?
                        <Link 
                        href="/users/create" 
                        className="text-blue-500 text-sm"
                        >
                            New User
                        </Link> 
                    :
                        <></>
                    }
                    

                    <input 
                        v-model="search"
                        type="text"
                        placeholder="Search..."
                        className="border px-2 rounded-lg"
                    >
                        </input>

                </div>
                <input 
                    className="w-40"
                    type="text" 
                    placeholder="Search..."
                    value={inputValue} // Bind the input value to the state
                    onChange={handleInputChange} // Handle input changes
                >
                </input>

            </div>
            

        <table className="flex-center-row w-screen">
            <tr>    
                <th className="text-center">Contact</th>
            </tr>

            {users.data.map((user) => (
                <div className="flex justify-between w-1/2 mx-10">

                    <tr>
                        <td key={user.id}>{user.name}</td>
                    </tr>

                    <br />
                    { user.can.edit
                        ? <Link>Edit User</Link>
                        : <></>
                    }
                </div>

            ))}



        </table>

            <div className="flex space-x-4">
            {users.links.map((link) => (
                <Link href={link.url}>{link.label}</Link>
            ))}

            {/* <Paginator links={users.links} /> */}

            </div>
        </div>
    </Layout>
    )
}

// Users.layout = page => <Layout children={page} title="Welcome" />