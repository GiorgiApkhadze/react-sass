
import Navbar from './Copmonents/Navbar';
import Banner from './Copmonents/Banner';
import MainText from './Copmonents/MainText';
import Product from './Copmonents/Product'
import './Variables/Global.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Banner />
        <MainText />
        <Product />
      </header>
    </div>
  );
}
export default App;
