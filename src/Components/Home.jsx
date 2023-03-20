import React from "react";
import Row from "./Row";
import "./Styles/Home.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {BiPlay} from 'react-icons/bi'
import { AiOutlinePlus} from 'react-icons/ai'

//@Ready

const bgUrl = 'https://collider.com/wp-content/uploads/the-avengers-movie-poster-banners-03.jpg'
const upcoming = "upcoming";
const apiKey = "10652680a6d5a28fb74f3e23c69088d8";
const url = "https://api.themoviedb.org/3";
const nowPlaying = "now_playing";
const popular = "popular";
const topRated = "top_rated";

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    const fetchUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}&page=2`);

      setUpcomingMovies(results);
    };

    const fetchNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${nowPlaying}?api_key=${apiKey}`);
      setNowPlayingMovies(results);
    };

    const fetchPopular = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`);
      setPopularMovies(results);
    };

    const fetchToprated = async () => {
      const {
        data: { results },
      } = await axios.get(`${url}/movie/${topRated}?api_key=${apiKey}`);
      setTopRatedMovies(results);
    };

    const fetchGenre = async()=>{
      const {data:{genres},} = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`);
      setGenre(genres)
    }

    fetchUpcoming();
    fetchNowPlaying();
    fetchPopular();
    fetchToprated();
    fetchGenre();
  }, []);

  return (
    <section className="home">
      <div className="banner" style={{backgroundImage:`url(${bgUrl})`}}>
      
      {popularMovies[0] &&  <h1>{popularMovies[0].original_title}</h1>}
      {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

      <div>
      <button><BiPlay/> Play</button> 
      <button>My List <AiOutlinePlus /></button>
      </div>
     
      </div>
     


      <div className="genreBox">
{
  genre.map((item,index)=>(
    <Link  key={index}to={`/genre/${item.name}`}>{item.name}</Link>
  ))
}
</div>

      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"Popular"} arr={popularMovies} />
      <Row title={"Top Rated"} arr={topRatedMovies} />
    </section>
  );
};

export default Home;
