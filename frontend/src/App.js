// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <nav>
        <Header/>
      </nav>
      <body>
        <Body/>
      </body>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
