import React from 'react'
import Row from '../components/Row'
import requests from '../requestApis/allrequest'
import Banner from '../components/Banner'

function Home() {
  return (
    <div>
    <Banner fetchurl={requests.fetchTopRated}></Banner>

       <Row change={true} title={"Trending Now"}fetchurl={requests.fetchTrending}></Row>
       <Row title={"Originals"}fetchurl={requests.fetchNetflixOriginals}></Row>
       <Row title={"Top Rated"}fetchurl={requests.fetchTopRated}></Row>
       <Row title={"Action Movies"}fetchurl={requests.fetchActionMovies}></Row>
       <Row title={"Comedy Movies"}fetchurl={requests.fetchComedyMovies}></Row>
       <Row title={"Horror Movies"}fetchurl={requests.fetchHorrorMovies}></Row>
       <Row title={"Romance Movies"}fetchurl={requests.fetchRomanceMovies}></Row>
       <Row title={"Documentaries"}fetchurl={requests.fetchDocumentaries}></Row>

    </div>
  )
}

export default Home