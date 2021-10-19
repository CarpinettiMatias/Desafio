import { Card, Badge } from 'react-bootstrap';
import ItemsListContainer from '../ItemListContainer/ItemListContainer';


function Item (props) {
    const { name, img, precio } = props.props;


    return(
        <div className='col-sm-6 col-md-3'>
            <Card>
                <Card.Img variant="top" src={img} width="60%" />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        <div style={{ textAlign:"center"}}>
                            <Badge bg="success">Precio: {precio} </Badge>
                        </div>
                    </Card.Text>
                <ItemsListContainer props={props.props} />
                </Card.Body>

            </Card>
        </div>
    );
}
export default Item;