import Head from 'next/head'
import Image from 'next/image'
import Nav from '../../components/Nav'
import styles from '../../styles/Projects.module.css'
import CardGrid from '../../components/CardGrid'

export default function Projects() {
    return (
        <div>
            <Head>
                <title>Madelyn Vagle | Projects</title>
                <meta name="description" content="Projects" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="../../dist/output.css" />
            </Head>
            <main className="m-2">
                <Nav />
                <h1 className="text-5xl font-bold font-heading my-2">
                Projects
                </h1>
                <div className="w-full">
                    <CardGrid gridType="projects" cols="2" />
                </div>
            </main>
        </div>
    )
}