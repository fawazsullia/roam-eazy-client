import { Button, Col, DatePicker, Form, Input, Row } from 'antd';
import styles from './SlugHero.module.css';

interface IProps {
  departure: string;
  destination: string;
}

const SlugHero = (props: IProps) => {
  return (
    <div className={styles.heroContainer}>
    <h1>Find your next holiday <br/> trip from {props.departure} to {props.destination}</h1>
    </div>
  );
}

export default SlugHero;