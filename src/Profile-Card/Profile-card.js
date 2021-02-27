import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import "./ProfileCard.css"
function ProfileCard(props) {
  const character = useSelector((state) => state.DataReducer).Data.filter(
    (a) => a.id === parseInt(props.match.params.id)
  );
  return<body className="body1" style={{color:"white"}} >
  <div>
      <div className="center">
      <div className="avatar">
      <img src={character[0].photo}
                alt="face"/>
      </div>
      <div className="content">
      <h1></h1>
            <h2 style={{color:"white"}}>{character[0].name}</h2>
            <p style={{textAlign:"left"}}>{character[0].description}</p>
      </div>
      <Card style={{ width: '100%',height:"40vh", background: "rgba(0,0,0,0.5)"}}>
      <Card.Body>
        {/* <Card.Title>{character[0].name}</Card.Title> */}
        <Card.Text style={{textAlign:"left"}}>
          Experience: {character[0].Experience}<br></br>
          Hobby: {character[0].hobby}<br></br>
          Mode: {character[0].video}<br></br>
          Session: {character[0].ruppe}

        </Card.Text>
        <Button  variant="primary">Book</Button>
      </Card.Body>
    </Card> 
      </div>
      
  </div>
  </body>;
}

export default ProfileCard;
