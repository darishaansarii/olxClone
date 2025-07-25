import React from "react";
import { useParams } from "react-router-dom";
import { data } from "../../Data.jsx";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import styles from "./SingleProduct.module.css";
import { useNavigate } from "react-router-dom";

export const SingleProduct = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    const filterData = data.filter((e, i) => {
        return e.id==id;
    });

    console.log(filterData);
    
    
    return (
        <>
        {
            filterData.map((e, i) => {
                return (
                    <>
                        <Container className="my-5">
            {filterData.length > 0 ? (
                filterData.map((e, i) => (
                    <Row key={i} className="justify-content-center">
                        <Col md={8}>
                            <Card className={`${styles.card} shadow-lg`}>
                                <Row className="g-0">
                                    <Col md={6}>
                                        <Card.Img
                                            variant="top"
                                            src={e.image}
                                            className={styles.image}
                                            alt={e.title}
                                        />
                                    </Col>
                                    <Col md={6}>
                                        <Card.Body>
                                            <Card.Title>{e.title}</Card.Title>
                                            <Card.Text>{e.description}</Card.Text>
                                            <Card.Text><strong>Category:</strong> {e.category}</Card.Text>
                                            <Card.Text><strong>Price:</strong> ${e.price}</Card.Text>
                                            <Button variant="primary" className={styles.button} onClick={() => {navigate("/")}}>Back to products</Button>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                ))
            ) : (
                <h3 className="text-center">Product not found</h3>
            )}
        </Container>                    </>
                )
            })
        }
        </>
    )
}