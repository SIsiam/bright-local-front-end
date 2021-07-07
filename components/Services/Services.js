import React from 'react';
import Image from "next/image";
import style from "../../styles/layour.module.css";
import Link from "next/link";
import { useState, useEffect } from 'react'


const Services = () => {
    const [service, setService] = useState([]);
    const [service2, setService2] = useState([]);
    const [service3, setService3] = useState([]);
    const [service4, setService4] = useState([]);
    const [service5, setService5] = useState([]);
    const [service6, setService6] = useState([]);

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/serviceData')
            .then(res => res.json())
            .then(data => {
                setService(data)
                console.log(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/serviceData2')
            .then(res => res.json())
            .then(data => {
                setService2(data)
                console.log(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/serviceData3')
            .then(res => res.json())
            .then(data => {
                setService3(data)
                console.log(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/serviceData4')
            .then(res => res.json())
            .then(data => {
                setService4(data)
                console.log(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/serviceData5')
            .then(res => res.json())
            .then(data => {
                setService5(data)
                console.log(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/serviceData6')
            .then(res => res.json())
            .then(data => {
                setService6(data)
                console.log(data)
            })
    }, [])

    return (
        <div className={style.layour}>
            {
                service.map((service) => (
                    <section className={style.singleContainer} key={service._id}>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>LOCAL SEARCH RANK CHECKER</h4>
                            <h1 style={{ fontSize: '26px' }}>{service.name}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{service.placeName}</li>
                                <li>{service.shortDescription}</li>
                                <li>{service.middleDescription}</li>
                                <li>{service.endDescription}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={service.imageURL} width={650} height={400} alt="Picture of the author" />
                        </div>
                    </section>
                ))}




            {
                service2.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className={style.img}>
                            <Image src={s.imageURL} width={750} height={500} alt="Picture of the author" />
                        </div>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>LOCAL SEARCH GRID</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.name}</h1>
                            <div style={{ fontSize: '18px', fontWeight: '500', lineHeight: '35px', marginBottom: '13px' }}>
                                <li>{s.placeName}</li>
                                <li>{s.shortDescription}</li>
                                <li>{s.middleDescription}</li>
                                <li>{s.endDescription}</li>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                    </section>
                ))}

            {
                service3.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className="" style={{ textAlign: 'left' }}>
                            <h4 style={{ color: '#a5c559' }}>LOCAL SEO AUDITS</h4>
                            <h1 style={{ fontSize: '28px', lineHeight: '32px' }}>{s.name}</h1>
                            <div style={{ fontSize: '16px', fontWeight: '600', lineHeight: '30px', marginBottom: '13px' }}>
                                <ul>
                                    <li>{s.placeName}</li>
                                    <li>{s.shortDescription}</li>
                                    <li>{s.middleDescription}</li>
                                    <li>{s.endDescription}</li>
                                </ul>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={s.imageURL} width={1200} height={625} alt="Picture of the author" />
                        </div>
                    </section>
                ))}

            {
                service4.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className={style.img}>
                            <Image src={s.imageURL} width={600} height={350} alt="Picture of the author" />
                        </div>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>GOOGLE MY BUSINESS AUDIT</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.name}</h1>
                            <div style={{ fontSize: '16px', fontWeight: '600', lineHeight: '30px', marginBottom: '13px' }}>
                                <ul>
                                    <li>{s.placeName}</li>
                                    <li>{s.shortDescription}</li>
                                    <li>{s.middleDescription}</li>
                                    <li>{s.endDescription}</li>
                                </ul>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                    </section>
                ))}


            {
                service5.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>CITATION TRACKER</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.name}</h1>
                            <div style={{ fontSize: '16px', fontWeight: '600', lineHeight: '30px', marginBottom: '13px' }}>
                                <ul>
                                    <li>{s.placeName}</li>
                                    <li>{s.shortDescription}</li>
                                    <li>{s.middleDescription}</li>
                                    <li>{s.endDescription}</li>
                                </ul>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                        <div className={style.img}>
                            <Image src={s.imageURL} width={700} height={400} alt="Picture of the author" />
                        </div>
                    </section>
                ))}


            {
                service6.map((s) => (
                    <section className={style.singleContainer} key={s._id}>
                        <div className={style.img}>
                            <Image src={s.imageURL} width={600} height={400} alt="Picture of the author" />
                        </div>
                        <div className="" >
                            <h4 style={{ color: '#a5c559' }}>REPUTATION MANAGER</h4>
                            <h1 style={{ fontSize: '26px' }}>{s.name}</h1>
                            <div style={{ fontSize: '16px', fontWeight: '600', lineHeight: '30px', marginBottom: '13px' }}>
                                <ul>
                                    <li>{s.placeName}</li>
                                    <li>{s.shortDescription}</li>
                                    <li>{s.middleDescription}</li>
                                    <li>{s.endDescription}</li>
                                </ul>
                            </div>
                            <Link href='/'>
                                <a className="trial-button">Start your 14 day free trial</a>
                            </Link>
                        </div>
                    </section>
                ))}
        </div>

    );
};

export default Services;