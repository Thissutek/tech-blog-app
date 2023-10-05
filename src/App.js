import './App.css';
import BlogPost from './components/BlogPost/BlogPost';
import SearchBar from './components/SearchBar/SearchBar';
import ToolBar from './components/ToolBar/ToolBar'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h4>Jon's Code Odyssey: Navigating the Programming Universe</h4>
      </header>
        <SearchBar />
        <ToolBar />
        <BlogPost />
        
    </div>
  );
}

export default App;
