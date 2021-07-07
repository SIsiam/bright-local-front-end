import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <div className="navigation">
            <div className="topnav" id="myTopnav">
                <Image src="https://brightlocal-corp-assets.s3.amazonaws.com/2019/04/brightlocal_logo.svg" alt="" width={180} height={70} className="alignnone size-full wp-image-1716" />
            </div>

            <div className="list">
                <ul>
                    <Link href='/'>
                        <a>Features</a>
                    </Link>
                    <Link href='/'>
                        <a>Build Citations</a>
                    </Link>
                    <Link href='/'>
                        <a>Solutions</a>
                    </Link>
                    <Link href='/'>
                        <a>Pricing</a>
                    </Link>
                    <Link href='/'>
                        <a>About Us</a>
                    </Link>
                </ul>
            </div>

            <div>
                <Link href='/'>
                    <a className="trial-login">log In</a>
                </Link>
                <Link href='/'>
                    <a className="trial-button">TRY FOR FREE</a>
                </Link>
            </div>

        </div>
    );
};

export default Nav;