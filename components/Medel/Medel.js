import React, { useState, useEffect } from 'react';
import style from "../../styles/medel.module.css";
import Image from "next/image";

const Medel = () => {

    const [medel, setMedel] = useState([]);

    useEffect(() => {
      fetch('https://bright-local-backhand.herokuapp.com/medelData')
        .then(res => res.json())
        .then(data => {
            setMedel(data)
          console.log(data)
        })
    }, [])

    return (
        <div className={style.medel}>
            {
                medel.map((m) => (
                    <section key={m._id}>
                        <div className={style.img}>
                            <Image src={m.imageURL} height={140} width={280} alt="Picture of the author" />
                            <div className={style.img}>
                                <Image src={m.crossImg} height={30} width={180} alt="Picture of the author" />
                            </div>
                        </div>
                        <div className={style.heder}>
                            <p> <span className={style.bold}>{m.name}</span> out of 5</p>
                        </div>
                    </section>
                ))}
        </div>
    );
};

export default Medel;