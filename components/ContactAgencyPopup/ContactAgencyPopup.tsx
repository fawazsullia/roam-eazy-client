import { ICompany, ICompanyDetail } from "@/inerfaces/ICompany.interface";
import { Button, Input, Modal } from "antd"
import { useState } from "react";

import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

interface IContactAgencyPopupProps {
    open: boolean;
    company: ICompany & { details: ICompanyDetail }
    handleContactClose: () => void;
}

const ContactAgencyPopup = (props: IContactAgencyPopupProps) => {
    const { open, company, handleContactClose } = props;
    const [currentTab, setCurrentTab] = useState<"form" | "info">("form");
    const [value, setValue] = useState<any>()


    return <Modal open={open} onClose={handleContactClose} onCancel={handleContactClose} closable={true} footer={null}>
        <div>
            <h2>Contact {company.name}</h2>
            {
                currentTab === "form" && <div>
                    <p>Fill out the form below to contact {company.name}</p>
                    <PhoneInput
                        placeholder="Enter phone number"
                        value={value}
                        onChange={(e) => setValue(e)} 
                        defaultCountry="AE"/>
                    <Button>Send Enquiry</Button>
                </div>
            }
            {
                currentTab === "info" && <div>
                    <p>Here is the contact information for {company.name}</p>
                </div>
            }
            {

            }
        </div>
    </Modal>
}

export default ContactAgencyPopup;