import React, { useState } from 'react';
import { Link, useHistory  } from 'react-router-dom';
import { FaGithub, FaFacebook, FaTwitterSquare, FaInstagramSquare } from 'react-icons/fa';

const dev = JSON.parse(localStorage.getItem('dev'));

let email;
if(dev === null){
    email = ""
} else {
    email = dev.email;
}


const MyProfile = () => {

    let history = useHistory();

    if(!dev){
        useHistory().push('/sign-in');
    } 

    const { fullName, dateOfBirth, myBio, avatar, createdAt } = dev

    let joinOn  = "";
    if(createdAt) {

        joinOn = createdAt.toString();
    }

    const [ error, setError ] = useState("");
    
    const handleDeleteAccount = () => {
        Meteor.call('developer.remove', email, (error) => {
            if(error){
                setError("There was an error");
                return;
            }
            history.push('/sign-up');
        })
    }
    return (
        <div className="profile-container">
            { error }
            <div className="user-details">
                <div className="user">
                    <img src={avatar} alt="" />
                    <h3>{fullName}</h3>
                    <ul>
                        <li><FaFacebook/><span>Facebbok</span></li>
                        <li><FaTwitterSquare/><span>Twitter</span></li>
                        <li><FaInstagramSquare/><span>Instagram</span></li>
                        <li><FaGithub/><span>GitHub</span></li>
                    </ul>
                </div>
                <div className="info">
                    <div>
                        <div>
                            <span>Full Name : </span>
                            <input type="text" value={fullName} disabled />
                        </div>
                        <div>
                            <span>Birth day :</span>
                            <input type="text" value={dateOfBirth} disabled />
                        </div>
                        <div>
                            <span>Email :</span>
                            <input type="text" value={email} disabled />
                        </div>
                        <div>
                            <span>Join on : </span>
                            <input type="text" value={joinOn} disabled />
                        </div>
                    </div>
                    <div>
                        <p>My Bio</p>
                        <div className="my-bio-content">
                            <p>{myBio}</p>
                        </div>
                    </div>
                    <div className="btn-section">
                        <button>
                            <Link to="/update-my-profile" className="edit-button"> Edit Post </Link>
                        </button>
                        <button onClick={handleDeleteAccount}>Delete Profile</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
