import './App.css';
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import ArticleList from './Pages/ArticleList'
import ArticlePage from './Pages/ArticlePage'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import NavBar from './NavBar'

function App() {
  return (
    
    <Router>
    <div className="App">
    <NavBar />
    <Routes>
    <Route exact path="/" element={<HomePage />} exact />
    <Route exact path="/about" element={<AboutPage />} exact />
    <Route exact path="/article" element={<ArticlePage />} exact />
    <Route exact path="/article-list" element={<ArticleList />} exact />
    </Routes>
    </div>
    </Router>
  );
}

export default App;
