import './App.css';
import Layout from './components/layout';
import Home from './components/pages/home.js';
import About from './components/pages/about.js';
import Projects from './components/pages/projects.js';
import Contact from './components/pages/contact.js';
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
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "projects",
    element: <Projects />,
    children: [
      {
        path: ":id",
        element: <Layout><Projects></Projects></Layout>,
      }
    ]
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
