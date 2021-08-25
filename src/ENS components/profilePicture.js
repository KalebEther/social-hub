import './profilePicture.css'
import React from 'react';


function ProfilePicture (props) {

    return (

        <div className={ props.imgClass + " profile-picture-img-container"} >
            <img className="profile-picture-img" src={props.imgSrc} alt={props.imgSrc}/>
        </div>
    )

}

export default ProfilePicture;