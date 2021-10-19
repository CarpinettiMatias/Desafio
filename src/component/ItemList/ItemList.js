import { Spinner } from 'react-bootstrap';
import Item from '../Item/Item'


function ItemList({ Items }) {

    return (
        <>
            { Items.length ? (
                Items.map((elem, idx) => <Item props={elem} key={idx} />)
            ) : (
                <Spinner animation='border' variant='primary' />
            )}
        </>
    )
};

export default ItemList;
