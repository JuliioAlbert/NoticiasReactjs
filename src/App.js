import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListaNot from './components/ListadoNoticias';


function App() {

  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);
  useEffect(() => {

    const ConsultarApi = async () => {
      const API = '1c84592f3dc24b8fbb7577bc324b2f8e';
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${API}`;
      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      guardarNoticias(noticias.articles);
    }
    ConsultarApi();
  }, [categoria]);


  return (
    <Fragment>
      <Header
        titulo='Buscador de noticias'
      />

      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListaNot
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
}

export default App;
