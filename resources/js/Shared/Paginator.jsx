

export default function Paginator(trees) {

    console.log({trees});

    return(
        <div className="flex space-x-4">
        {trees.map((link) => (
            <Link href={link.url}>{link.label}</Link>
        ))}

        </div>
    )
}