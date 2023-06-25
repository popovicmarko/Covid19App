import React, { useEffect } from "react";
import "./PersonalCard.css";
import { Avatar } from '@mui/material';
import { blueGrey } from "@mui/material/colors";
import GitHubIcon from '@mui/icons-material/GitHub';

function PersonalCard ({
    name,
    fullName,
    occupation,
    description,
    gitHubLink,

})

{
    return (
      <div className="container">
        <div className="card">
            <div className="icons">
            <Avatar sx={{ bgcolor: blueGrey[500],
                        width:80, height:80
            }} className="avatars">{name}</Avatar>

            <p>{fullName}</p>

            </div>
            <div className="content">
                <h4>{occupation}</h4>
                <p>{description}</p>
            </div>
            <div className="gitAcc">
            <GitHubIcon sx={{width:35,height:35,color:" #3f2438",}} />
                <a href={gitHubLink}></a>
            </div>
        </div>
      </div>
    )
}

export default PersonalCard;