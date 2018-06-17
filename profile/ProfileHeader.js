import React from 'react';

import bball from '../assets/bball_icon.png';
import '../themes.css';

const ProfileHeader = props => {
    return (
        <div className="form-group" style={{ display: "flex", flexDirection: "row", margin: "30px 40px 0px 40px" }}>
            <img 
                src={bball} 
                alt="search" 
                style={{ height: "30px", marginTop: "10px" }}
            />
            <h4 className="text-muted" style={{ fontWeight: "normal", margin: "5px 30px 0px 30px" }}> Starting Lineup </h4>
        </div>    
    );
}

export default ProfileHeader;
