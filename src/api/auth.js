//import {Redirect}from 'react-router-dom';
import PropTypes from 'prop-types';

export const ProtectedRoute=({ children })=> {
  const userToken = localStorage.getItem("Token");

  if (userToken) {
    // O token existe, permita o acesso à rota protegida
    return children;
  } else {
    // O token não existe, redirecione para a página de login
    return window.location.href = "https://www.npmjs.com/package/jsonwebtoken";
    //return <Redirect to="/restrito" />;
  }
}

// Definir a validação das props
ProtectedRoute.propTypes = {
  children: PropTypes.node,
};
