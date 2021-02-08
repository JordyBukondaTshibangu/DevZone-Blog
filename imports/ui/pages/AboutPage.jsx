import React from 'react'


const image = 'data:image/jpeg;base64,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'


const AboutPage = () => {
    return (
        <div className="about-page-container">
            <div className="dev-zone-about">
            <h1>DEVZONE FOR YOU </h1>
                <p>DEV is a community of software developers getting together to help one another out. The software industry relies on     collaboration and networked learning. We provide a place for that to happen.
                    Our application is open source, meaning you can inspect every little detail of the code, or chip in yourself! We are working to make our platform available for anyone to stand up similar communities in any niche or passion.
                    We believe in transparency and adding value to the ecosystem. We hope you poke around and like what you see!
                </p>
            </div>
            <h3>Our Team </h3>
            <div className="dev-zone-card">
                    <img src={image} alt="" />
                    Jordy Tshibangu
                    <div className="dev-zone-text"> 
                        <p>Our company is led by Jordy Tshibangu (CEO) and was created on the 4th of february 2021.</p>
                    </div>
                </div>
        </div>
    )
}

export default AboutPage
