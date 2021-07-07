import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import style from "../../styles/herocard.module.css";
import Image from "next/image";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const HeroCard = () => {

  const classes = useStyles();
  const [review, setReview] = useState([]);

  useEffect(() => {
    fetch('https://bright-local-backhand.herokuapp.com/reviewData')
      .then(res => res.json())
      .then(data => {
        setReview(data)
        console.log(data)
      })
  }, [])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', fontSize: '20px', fontWeight: '900' }}>
        <h2>Don&apos;t just take our word for it...</h2>
      </div>
      <div className={style.cardContainer}>
        {
          review.map((r) => (
            <section className={style.shadow} key={r._id}>
              <Card className={classes.root}>
                <Image src={r.imageURL} height={350} width={350} alt="ds" />
                <div className={style.blurb} component="p">
                  <div>
                    <Image src="https://www.brightlocal.com/wp-content/themes/brightlocal/assets/images/quote_marks.svg" alt="quote" width={31} height={26} />
                    <p className={style.blurbText}>{r.shortDescription}</p>
                  </div>
                </div>
                <Typography className={style.lastHeading}>
                  <span>{r.name}</span>
                  <p className={style.blurbTextEnd}>{r.placeName}</p>
                </Typography>
              </Card>
            </section>
          ))}
      </div>
    </div>
  );
};

export default HeroCard;
