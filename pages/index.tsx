import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Checkbox from '../components/Checkbox';
import styles from '../styles/index.module.css';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Stacks</title>
                <meta
                    name="description"
                    content="Modernized flashcard application that presents a quick and easy-to-use interface"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.logoContainer}>
                    <Image src="/logo.svg" height={150} width={150}></Image>
                </div>
                <h1 className={styles.title}>Stacks</h1>
                <div className={styles.loginContainer}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        className={styles.loginInput}
                    ></input>
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className={styles.loginInput}
                    ></input>
                    <Checkbox text="Keep Me Logged In" className={styles.checkboxContainer} />
                    <button>LOGIN</button>
                </div>
            </main>
        </div>
    );
};

export default Home;
