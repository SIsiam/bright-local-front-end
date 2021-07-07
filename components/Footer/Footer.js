import React from 'react';
import style from "../../styles/Footer.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import Image from "next/image";


const Footer = () => {
    return (
        <div >
            <div className={style.layout}>

                <section>
                    <div className={style.title}>
                        <h3>Products</h3>
                    </div>

                    <aside id="text-2"> <div className={style.hypen}>
                        <ul className={style.list}>
                            <li><a href="/platform/"><strong>Platform</strong></a></li>
                            <li><a> Local SEO Tools </a></li>
                            <li><a> Local Search Grid </a></li>
                            <li><a> Local Search Rank Checker </a></li>
                            <li><a> Citation Tracker </a></li>
                            <li><a> Local Search Audit </a></li>
                            <li><a> Google My Business Audit </a></li>
                            <li><a> Reputation Manager </a></li>
                            <li><a> Monitor Reviews </a></li>
                            <li><a> Get Reviews </a></li>
                            <li><a> Showcase Reviews </a></li>
                            <li><a> Citation Builder </a></li>
                            <li><a> Data Aggregator Submissions </a></li>
                            <li><a> Yext Replacement Service </a></li>
                            <li><a> Agency Lead Generator </a></li>
                            <li><a> Plans and Pricing </a></li>
                            <li><a> Explore Our Demo Dashboard </a></li>
                        </ul>

                    </div>
                    </aside>

                </section>


                <section>
                    <div className={style.title}>
                        <h3>Company</h3>
                    </div>

                    <aside id="text-2"> <div className="textwidget">
                        <ul className={style.list}>
                            <li><a href="/platform/"><strong>Solutions</strong></a></li>
                            <li><a> Local SEO Tools </a></li>
                            <li><a> Local Search Grid </a></li>
                            <li><a> Local Search Rank Checker </a></li>
                            <li><a> Citation Tracker </a></li>
                            <li><a> Local Search Audit </a></li>
                            <li><a> Google My Business Audit </a></li>
                            <li><a> Reputation Manager </a></li>
                            <li><a> Monitor Reviews </a></li>
                            <li><a> Get Reviews </a></li>
                            <li><a> Showcase Reviews </a></li>
                            <li><a> Citation Builder </a></li>
                            <li><a> Data Aggregator Submissions </a></li>
                            <li><a> Yext Replacement Service </a></li>
                            <li><a> Agency Lead Generator </a></li>
                            <li><a> Plans and Pricing </a></li>
                            <li><a> Explore Our Demo Dashboard </a></li>
                        </ul>

                    </div>
                    </aside>

                </section>

                <section >
                    <div className={style.title}>
                        <h3>Community</h3>
                    </div>

                    <aside id="text-2"> <div className="textwidget">
                        <ul className={style.list}>
                            <li><a href="/platform/"><strong>Resources</strong></a></li>
                            <li><a> Local SEO Tools </a></li>
                            <li><a> Local Search Grid </a></li>
                            <li><a> Local Search Rank Checker </a></li>
                            <li><a> Citation Tracker </a></li>
                            <li><a> Local Search Audit </a></li>
                            <li><a> Google My Business Audit </a></li>
                            <li><a> Reputation Manager </a></li>
                            <li><a> Monitor Reviews </a></li>
                            <li><a> Get Reviews </a></li>
                            <li><a> Showcase Reviews </a></li>
                            <li><a> Citation Builder </a></li>
                            <li><a> Data Aggregator Submissions </a></li>
                            <li><a> Yext Replacement Service </a></li>
                            <li><a> Agency Lead Generator </a></li>
                            <li><a> Plans and Pricing </a></li>
                            <li><a> Explore Our Demo Dashboard </a></li>
                        </ul>

                    </div>
                    </aside>

                </section>
            </div>

            <hr />
            <section className="social">
                <TwitterIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', margin: '4px 12px', borderRadius: '50px' }} />
                <FacebookIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
                <LinkedInIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
                <InstagramIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
                <YouTubeIcon style={{ width: '40px', margin: '4px 12px', padding: '7px', height: '40px', background: '#547bba', color: '#fff', borderRadius: '25px', cursor: 'pointer', borderRadius: '50px' }} />
            </section>
            <hr />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  padding: '7px', }}>
                <Image src="https://brightlocal-corp-assets.s3.amazonaws.com/2019/04/brightlocal_logo.svg" alt="" width={180} height={70} className="alignnone size-full wp-image-1716" />
            </div>
        </div>
    );
};

export default Footer;