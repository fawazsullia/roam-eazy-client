import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import styles from './SlugHero.module.css';

interface IProps {
  departure: string;
  destination: string;
}

const SlugHero = (props: IProps) => {
  const { departure, destination } = props;
  return (
    <div className={styles.heroContainer}>
    <h1>Tour packages from {departure} to {destination}</h1>
    </div>
  );
}

export default SlugHero;