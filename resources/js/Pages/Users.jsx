import { Head } from "@inertiajs/inertia-react";

export default function Users( { users } ) {
    return (
        <>
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

            {users.map((user) => (
                    <li class="list-none" key={user.id}>{user.name}</li>
            ))}
        </>
    )
}

// Users.layout = page => <Layout children={page} title="Welcome" />