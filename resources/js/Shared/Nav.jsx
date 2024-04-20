import { Link } from "@inertiajs/inertia-react"


export default function Nav() {
    return (
        <nav className="">
            <ul className="flex space-x-6">
                <li><Link className="text-black hover:underline" href="/home">Home</Link></li>
                <li><Link className="text-black hover:underline" href="/users">Users</Link></li>
                <li><Link className="text-black hover:underline" href="/settings">Settings</Link></li>
                <li><Link className="text-black hover:underline" href="/logout" method="post" as="button">Log Out</Link></li>
            </ul>
        </nav>
    )
}
