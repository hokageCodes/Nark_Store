import React from "react";
import './sign-up.css';
import Signimage from '../assets/girl.png'



function SignUp() {
    return(
        <div className="container">
            <div className="img-container">
                <img src={Signimage} alt="sign up" />
                <p>Gemstoned <span>By</span> Tomari</p>
            </div>
            <div className="info-container">
                <div className="info-text">
                    <h1>Sign in with your wallet</h1>
                    <p>Sign in with one of available wallet providers or create a new wallet. <span>What is a wallet?</span></p>
                </div>
                <div className="button-div">
                    <div className="sign-up-buttons">
                        <button className="purple-button">Sign in with Metamask</button>
                        <button>Sign in with Wallet</button>
                        <button>Sign in with Coinbase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default SignUp