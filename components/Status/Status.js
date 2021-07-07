import React from 'react';
import style from "../../styles/status.module.css";
import ceo from "../../images/ceo.png";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from 'react'


const Status = () => {

    const [status, setStatus] = useState([])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/statusData')
            .then(res => res.json())
            .then(data => {
                setStatus(data)
            })
    }, [])

    return (
        <div>
            <h2 style={{ margin: 'auto', textAlign: 'center', fontSize: '30px', fontWeight: '800' }}>Tools that help you rank higher and grow your local search visibility</h2>
            <div className={style.statusContainer}>
                <section className={style.main}>
                    {
                        status.map((status) => (
                            <div key={status._id}>
                                <Image src={status.imageURL} width={350} height={230} alt="Picture of the author" />
                                <p className={style.title}>{status.name}</p>
                            </div>
                        ))
                    }
                </section>

                <section className={style.ceo}>
                    <div >
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        <h2 className={style.info}>"BrightLocal's tools are a must-have for marketers looking to optimize their organic search results."</h2>
                        <Image src={ceo} alt="Picture of the author" />
                        <h3>Nielson Hall</h3>
                        <h4>Head of SEO</h4>
                        <h5>iProspect</h5>
                    </div>
                    <div>
                        <div>
                            <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/trustpilot-star-green.svg" alt="" width={22} height={22} className="alignnone size-full wp-image-1716" />
                            <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/trustpilot-star-green.svg" alt="" width={22} height={22} className="alignnone size-full wp-image-1716" />
                            <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/trustpilot-star-green.svg" alt="" width={22} height={22} className="alignnone size-full wp-image-1716" />
                            <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/trustpilot-star-green.svg" alt="" width={22} height={22} className="alignnone size-full wp-image-1716" />
                            <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/trustpilot-star-green.svg" alt="" width={22} height={22} className="alignnone size-full wp-image-1716" />
                        </div>

                        <p>
                            <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/bl-icon-green.svg" alt="" width={22} height={22} className="alignnone size-full wp-image-1716" /> 9.5 out of 10 on Trustpilot
                        </p>
                    </div>
                </section>

            </div>

            <div className="trial-link" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <Link href='/'>
                    <a className="trial-button">Start your trial</a>
                </Link>
            </div>
        </div>

    );
};

export default Status;