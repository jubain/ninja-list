import React, { useEffect } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router'

function NotFound(props) {
    const router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/');
        }, 1000);
    }, [])
    return (
        <div className='not-found'>
            <h2>Page cannot be found</h2>
            <p>Go back to <Link href='/'><a>homepage</a></Link></p>
        </div>
    );
}

export default NotFound;