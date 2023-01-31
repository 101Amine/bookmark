import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Introduction';

function Home() {
  return (
    <>
      {' '}
      <Header />
      <main id="main">
        <Hero />
      </main>
    </>
  );
}

export default Home;
