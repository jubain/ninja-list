
import React from 'react';
import Link from 'next/link'
import styles from '../../styles/Jubeen.module.css'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return {
        props: { ninjas: data }
    }
}

function jubeenList({ ninjas }) {
    return (
        <div>
            <h1>Jubeen List</h1>
            {ninjas.map((ninja) => {
                return (
                    <Link href={`/jubeen/${ninja.id}`} key={ninja.id}>
                        <a className={styles.single}><h3>{ninja.name}</h3></a>
                    </Link>
                )
            })}
        </div>
    );
}

export default jubeenList;