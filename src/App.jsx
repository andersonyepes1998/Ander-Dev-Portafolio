import { useRoutes, BrowserRouter } from 'react-router-dom';
import { Home } from '../src/containers/home/index.jsx';
import { Portfolio } from '../src/containers/portfolio/index.jsx';
import { Contact } from '../src/containers/contact/index.jsx';
import { About } from '../src/containers/about/index.jsx';
import { Resume } from '../src/containers/resume/index.jsx';
import { Skills } from '../src/containers/skills/index.jsx';
import './App.scss';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/Portfolio', element: <Portfolio /> },
    { path: '/Contact', element: <Contact /> },
    { path: '/About', element: <About /> },
    { path: '/Resume', element: <Resume /> },
    { path: '/Skills', element: <Skills /> },
  ])
  return (routes);
}

const App = () => {
  
  return (
    <>
      <div className='App_main-page-content'>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
