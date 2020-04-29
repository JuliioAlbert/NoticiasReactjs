import React from 'react';
import propTypes from 'prop-types';


const Noticia = ({ noticia }) => {

    //Extraer los datos 
    const { description, source, title, urlToImage, url } = noticia;

    const imagen = (urlToImage)
        ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{source.name}</span>
        </div>

        : null;


    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <h6>{title}</h6>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="waves-effect waves-light btn"
                    >Ver Noticia Completo</a>
                </div>
            </div>
        </div>
    );
}
Noticia.propTypes={
    noticia: propTypes.object.isRequired
}

export default Noticia;
