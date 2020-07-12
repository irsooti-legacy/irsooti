import Head from 'next/head';
import Link from 'next/link';
import { getInfo } from '~utils/package';
import { useEffect, useState } from 'react';

export default function Home() {
    const { version } = getInfo();
    return (
        <div className="container">
            <Head>
                <title>Curriculum Vitae - {version}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Link href="/[slug]" as="/facts">
                    <a>Cat fact</a>
                </Link>
                <Link href="/">
                    <a>About Us</a>
                </Link>
            </main>
        </div>
    );
}
