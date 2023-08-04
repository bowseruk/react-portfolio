import './App.css';
import Home from './components/pages/home.jsx';
import About from './components/pages/about.jsx';
import Projects from './components/pages/projects.jsx';
import Project from './components/pages/project.jsx';
import Contact from './components/pages/contact.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "project/:projectID",
    element: <Project />,
  }
], {
  basename: "/react-portfolio/",
});

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
