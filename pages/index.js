import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';

function Home() {
    return (
        <div>
            <Head>
                <script
                    data-ad-client="ca-pub-3278313672041597"
                    async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
                ></script>
            </Head>
            <h1>Home</h1>
            <Link href="/sobre">
                <a>Acessar página Sobre</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="https://www.facebook.com/PapelSonhoEArte/">
                <a>Facebook</a>
            </Link>
            &nbsp;|&nbsp;
            <Link href="https://www.instagram.com/PapelSonhoEArte/">
                <a>Instagram</a>
            </Link>

            {/* <Img
                layout="fill"
                src="https://scontent.fcgh16-1.fna.fbcdn.net/v/t1.0-9/102703410_100994004989415_21998834161851795_o.jpg?_nc_cat=110&ccb=2&_nc_sid=6e5ad9&_nc_ohc=hG64Avl5B_IAX9hpYQh&_nc_ht=scontent.fcgh16-1.fna&oh=6fd3dd7477b30e6a1be1268f5eb3fe33&oe=60106E94"
            /> */}

        </div>)
}

export default Home