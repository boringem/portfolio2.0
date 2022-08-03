import Link from 'next/link';

function Nav() {
    return (
        <div className="grid grid-cols-4 my-3">
            <Link href="/">
                <a className="text-2xl font-heading font-bold">Madelyn Vagle</a>
            </Link>
            <div className="col-span-3 text-right mr-3 font-body">
                <Link href="/projects">
                    <a className="mx-2">Projects</a>
                </Link>
            </div>
        </div>
    )
}

export default Nav;