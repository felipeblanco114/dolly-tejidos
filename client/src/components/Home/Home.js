import React from 'react'
import './styles.css';
import img1 from './img/dolly-1.jpg';
import img2 from './img/dolly-2.jpg';
import img3 from './img/dolly-3.jpg';
import img8 from './img/dolly-8.jpg';
import img9 from './img/dolly-9.jpg';
import img11 from './img/dolly-11.jpg';
import img5 from './img/dolly-5.jpg';
import img6 from './img/dolly-6.jpg';
import img4 from './img/dolly-4.jpg';
import img10 from './img/dolly-10.jpg';
import img7 from './img/dolly-7.jpg';
import img12 from './img/dolly-12.jpg';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='image-gallery'>
                <div className='image-box'>
                    <img src={img1} alt='sweater-dolly' />
                    <div className='grande'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img2} alt='clothes-dolly' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img3} alt='dolly-slowhand' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img8} alt='sweater-dolly' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img9} alt='dolly-9' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img11} alt='dolly-11' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img12} alt='dolly-11' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img5} alt='dolly-5' />
                    <div className='grande'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img6} alt='dolly-6' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img4} alt='dolly-6' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img10} alt='dolly-10' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className='image-box'>
                    <img src={img7} alt='dolly-7' />
                    <div className='overlay'>
                        <div className='details'>
                            <h3 className='home-title'>
                                <span>Sweater</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
