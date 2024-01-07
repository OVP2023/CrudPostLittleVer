import {Routes, Route} from 'react-router-dom';
import HomePage from './components/HomePage'
import PostNewPage from './components/PostNewPage'
import PostEditPage from './components/PostEditPage'
import Menu from './components/Menu'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Menu />}>
        <Route index element={<HomePage />}/>
        <Route path='posts/new' element={<PostNewPage />}/>
        <Route path='posts/edit' element={<PostEditPage />}/>
      </Route>     
    </Routes>
  );
}

export default App



