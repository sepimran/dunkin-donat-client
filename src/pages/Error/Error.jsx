import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <section className="breadcrumb-area">
                <h1>Page Not Found</h1>
            </section>

            <section className="section-padding-area no-bg">
                <div className="error-contact-area">
                    <img src="/acarnet-404-aee290cc.gif" alt="" />
                    <Link to="/"><button className='boxed-btn'>Back to Home</button></Link>
                </div>
            </section>
        </div>
    );
};

export default Error;