import React from "react"
import Card from '../../components/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket, faAtom, faCube } from '@fortawesome/free-solid-svg-icons'

const Welcome = () => {
    return ( 
        <Row>
            <Col md={4}>
                <Card>
                    <Card.Title><FontAwesomeIcon icon={faRocket} /> Getting started</Card.Title>
                    <Card.Body>
                        <p>Instructions on installing component library</p>
                    </Card.Body>
                    <Card.Footer>
                        <a href='https://github.com/simonjduckett/rmcomponents/pkgs/npm/rmcomponents'>Read more</a>
                    </Card.Footer>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Title><FontAwesomeIcon icon={faAtom} /> Foundations</Card.Title>
                    <Card.Body>
                        <p>Fundamental principles of design system</p>
                    </Card.Body>
                    <Card.Footer>
                        <a href='/?path=/docs/foundations-colors--page'>Read more</a>
                    </Card.Footer>
                </Card>
            </Col>
            <Col md={4}>
                <Card>
                    <Card.Title><FontAwesomeIcon icon={faCube} /> Components</Card.Title>
                    <Card.Body>
                        <p>View documentation on each component.</p>
                    </Card.Body>
                    <Card.Footer>
                        <a href='/?path=/docs/components-buttons-button--large'>Read more</a>
                    </Card.Footer>
                </Card>
            </Col>
            
        </Row>
     );
}
 
export default Welcome;