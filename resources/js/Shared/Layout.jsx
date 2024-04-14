import Nav from "@/Shared/Nav";
import { usePage, Head } from '@inertiajs/inertia-react';

export default function Layout( { children } ) {
    const { auth } = usePage().props;

    return (
        <>
        <Head title="Generic Title">
        <meta type="generic layout description" content="generic layout information" head-key="description" />
        </Head>
            <section className="p-6 bg-gray-200">
                <header className="flex justify-between">
                
                <div className="flex items-center">
                    <h1 className="font-bold text-lg">
                        Your App Name
                        </h1>

                    <p className="text-sm ml-4">
                        Welcome Back, 
                        {auth.username}
                    </p>
                </div>
                    
                    <Nav></Nav>
                    
                </header>
            </section>
            
            <section className="p-6">
                


                <div className="max-w-3xl mx-auto text-center">
                    {children}
                </div>

            </section>
            
        </>
    )
}