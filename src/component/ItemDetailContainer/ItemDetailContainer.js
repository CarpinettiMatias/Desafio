import React,{ useState } from 'react';
import{ Modal, Button } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = (props) => {
    const [ mostrar, setMostrar ] = useState(false);
    const handleClose = () => setMostrar(false);
    const handleMostrar = () => setMostrar(true);



    return (
        <>
        <Button variant="warning" onClick={handleMostrar} style={{ width:'100%' }}>
            Ver Detalles
        </Button>
        <Modal show={mostrar} onHide={handleClose}>
            <ItemDetail props={props.props} />
        </Modal>
        </>
    );
};

export default ItemDetailContainer;
