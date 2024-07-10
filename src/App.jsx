import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import HomePage from './pages/Home';
import IndonesiaPage from './pages/covid/Indonesia';
import ProvinsiPage from './pages/covid/Provinsi';
import AboutPage from './pages/covid/About';

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/home/indonesia' element={<IndonesiaPage />} />
          <Route path='/home/provinsi' element={<ProvinsiPage />} />
          <Route path='/home/about' element={<AboutPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
