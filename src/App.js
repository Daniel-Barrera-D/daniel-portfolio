import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Pages/Home';
import DetailProject from './Pages/DetailProject';
import Footer from './Components/Footer/Footer.jsx';
import { projectsData } from './ProjectData.js';
import NotFound404 from './Pages/NotFound404.jsx';
import AnimateContainer from './Components/AnimateContainer/AnimateContainer.jsx';
import RefsProvider from './Context/RefsProvider.jsx';
function App() {

  return (
    <RefsProvider>
          <Router>
            <Header />
              <Routes>
                <Route path='/' element={ 
                  <>
                    <AnimateContainer>
                      <Home />
                    </AnimateContainer>
                  </>
                }/>
                <Route path='/project/:path' element={
                  <>
                    <AnimateContainer>
                      <DetailProject projects={projectsData}/>
                    </AnimateContainer>
                  </>
                }/>
                <Route path='*' element={ <NotFound404 /> }/>
              </Routes>
            <Footer />
          </Router>
    </RefsProvider>
  );
}

export default App;
