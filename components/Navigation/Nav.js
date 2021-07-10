import React from 'react';
import Link from "next/link";
import Image from "next/image";

const Nav = () => {
    return (
        <div className="navigation">
            <div className="topnav" id="myTopnav">
                <Image src="https://brightlocal-corp-assets.s3.amazonaws.com/2019/04/brightlocal_logo.svg" alt="" width={160} height={50} className="alignnone size-full wp-image-1716" />
            </div>

            <div className="list">
                <ul>
                    <Link href='/'>
                        <a className="nav-item">Features</a>
                    </Link>
                    <Link href='/'>
                        <a className="nav-item">Build Citations</a>
                    </Link>
                    <Link href='/'>
                        <a className="nav-item">Solutions</a>
                    </Link>
                    <Link href='/'>
                        <a className="nav-item">Pricing</a>
                    </Link>
                    <Link href='/'>
                        <a className="nav-item">Book a Demo</a>
                    </Link>
                    <Link href='/'>
                        <a className="nav-item">About Us</a>
                    </Link>
                    <Link href='/'>
                        <a className="nav-item">Bright Ideas</a>
                    </Link>
                </ul>
            </div>

            <div>
                <Link href='/'>
                    <a className="trial-login">Log In</a>
                </Link>
                <Link href='/'>
                    <a className="trial-button">TRY FOR FREE</a>
                </Link>
            </div>

        </div>
    );
};

export default Nav;