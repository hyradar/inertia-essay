import { Head } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Paginator from "@/Shared/Paginator";

export default function Users( { users } ) {
    return (
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
            <h1>Users Page</h1>

        <table className="">
            <tr>    
                <th className="text-center">Contact</th>
            </tr>
            {users.data.map((user) => (
                    <tr>
                        <td key={user.id}>{user.name}Alfreds Futterkiste</td>
                    </tr>
            ))}
        </table>

        <div className="flex space-x-4">
        {users.links.map((link) => (
            <Link href={link.url}>{link.label}</Link>
        ))}

        {/* <Paginator links={users.links} /> */}

        </div>
        </div>
    )
}

// Users.layout = page => <Layout children={page} title="Welcome" />