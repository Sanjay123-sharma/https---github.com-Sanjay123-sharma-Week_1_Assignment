import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Counter from './components/main'; 

function App() {
  return (
    <>
      <body className="body">
        <div className="App">
          <header className="App-header">
            <Header />  {/*  Header Component */}
          </header>

          <Counter />  {/* Counter Component */}

          <footer className="App-footer">
            <Footer />  {/* Footer Component */}
          </footer>
        </div>
      </body>
    </>
  );
}

export default App;
