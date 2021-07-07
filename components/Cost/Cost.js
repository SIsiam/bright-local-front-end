import React, { useState, useEffect } from 'react';
import TableStyle from "../../styles/cost.module.css";
import Image from "next/image";

const Cost = ({ cost }) => {

    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        fetch('https://bright-local-backhand.herokuapp.com/tableData')
            .then(res => res.json())
            .then(data => {
                setTableData(data)
                console.log(data)
            })
    }, [])


    return (
        <div style={{ margin: "0px 80px 600px 80px" }}>


            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>
                <h1>The most complete and cost-effective set of tools to tackle local SEO</h1>
                <h4>From just $1.50 per location per month!</h4>
                <p>(Based on tracking 50 locations on our SEO Pro plan – just $79/month)</p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', margin: '20px' }}>

                <input type="checkbox" className="checkbox" id="chk" />
                <label className="label" htmlFor="chk">
                    <div className="ball"></div>
                </label>
            </div>

            <div className={TableStyle.flipBox} id="flip">
                <div className={TableStyle.flipBoxInner}>
                    <div className={TableStyle.flipBoxFront}>
                        <table className={TableStyle.customers} >
                            <thead className={TableStyle.tableHead}>
                                <tr>
                                    <th className="column"><center>Rank Tracking</center></th>
                                    <th className="column"><center>Geo Rankings</center></th>
                                    <th className="column"><center>Citation Monitoring</center></th>
                                    <th className="column"><center>Review Alerts</center></th>
                                    <th className="column">Company</th>
                                    <th className="column"><center>Review Generation</center></th>
                                    <th className="column"><center>GMB Insights Data</center></th>
                                    <th className="column"><center>Google Analytics Data</center></th>
                                    <th className="column"><center>Social Integrations</center></th>
                                    <th className="column"><center>Link Audit / Tracking</center></th>
                                    <th className="column"><center>White-label Reporting</center></th>
                                </tr>
                            </thead>

                            {
                                tableData.map((costs) => (
                                    <tbody key={costs._id}>

                                        <tr className="row-2 even">
                                            <td className="column-1">BrightLocal</td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="Picture of the author" />
                                            </td>
                                        </tr>


                                        <tr className="row-2 even">
                                            <td className="column-1">Moz Local</td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                        </tr>



                                        <tr className="row-2 even">
                                            <td className="column-1">Yext</td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                        </tr>



                                        <tr className="row-2 even">
                                            <td className="column-1">Whitespark</td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                        </tr>


                                        <tr className="row-2 even">
                                            <td className="column-1">Synup</td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                        </tr>


                                        <tr className="row-2 even">
                                            <td className="column-1">Tribe Local</td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.crossImg} width={22} height={22} alt="Picture the cross" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                            <td className="column-2">
                                                <Image src={costs?.imageURL} width={22} height={22} alt="tricks" />
                                            </td>
                                        </tr>
                                    </tbody>
                                ))}
                        </table>
                    </div>


                    {/* flip  */}

                    <div className={TableStyle.flipBoxBack}>

                        <table className={TableStyle.customers} >
                            <thead>
                                <tr>
                                    <th>Company</th>
                                    <th>3 Locations</th>
                                    <th>6 Locations</th>
                                    <th>100 Locations</th>
                                </tr>
                            </thead>
                            <tbody >
                                <tr className="row">
                                    <td className=""><b>BrightLocal</b></td>
                                    <td className=""><b>£29/month or $290/year</b></td>
                                    <td className=""><b>$49/month or $490/year</b></td>
                                    <td className=""><b>$79/month or $790/year</b></td>
                                </tr>

                                <tr className="row-3 odd">
                                    <td className="column-1">Moz Local</td>
                                    <td className="column-2">From $387/year</td>
                                    <td className="column-3">From $774/year</td>
                                    <td className="column-4">From $12,900/year </td>
                                </tr>

                                <tr className="row-4 even">
                                    <td className="column-1">Yext</td>
                                    <td className="column-2">From $600/year</td>
                                    <td className="column-3">From $12,000/year</td>
                                    <td className="column-4">From $20,000/year</td>
                                </tr>

                                <tr className="row-5 odd">
                                    <td className="column-1">Whitespark</td>
                                    <td className="column-2">Custom Pricing Only</td>
                                    <td className="column-3"></td><td className="column-4"></td>
                                </tr>

                                <tr className="row-6 even">
                                    <td className="column-1">Synup</td>
                                    <td className="column-2">$90/month</td>
                                    <td className="column-3">$160/month</td>
                                    <td className="column-4">$160/month</td>
                                </tr>
                                <tr className="row-6 even">
                                    <td className="column-1">Tribe Local</td>
                                    <td className="column-1">From $87/month or $870/year</td>
                                    <td className="column-2">From $150/month or $1,500/year	</td>
                                    <td className="column-3">From $2,900/month or $29,000/year</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default Cost;