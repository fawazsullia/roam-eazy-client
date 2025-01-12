'use client'
import styles from "./LogoipsumCard.module.css";
import Image from "next/image";
import call from "../../../icons/callicon.svg"
import whatsapp from "../../../icons/whatsappicon.svg"
import { ICompany, ICompanyDetail } from "@/inerfaces/ICompany.interface";
import { Avatar, Button, message, Modal, Popconfirm, Popover, Tooltip } from "antd";
import ContactAgencyPopup from "@/components/ContactAgencyPopup/ContactAgencyPopup";
import { useState } from "react";
import { axiosInstance } from "@/utils/axios.utils";
import { IListing } from "@/inerfaces/IListing.interface";
import { Config } from "@/config/base.config";

interface ILogoIpsumCardProps {
    company: ICompany & { details: ICompanyDetail };
    listing: IListing;
}

export default function LogoipsumCard(props: ILogoIpsumCardProps) {
    const { company, listing } = props;
    const [openContact, setOpenContact] = useState(false);
    const [metricsCallLoading, setMetricsCallLoading] = useState(false);
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
    const [metricsSent, setMetricsSent] = useState(false);

    function contactClickHandler(type: "whatsapp" | "call", phoneNumber: string, whatsappNumber?: string) {
        if (!phoneNumber) {
            console.error("Phone number is required.");
            return;
        }
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        const encodedWhatsappNumber = whatsappNumber ? encodeURIComponent(whatsappNumber) : encodeURIComponent(phoneNumber);

        if (type === "whatsapp") {
            if (isMobile) {
                // Open WhatsApp mobile app
                window.location.href = `whatsapp://send?phone=${encodedWhatsappNumber}`;
            } else {
                // Open WhatsApp Web
                window.open(`https://web.whatsapp.com/send?phone=${encodedWhatsappNumber}`, "_blank");
            }
        } else if (type === "call") {
            // Open phone dialer
            if (isMobile) {
                window.location.href = `tel:${phoneNumber}`;
            } else {
                setShowPhoneNumber(showPhoneNumber => !showPhoneNumber);
                navigator.clipboard.writeText(phoneNumber);
            }
        } else {
            console.error("Invalid type. Must be 'whatsapp' or 'call'.");
        }
    }

    async function sendContactBtnClickEvent(context: "whatsapp" | "call", listingId: string, companyId: string) {
        setMetricsCallLoading(true);
        if (metricsSent) return;
        try {
            await axiosInstance.post("/api/metrics/event", {
                event: context === "whatsapp" ? 'WHATSAPP_BUTTON_CLICKED' : 'CALL_BUTTON_CLICKED',
                listingId,
                companyId,
            });
        } catch (err) {
            console.error("Failed to send contact button click event.", err);
        } finally {
            setMetricsCallLoading(false);
            setMetricsSent(true);
        }

    }

    const handleSubmitClick = async (context: "whatsapp" | "call") => {
        // setOpenContact(true);}
        await sendContactBtnClickEvent(context, listing._id, company._id);
        contactClickHandler(context, company.details.phone, company.details.alternatePhone);

    }

    const handleContactClose = () => {
        setOpenContact(false);
    }

    return (
        <>
            <ContactAgencyPopup open={openContact} company={company} handleContactClose={handleContactClose} />
            <div className={styles.searchContainer}>
                <div className={styles.logo}>
                    {company.details.logo && <Image src={`${Config.imageBaseUrl}?id=${company.details.logo}`} alt="Logoipsum" className={styles.image} 
                        width={100}
                        height={100}
                        // sizes="100vw"
                        />
                        }
                    {!company.details.logo && <Tooltip title={company.name}><Avatar size={50}>{company.name}</Avatar></Tooltip>}

                    <h4>{company.name}</h4>
                </div>
                <div className={styles.content}>
                    {
                        company.details.description
                    }
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.callButton} onClick={() => handleSubmitClick("call")}>  <Image src={call} alt="Logoipsum" className={styles.image} />
                        <span className={styles.button} >{showPhoneNumber ? company.details.phone : 'Call'}</span>
                    </div>
                    <div className={styles.whatsappButton} onClick={() => handleSubmitClick("whatsapp")}>  <Image src={whatsapp} alt="Logoipsum" className={styles.image} />
                        <span className={styles.button}>Whatsapp</span>
                    </div>
                </div>


            </div>
            <div className={styles.mobileButtonContainer}>
                <div className={styles.callButton} onClick={() => handleSubmitClick("call")}>  <Image src={call} alt="Logoipsum" className={styles.image} />
                    <span className={styles.button} >Call</span>
                </div>
                <div className={styles.whatsappButton} onClick={() => handleSubmitClick("whatsapp")}>  <Image src={whatsapp} alt="Logoipsum" className={styles.image} />
                    <span className={styles.button}>Whatsapp</span>
                </div>
            </div>
        </>
    );
}
