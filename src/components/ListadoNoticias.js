import React from 'react';
import Noticia from './Noticia';
import propTypes from 'prop-types';

const ListaNot = ({ noticias }) => {
    return (
        <div className="row">
            {noticias.map(noticia => (
                <Noticia key={noticia.url} noticia={noticia} />
            ))}
        </div>
    );
}

ListaNot.propTypes={
    noticias: propTypes.array.isRequired
}


export default ListaNot;