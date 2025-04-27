import './App.css';
import Header from './header';
import Footer from './footer';
import Counter from './main'; 

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
