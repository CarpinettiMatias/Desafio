import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';

//DATA
import data from '../data/data.json';



const ItemsListContainer = () => {
    const [ show, setShow ] = useState(0);

    useEffect(() => {
        const showData = new Promise((resolve, reject) => {
            setTimeout(function () {
                resolve(data);
            }, 2000);
        });

            showData.then((Response) => {
                setShow(Response);
            });
        }, []);

    return(
        <>
            <ItemList item={show} />
        </>
        );
};

export default ItemsListContainer;
