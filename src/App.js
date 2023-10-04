import './App.css';
import BlogPost from './components/BlogPost/BlogPost';
import SearchBar from './components/SearchBar/SearchBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Jon's Code Odyssey: Navigating the Programming Universe</h4>
      </header>
        <SearchBar />
        <BlogPost />
    </div>
  );
}

export default App;
