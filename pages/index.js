import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jubeen List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div >
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>Officia labore proident fugiat incididunt laborum amet officia consectetur. Do amet ea cillum duis incididunt exercitation laborum est. Velit aliqua sint ipsum irure reprehenderit magna excepteur enim exercitation occaecat eiusmod. Id qui est ad in laboris occaecat. Sit tempor cupidatat adipisicing ipsum est incididunt magna aliquip amet laboris ad nulla ut in. Proident est nostrud proident non labore officia officia aliqua aliquip cillum Lorem.

Enim labore aliquip officia dolor eu ad aliquip officia dolor esse nisi. Dolore aute cillum consequat elit aliqua amet dolor velit. Amet ut consectetur velit ipsum occaecat nostrud magna non.</p>
        <Link href='/jubeen/jubeenList'>
          <a className={styles.btn}>See Jubeen Listing</a>
        </Link>
      </div>
    </>
  )
}
