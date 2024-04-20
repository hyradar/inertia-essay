import { Head } from "@inertiajs/inertia-react";
import Layout from "@/Shared/Layout";

export default function Home({ name, frameworks }) {
    return (
        <Layout>
        <>
            <Head  title="Home Page">
            <meta 
                type="home description" 
                content="Home information" 
                // the head-key attribute is what prevents
                // multiple meta tags from being in the <head>
                // theres a generic one as a backup in layout
                // but you don't want them both in the head at once
                head-key="Home description" 
                />
            </Head>
            
            <h1>Hello, {name}</h1>
            <p>Your frameworks are:</p>
            <ul>
                {frameworks.map((framework) => (
                    <li key={framework}>{framework}</li>
                ))}
            </ul>
        </>
            </Layout>
        
        
    );
}

// Home.layout = page => <Layout children={page} title="Welcome" />