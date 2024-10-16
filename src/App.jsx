/* import React from "react"; */ // Importação comentada do React, possivelmente mantida para referência futura.
import React, { useEffect, useState } from "react"; // Importa React e hooks useEffect e useState
import Header from "./components/Header/Header"; // Importa o componente Header
import "./global.scss"; // Importa estilos globais
import Tmdb from "./Tmdb"; // Importa a API do TMDB para obter dados de filmes
import MovieRow from "./components/MovieRow/MovieRow"; // Importa o componente MovieRow para exibir listas de filmes
import FeaturedMovie from "./components/FeaturedMovie/FeaturedMovie"; // Importa o componente para exibir um filme em destaque
import Footer from "./components/Footer/Footer"; // Importa o componente Footer

function App() {
  const [movieList, setMovieList] = useState([]); // Estado para armazenar a lista de filmes
  const [featuredData, setFeaturedData] = useState([]); // Estado para armazenar o filme em destaque
  const [blackHeader, setBlackHeader] = useState(false); // Estado para controlar a cor do cabeçalho

  // useEffect para carregar todos os dados necessários quando o componente é montado
  useEffect(() => {
    const loadAll = async () => {
      // Pegando a lista total de filmes
      let list = await Tmdb.getHomeList(); // Chama a função da API para obter a lista
      setMovieList(list); // Atualiza o estado com a lista de filmes

      // Pegando o filme em destaque
      let originals = list.filter((i) => i.slug === "originals"); // Filtra a lista para obter apenas filmes originais
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1) // Seleciona um filme aleatório
      );
      let chosen = originals[0].items.results[randomChosen]; // Obtém o filme escolhido

      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv"); // Busca informações detalhadas sobre o filme escolhido
      setFeaturedData(chosenInfo); // Atualiza o estado com os dados do filme em destaque
    };
    loadAll(); // Chama a função de carregamento
  }, []); // Executa apenas uma vez quando o componente é montado

  // useEffect para monitorar o scroll da página
  useEffect(() => {
    const scrollListener = () => {
      // Verifica a posição do scroll
      if (window.scrollY > 50) {
        setBlackHeader(true); // Define o cabeçalho como preto se a rolagem for maior que 50px
      } else {
        setBlackHeader(false); // Retorna ao cabeçalho padrão se não
      }
    };
    window.addEventListener("scroll", scrollListener); // Adiciona o listener de scroll

    return () => {
      window.removeEventListener("scroll", scrollListener); // Remove o listener ao desmontar o componente
    };
  }, []); // Executa apenas uma vez quando o componente é montado

  return (
    <>
      <Header black={blackHeader} />{" "}
      {/* Renderiza o cabeçalho, passando a cor do cabeçalho como prop */}
      {featuredData && <FeaturedMovie item={featuredData} />}{" "}
      {/* Renderiza o filme em destaque se disponível */}
      <section className="lists">
        {movieList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} /> // Renderiza cada linha de filmes
          // title e items são props passadas para o componente MovieRow
        ))}
      </section>
      <Footer /> {/* Renderiza o rodapé */}
      {movieList.length <= 0 && ( // Exibe um loading se não houver filmes
        <div className="loading">
          <img
            src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif"
            alt="Carregando" // Imagem de carregamento
          />
        </div>
      )}
    </>
  );
}
export default App; // Exporta o componente App para uso em outras partes da aplicação
