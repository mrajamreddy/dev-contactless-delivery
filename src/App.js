import React from 'react';
import Chart from './components/charts';
import VerticalTree from './components/verticalChildShow';
import Footer from './headerFooter/footer';
import Header from './headerFooter/header';

function App() {
  return (
    <div>
      <Header />
      <Chart />
      <Footer />
    </div>
  );
}

export default App;
