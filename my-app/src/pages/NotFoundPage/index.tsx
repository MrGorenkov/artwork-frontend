import { Button, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
    return (
        <Container className="text-center" style={{ marginTop: "200px" }}>
            <Row>
                <Col>
                    <h1 className="display-3">404</h1>
                    <p className="lead">Страница не найдена</p>
                    <Link to="/">
                        <Button
                            className="rounded-2 fw-bold"
                            style={{
                                backgroundColor: "#A26907",
                                borderColor: "#A26907",
                                color: "#ffffff",
                                transition: "transform 550ms",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
                        >
                            На главную
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    );
};
