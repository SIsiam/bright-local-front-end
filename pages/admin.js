import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import styles from "../styles/admin.module.css";
const admin = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { register, handleSubmit, formState: { errors } } = useForm();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [imageURL, setIMageURL] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [crossImg, setCrossImg] = useState(null);
    const onSubmit = data => {

        console.log(data);

        const eventData = {
            name: data.name,
            placeName: data.placeName,
            shortDescription: data.shortDescription,
            middleDescription: data.middleDescription,
            endDescription: data.endDescription,
            imageURL: imageURL,
            crossImg: crossImg,
        };

        console.log(data, eventData);
        // const url = `https://bright-local-backhand.herokuapp.com/addData`;
        // const url = `https://bright-local-backhand.herokuapp.com/addSponsor`;
        // const url = `https://bright-local-backhand.herokuapp.com/addStatus`;
        // const url = `https://bright-local-backhand.herokuapp.com/addService`;
        // const url = `https://bright-local-backhand.herokuapp.com/addService2`;
        // const url = `https://bright-local-backhand.herokuapp.com/addService3`;
        // const url = `https://bright-local-backhand.herokuapp.com/addService4`;
        // const url = `https://bright-local-backhand.herokuapp.com/addService5`;
        // const url = `https://bright-local-backhand.herokuapp.com/addService6`;
        // const url = `https://bright-local-backhand.herokuapp.com/addTableData`;
        // const url = `https://bright-local-backhand.herokuapp.com/addReview`;
        const url = `https://bright-local-backhand.herokuapp.com/addMedel`;

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => {
                console.log('server side response', res)
                alert("Added SuccessFully")
                location.reload();
            })
    };

    const handleImageUpload = e => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b2b2f18b85c3c135d0349cedeebbea1c');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((res) => {
                console.log(res.data.data.display_url);
                setIMageURL(res.data.data.display_url);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handleImageUpload2 = e => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'b2b2f18b85c3c135d0349cedeebbea1c');
        imageData.append('image', e.target.files[0]);
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then((res) => {
                console.log(res.data.data.display_url);
                setCrossImg(res.data.data.display_url);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (

        <div>
            <div >
                <h1 className="d-flex justify-content-center">Added Data</h1>
                <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                    <div className="form-group col-lg-10">
                        <label >Data Name</label>
                        <input
                            name="name" required {...register("name", { required: true })}
                            type="text"
                            className={styles.formControl}
                        />
                    </div>

                    <div>
                        <label >Greetings Name</label>
                        <input
                            name="placeName" {...register("placeName")}
                            type="text"
                            className={styles.formControl}
                        />
                    </div>

                    <div className="form-group col-lg-10 ">
                        <label htmlFor="exampleFormControlTextarea1">short Description</label>
                        <textarea className={styles.formControl} id="exampleFormControlTextarea1" rows="3"
                            name="shortDescription"  {...register("shortDescription")}

                            type="text"></textarea>
                    </div>

                    <div className="form-group col-lg-10 ">
                        <label htmlFor="exampleFormControlTextarea1">Middle Description</label>
                        <textarea className={styles.formControl} id="exampleFormControlTextarea1" rows="3"
                            name="middleDescription"  {...register("middleDescription")}
                            type="text"></textarea>
                    </div>

                    <div className="form-group col-lg-10">
                        <label htmlFor="exampleFormControlTextarea1">End Description</label>
                        <textarea className={styles.formControl} id="exampleFormControlTextarea1" rows="3"
                            name="middleDescription"  {...register("endDescription")}
                            type="text"></textarea>
                    </div>

                    <div>
                        <label>Added Cover Photo</label>
                        <br />
                        <input
                            name="img" type="file"
                            onChange={handleImageUpload}
                            className={styles.formControl}
                        />
                    </div>

                    <div>
                        <label>Added Cover Photo</label>
                        <br />
                        <input
                            name="img" type="file"
                            onChange={handleImageUpload2}
                            className={styles.formControl}
                        />
                    </div>

                    <div className="col-lg-10">
                        <input
                            type="Submit"
                            className={styles.submitBtn}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default admin;