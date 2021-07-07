import React from 'react';
import Image from "next/image";
import { useState, useEffect } from 'react'
import style from "../../styles/sponsor.module.css";

const Sponsor = () => {

    const [sponsor, setSponsorData] = useState([])
    
    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/sponsorData')
            .then(res => res.json())
            .then(data => {
                setSponsorData(data)
            })
    }, [])

    return (
        <>
            <div className={style.sponsorHeading}>
                <h2 className={style.heading}> Trusted by top brands, local businesses, and agencies alike</h2>
                <div className={style.gallary}>
                    {
                        sponsor.map((sponsor) => (
                            <div key={sponsor._id}>
                                <Image src={sponsor.imageURL} width={209} height={120} alt="Picture of the author" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default Sponsor;