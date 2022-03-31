import Head from 'next/head';
import Link from 'next/link';

export default function Index() {
    return (
        <div>
            <Head>
                <title>Index</title>
                <meta name="description" content="index" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <p>Rowa</p>

                <Link href='/economy'>
                    <a>Economia</a>
                </Link>
            </main>
        </div>
    )
}
