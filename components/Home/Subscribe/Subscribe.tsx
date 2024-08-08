import Styles from "./Subscribe.module.css";
import Image from "next/image";
import SubscribeImg from "../../../assets/images/subscribe.svg"

export default function Subscribe() {
  return (
    <div className={Styles.container}> {/* Outer container div */}
      <div className={Styles.subscribeContainer}>
        <div className={Styles.imageContainer}>
          <Image src={SubscribeImg} alt="slick-left"  className={Styles.image} />
        </div>
        <div className={Styles.contentContainer}>
          <h2 className={Styles.heading}>Subscribe Us</h2>
          <p className={Styles.subheading}>
            to get special offers and more from RoamEazy
          </p>
          <div className={Styles.inputContainer}>
            <input
              type="email"
              placeholder="Enter your email"
              className={Styles.inputField}
            />
            <button className={Styles.subscribeButton}>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}
