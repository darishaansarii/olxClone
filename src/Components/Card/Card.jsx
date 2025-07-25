import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from "./Card.module.css";
import { CiHeart } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Cards({title, price, img, id}) {
  const navigate = useNavigate();
  console.log(id);
  
  return (
    <Card className={styles.bigCard}>
      <Card.Img className={styles.cardImg} variant="top" src={img} />
      <Card.Body className={styles.cardBody}>
        <Card.Title className={styles.titleContainer}>Rs. {price} <CiHeart /> </Card.Title> 
        <Card.Text className={styles.cardText}>
          {title.slice(0, 50)}...
        </Card.Text>
        <Button variant="primary" onClick={() => navigate(`/singleProduct/${id}`)} className={styles.cardBtn}>View Product</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;