import React from 'react';
import { Helmet } from 'react-helmet';

const About = (props) => {

    let myStyle =
    {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    }

    return (
        <>
            <Helmet>
                <title>TextUtils | About</title>
            </Helmet>
            <div className='container pb-2' style={myStyle}>
                <h2 className='my-3 text-center'>About Us</h2>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button style={myStyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>What is Text Utils ?</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Text utils is a Professional text Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of text, with a focus on dependability and text modifier. We're working to turn our passion for text into a booming online website. We hope you enjoy our text as much as we enjoy offering them to you.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>Why Text Utils ?</strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Text utils is a Professional text Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of text, with a focus on dependability and text modifier. We're working to turn our passion for text into a booming online website. We hope you enjoy our text as much as we enjoy offering them to you.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>What is Text Utils for ?</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                Text utils is a Professional text Platform. Here we will provide you only interesting content, which you will like very much. We're dedicated to providing you the best of text, with a focus on dependability and text modifier. We're working to turn our passion for text into a booming online website. We hope you enjoy our text as much as we enjoy offering them to you.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About