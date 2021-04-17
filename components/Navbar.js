import React from 'react';
import Link from 'next/link'
import Image from 'next/image'

function Navbar(props) {
    return (
        <nav>
            <div className="logo">
                <Image src="/logo.png" width={120} height={70} />
            </div>
            <Link href="/"><a >Home</a></Link>
            <Link href="/about"><a>About</a></Link>
            <Link href="/jubeen/jubeenList"><a>Jubeen Listing</a></Link>
        </nav>
    );
}

export default Navbar;