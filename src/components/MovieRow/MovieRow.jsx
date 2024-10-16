import React, { useState } from "react";
import "./MovieRow.scss";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore"; // Ícone de seta para a esquerda
import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // Ícone de seta para a direita

function MovieRow({ title, items }) {
  const [scrolX, setScrollX] = useState(-400); // Estado para controlar a posição do carrossel

  // Função para mover o carrossel para a esquerda
  const handleLeftArrow = () => {
    let x = scrolX + Math.round(window.innerWidth / 2); // Move o carrossel metade da largura da janela para a direita
    if (x > 0) {
      x = 0; // Garante que o carrossel não passe do início
    }
    setScrollX(x); // Atualiza o estado com a nova posição
  };

  // Função para mover o carrossel para a direita
  const handleRightArrow = () => {
    let x = scrolX - Math.round(window.innerWidth / 2); // Move o carrossel metade da largura da janela para a esquerda
    let listW = items.results.length * 185; // Calcula a largura total da lista de filmes
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 50; // Garante que o carrossel não ultrapasse o fim da lista
    }
    setScrollX(x); // Atualiza o estado com a nova posição
  };

  return (
    <div className="movieRow">
      <h2>{title}</h2> {/* Título da linha de filmes */}
      {/* Botão para mover o carrossel para a esquerda */}
      <div className="movieRow--before" onClick={handleLeftArrow}>
        <NavigateBeforeIcon style={{ fontSize: 50 }} />
      </div>
      {/* Botão para mover o carrossel para a direita */}
      <div className="movieRow--next" onClick={handleRightArrow}>
        <NavigateNextIcon style={{ fontSize: 50 }} />
      </div>
      {/* Área da lista de filmes */}
      <div className="movieRow--listarea">
        <div
          className="movieRow--list"
          style={{
            marginLeft: scrolX, // Controla a posição da lista com base no estado
            width: items.results.length * 200, // Define a largura da lista baseada no número de filmes
          }}
        >
          {/* Renderiza os filmes ou uma mensagem se não houver dados */}
          {items && items.results && items.results.length > 0 ? (
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} // Caminho para o pôster do filme
                  alt={item.original_title || item.name} // Nome do filme ou série
                />
              </div>
            ))
          ) : (
            <p>No movies available</p> // Mensagem caso não haja filmes disponíveis
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieRow; // Exporta o componente para ser usado em outras partes da aplicação
