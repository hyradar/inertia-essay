import Nav from "@/Shared/Nav";

export default function Home({ name, frameworks }) {
    return (
        <>
            <h1>Hello, {name}</h1>
            <ul>
                {frameworks.map((cadre) => (
                    <li>{cadre}</li>
                ))}
            </ul>
            <Nav></Nav>
        </>
    )
}