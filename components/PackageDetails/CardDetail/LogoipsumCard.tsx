'use client'
import styles from "./LogoipsumCard.module.css";
import Image from "next/image";
import call from "../../../icons/callicon.svg"
import whatsapp from "../../../icons/whatsappicon.svg"
import { ICompany, ICompanyDetail } from "@/inerfaces/ICompany.interface";
import { Avatar, Button, Tooltip } from "antd";
import ContactAgencyPopup from "@/components/ContactAgencyPopup/ContactAgencyPopup";
import { useState } from "react";

interface ILogoIpsumCardProps {
    company: ICompany & { details: ICompanyDetail };
}

export default function LogoipsumCard(props: ILogoIpsumCardProps) {
    const { company } = props;
    const [openContact, setOpenContact] = useState(false);

    const handleSubmitClick = (context: "whatsapp" | "call") => {
        setOpenContact(true);
    }

    const handleContactClose = () => {
        setOpenContact(false);
    }

    return (
        <>
            <ContactAgencyPopup open={openContact} company={company} handleContactClose={handleContactClose}/>
            <div className={styles.searchContainer}>
                <div className={styles.logo}>
                    {company.details.logo && <Image src={company.details.logo} alt="Logoipsum" className={styles.image} />}
                    {!company.details.logo && <Tooltip title={company.name}><Avatar size={50}>{company.name}</Avatar></Tooltip>}

                    <h4>{company.name}</h4>
                </div>
                <div className={styles.content}>
                    {
                        company.details.description
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.callButton}>  <Image src={call} alt="Logoipsum" className={styles.image} />
                        <a onClick={() => handleSubmitClick("call")} className={styles.button} >Call</a>
                    </div>
                    <div className={styles.whatsappButton}>  <Image src={whatsapp} alt="Logoipsum" className={styles.image} />
                        <a onClick={() => handleSubmitClick("whatsapp")} className={styles.button}>Whatsapp</a>
                    </div>
                </div>


            </div>
            <div className={styles.mobileButtonContainer}>
                <div className={styles.callButton}>  <Image src={call} alt="Logoipsum" className={styles.image} />
                    <a onClick={() => handleSubmitClick("call")} className={styles.button} >Call</a>
                </div>
                <div className={styles.whatsappButton}>  <Image src={whatsapp} alt="Logoipsum" className={styles.image} />
                    <a onClick={() => handleSubmitClick("whatsapp")} className={styles.button}>Whatsapp</a>
                </div>
            </div>
        </>
    );
}
