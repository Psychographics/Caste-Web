import Head from 'next/head';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import GamePlay from '../components/GamePlay';

export default function Game() {

    return (
        <div>
            <Head>
                <title>Caste</title>
                <meta name="description" content="" />
                <meta property="og:image" content="" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" media="screen" href="https://fontlibrary.org//face/segment7" type="text/css"/>
            </Head>

            <GamePlay/>
        </div>
    )
}