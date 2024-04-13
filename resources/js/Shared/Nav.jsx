import { Link } from "@inertiajs/inertia-react"


export default function Nav() {
    return (
<nav>
<ul>
    <li><Link href="/home">Home</Link></li>
    <li><Link href="/users">Users</Link></li>
    <li><Link href="/settings">Settings</Link></li>
</ul>
</nav>
    )
}
