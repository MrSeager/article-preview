import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Image, Row, Col, Button } from 'react-bootstrap';
//Animation
import AOS from 'aos';
import 'aos/dist/aos.css';
//Images
import ImgMain from './images/drawers.jpg';
import ImgAva from './images/avatar-michelle.jpg';
import ImgShare from './images/icon-share.svg';
import ImgFB from './images/icon-facebook.svg';
import ImgTW from './images/icon-twitter.svg';
import ImgPI from './images/icon-pinterest.svg';

const Arcticle = () => {
    const [showContainer, setShowContainer] = useState(false);

    const toggleContainer = () => {
        setShowContainer(!showContainer);
    };

    AOS.init({
        false: 'mobile'
    });

    return (
        <Container className='cs-h py-5 d-flex flex-column align-items-center justify-content-center'>
            <Container data-aos="flip-up" className='cs-rounded shadow bg-white cs-w'>
                <Row>
                    <Col xs={12} lg={4} className='p-0 '>
                        <Image fluid src={ImgMain} alt='dravers' className='h-100 cs-rounded-img' />
                    </Col>
                    <Col xs={12} lg={8} className='px-5 py-4 p-lg-5 d-flex flex-column justify-content-between'>
                        <h1 className='h4 cs-c cs-fw-7'>Shift the overall look and feel by adding these wonderful 
                        touches to furniture in your home</h1>
                        <p className='cs-c-2'>Ever been in a room and felt like something was missing? Perhaps 
                        it felt slightly bare and uninviting. I’ve got some simple tips 
                        to help you make any room feel complete.</p>
                        <Row className='cs-anchor'>
                            <Col xs={2} lg={1} className='p-0'>
                                <Image fluid roundedCircle src={ImgAva} alt='avatar' />
                            </Col>
                            <Col xs={8} lg={10} className='ps-4 d-flex flex-column justify-content-center'>
                                <h2 className='h6 m-0 cs-c cs-fw-7'>Michelle Appleton</h2>
                                <p className='cs-c-2 m-0'>28 Jun 2020</p>
                            </Col>
                            <Col xs={2} lg={1} style={{ zIndex: 2 }} className='p-2 cs-anchor'>
                                <Button onClick={toggleContainer} className='cs-btn my-auto rounded-circle'><Image fluid src={ImgShare} alt='share' className='cs-img-filter' /></Button>
                            </Col>
                            {showContainer && (
                                <Container data-aos="fade-up" data-aos-offset="50" style={{ zIndex: 1 }} className='cs-share rounded d-flex flex-row align-items-center justify-content-start justify-content-lg-center px-5 py-2 gap-3 shadow'>
                                    <p className='cs-dec text-uppercase m-0 cs-c-3'>Share</p>
                                    <Button className='bg-transparent border-0 p-0'><Image src={ImgFB} alt='facebook' /></Button>
                                    <Button className='bg-transparent border-0 p-0'><Image src={ImgTW} alt='twitter' /></Button>
                                    <Button className='bg-transparent border-0 p-0'><Image src={ImgPI} alt='pinterest' /></Button>
                                </Container>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Arcticle;