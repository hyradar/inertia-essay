import Layout from "@/Shared/Layout";
import { Head } from "@inertiajs/inertia-react";

export default function Settings() {
    return (
        <Layout>
        <Head  title="Settings Page">
            <meta 
                type="Settings description" 
                content="Settings information" 
                // the head-key attribute is what prevents
                // multiple meta tags from being in the <head>
                // theres a generic one as a backup in layout
                // but you don't want them both in the head at once
                head-key="Settings description" 
                />
            </Head>
            <h1>Settings Page</h1>
        </Layout>
    )
}


// Settings.layout = page => <Layout children={page} title="Welcome" />