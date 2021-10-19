import{ Modal, Card, Badge } from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = (props) => {
    const{ name, stock, precio, img, id, description } = props.props;
    const product = {
        stock: stock,
        initial: 1, 
        onAdd: (stock, cantidad) => {
            alert(`Se agregan ${cantidad} unidades al carrito`);
            return stock - cantidad;

        },
        precio: precio,
    };


    return (
        <>
          <Modal.Header closeButton>
              <Modal.Title>{name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <Card>
                  <Card.Img variant="top" src={img} width='80%' />
                  <Card.Body>
                      <Card.Text>
                          <span style={{ textAlign: "center" }}>
                              <Badge bg="success">SKU:{id}</Badge>
                          </span>
                          <br />
                          <span>{description}</span>
                          <br />
                          <span>
                              <Badge bg="danger">Precio: ${precio}</Badge>
                          </span>
                        </Card.Text>
                        <ItemCount props={product} />
                  </Card.Body>
              </Card>
          </Modal.Body>
        </>
    );
};

export default ItemDetail;
