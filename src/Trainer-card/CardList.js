import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';
import Avatar from 'react-avatar';
import "./CardList.css";
import { BsChatSquareDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CardListItem = props => {

    return (
      
      
        <div className="card-container">
        <Link to={`/profile/${props.character.id}`} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src={props.character.photo} />
      <Card.Body>
        <Card.Title>{props.character.name}</Card.Title>
        <Card.Text style={{marginLeft:"1px"}}>
          Experience: {props.character.Experience}
        </Card.Text>
        <Button variant="primary">Learn More</Button>
      </Card.Body>
    </Card> 
          </Link>
      </div>
        
  
    );
  };
// const Cards = (props) => {
//   return (
//     <div>
//       <Card className="Card-container">
//         <CardImg src={props.character.photo} alt="Card image cap" />
//         <CardBody>
//           <CardTitle tag="h5">{props.character.name}</CardTitle>
//           <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//           <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//           <Button>Button</Button>
//         </CardBody>
//       </Card>
//     </div>
//   );
// };
  const CardList = () => {
    const characters =useSelector(state=>state.DataReducer).Data
    return (
      <div>
        {characters.map(character => {
          
          return <CardListItem  character={character} key={character.id} />;
        })}
        </div>
      
    );
  };

export default CardList