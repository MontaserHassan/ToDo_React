import { useRouteError, useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button } from "react-bootstrap";


const ErrorPage = () => {

    const error = useRouteError();
    const navigate = useNavigate(); 
    return (
        <Container>
            <Row>
                <Col xs={{ span: 8, offset: 2 }}>
                    <div className="mt-5 text-center">
                        <h1>Oops!</h1>
                        <p>Sorry, an unexpected error has occurred.</p>
                        <p>
                            <i> { error.status } {error.statusText || error.message} </i>
                        </p>
                        <Button variant="link" onClick={ () => navigate('/', { replace: true } ) }>Link</Button>
                        {/* use replace to replace the error page from stack of pages with the home page */}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ErrorPage;
