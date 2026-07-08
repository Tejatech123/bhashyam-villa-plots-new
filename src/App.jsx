import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="project/:id" element={<ProjectDetail />} />
          <Route path="blog" element={<BlogList />} />
          <Route path="blog/:slug" element={<BlogPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
