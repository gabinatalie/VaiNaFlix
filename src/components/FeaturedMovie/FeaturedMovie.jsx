import "./FeaturedMovie.scss"; // Importa os estilos para este componente

function FeaturedMovie({ item }) {
  // Converte a data de lançamento para um objeto Date
  let firstDate = new Date(item.first_air_date);

  // Extrai os nomes dos gêneros e os armazena em um array
  let genres = [];
  for (let i in item.genres) {
    genres.push(item.genres[i].name);
  }

  return (
    <section
      className="featured"
      // Define a imagem de fundo com base no caminho da API TMDB
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          {/* Nome do filme ou série */}
          <div className="featured--name">{item.name}</div>

          <div className="featured--info">
            {/* Exibe a pontuação do filme/série ou 'N/A' se indisponível */}
            <div className="featured--points">
              {item && item.vote_average ? item.vote_average.toFixed(1) : "N/A"}{" "}
              pontos
            </div>

            {/* Ano de lançamento */}
            <div className="featured--year">{firstDate.getFullYear()}</div>

            {/* Número de temporadas e ajusta o plural se necessário */}
            <div className="featured--seasons">
              {item.number_of_seasons} temporada
              {item.number_of_seasons !== 1 ? "s" : ""}
            </div>
          </div>

          {/* Descrição do filme/série */}
          <div className="featured--description">{item.overview}</div>

          <div className="featured--buttons">
            {/* Botão para assistir ao conteúdo */}
            <a href={`/watch/${item.id}`} className="featured--watchbutton">
              ► Assistir
            </a>

            {/* Botão para adicionar à lista */}
            <a href={`/list/add/${item.id}`} className="featured--mylistbutton">
              + Minha Lista
            </a>
          </div>

          {/* Exibe os gêneros do filme/série */}
          <div className="featured--genres">
            <strong>Gêneros:</strong> {genres.join(", ")}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedMovie; // Exporta o componente para ser utilizado em outros lugares
