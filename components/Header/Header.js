import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from 'react'

const Header = () => {
    const [fakeData, setFakeData] = useState([])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/data')
            .then(res => res.json())
            .then(data => {
                setFakeData(data)
            })
    }, [])

    return (
        <div>

            {
                fakeData.map((header) => (
                    <div className="Header-container" key={header._id}>
                        <div className="header-info">
                            <h4>Local SEO Tools</h4>
                            <h1>{header.name}</h1>
                            <p>{header.placeName}</p>
                            <Link href='/'>
                                <a className="trial-button">TRY FOR FREE</a>
                            </Link>
                        </div>
                        <div className="headerImg" >
                            <Image src={header.imageURL} height={500} width={900} alt="Picture of the author" />
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default Header;
