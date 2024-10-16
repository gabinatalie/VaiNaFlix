//Importando o estilo da Header
import "./HeaderStyle.scss";

function Header({ black }) {
  return (
    // Define a classe "black" se a prop 'black' for verdadeira, caso contrário, usa uma string vazia
    <header className={black ? "black" : ""}> 
      
      {/* Logotipo do site */}
      <h2 className="header--logo">VaiNaFlix</h2>

      <div className="header--user">
        {/* Link para a página inicial com a imagem de perfil do usuário */}
        <a href="/">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg"
            alt="usuário" // Texto alternativo para acessibilidade
          />
        </a>
      </div>
    </header>
  );
}

export default Header; // Exporta o componente para ser utilizado em outras partes da aplicação

