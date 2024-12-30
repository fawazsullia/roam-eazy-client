import styles from './HeroDetails.module.css';

interface IProps {
  destination: string;
}

const HeroDetails = (props: IProps) => {
  const { destination } = props;
  return (
    <div className={styles.heroContainer}>
    {/* <h1>Explore the {destination}</h1> */}
    </div>
  );
}

export default HeroDetails;