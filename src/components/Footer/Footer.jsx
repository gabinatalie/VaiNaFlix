import "./FooterStyle.scss";

function Footer() {
  return (
    <footer>
      <p>
        {/* Texto com um coração, usando um emoji acessível com aria-label */}
        Feito com{" "}
        <span role="img" aria-label="coração">
          ❤️
        </span>{" "}
        por{" "}
      </p>
      
      {/* Link para o perfil do LinkedIn da Gabrielle N. Alves */}
      <a href="https://www.linkedin.com/in/gabriellenataliealves/">
        Gabrielle N. Alves
      </a>

      {/* Indicação de direitos de imagem para a Netflix */}
      <p>Direitos de imagem para Netflix</p>
      
      {/* Atribuição dos dados ao site Themoviedb.org */}
      <p>Dados pegos do site Themoviedb.org</p>
    </footer>
  );
}

export default Footer; // Exporta o componente Footer para ser usado em outros lugares

