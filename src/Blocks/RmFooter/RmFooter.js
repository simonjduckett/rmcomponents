import React from "react";
import styles from './RmFooter.module.scss'
import { Row, Col, Container } from 'react-bootstrap'
import { Logo, List, ListItem } from '../../components'

const RmFooter = () => {
    return ( 
        <footer className={styles.footer}>
            <Container>
                <Row>
                    <Col sm={3}>
                        <h3>Contact us</h3>
                        <List>
                            <ListItem>
                                <p>
                                    <span>Reallymoving.com Ltd</span>
                                    <br />
                                    Eclipse Court
                                    <br />
                                    14B Chequer Street
                                    <br />
                                    St Albans
                                    <br />
                                    AL1 3YD
                                </p>
                            </ListItem>
                        </List>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                    </Col>
                    <Col sm={3}>
                        <h3>Services</h3>
                        <List type='pinkchevron'>
                            <ListItem><a href='#'>Conveyancing</a></ListItem>
                            <ListItem><a href='#'>Surveyors</a></ListItem>
                            <ListItem><a href='#'>Help & advice</a></ListItem>
                            <ListItem><a href='#'>Removals</a></ListItem>
                            <ListItem><a href='#'>Mortgages</a></ListItem>
                            <ListItem><a href='#'>International removals</a></ListItem>
                        </List>
                    </Col>
                    <Col sm={3}>
                        <h3>Useful information</h3>
                        <List type='pinkchevron'>
                            <ListItem><a href="/about-us">About us</a></ListItem>
                            <ListItem><a href="/media">Media</a></ListItem>
                            <ListItem><a href="/reallymoving-reviews">reallymoving reviews</a></ListItem>
                            <ListItem><a href="/blog">Blog</a></ListItem>
                            <ListItem><a href="/become-a-partner">Join us</a></ListItem>
                            <ListItem><a href="/careers">Careers</a></ListItem>
                            <ListItem><a href="/terms-and-conditions">Terms & conditions</a></ListItem>
                            <ListItem><a href="/site-map">Site map</a></ListItem>
                            <ListItem><a href="/privacy-policy">Privacy policy</a></ListItem>
                        </List>
                    </Col>
                    <Col sm={3}>
                        <Logo type='footer' />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className='text-center'>
                        © Reallymoving.com ltd {new Date().getFullYear()}
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default RmFooter;