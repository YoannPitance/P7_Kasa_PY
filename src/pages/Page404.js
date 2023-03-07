import React from "react";
import "../styles/page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <body>
      <div className="error">
        <img src="/assets/logo404.png" alt="erreur 404" />
        <h2>Oups! la page que vous demandez n'existe pas.</h2>
        <ul>
          <li>
            <Link to="/home">Retourner sur la page d'accueil</Link>
          </li>
        </ul>
      </div>
    </body>
  );
};

export default Page404;
