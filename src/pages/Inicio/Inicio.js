import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import ItemsListContainer from '../../component/ItemListContainer/ItemListContainer';

const Inicio = () => {
    return (
        <div>
            <Container>
                <ItemsListContainer />
            </Container>
        </div>
    );
};

export default Inicio;
