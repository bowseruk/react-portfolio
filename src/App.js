import './App.css';
import Layout from './components/layout';
import Home from './components/pages/home.js'
import Contact from './components/pages/contact.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: async() => ({
      home: await fetch('./components/pages/home.js')
    }),
    children:
    [
      {
        path: "projects",
        element: <Home></Home>,
        loader: async() => ({
          home: await fetch('./components/pages/home.js')
        }),
        children: [
        {
          path: ":id",
          element: <Home></Home>,
          loader: async() => ({
            home: await fetch('./components/pages/home.js')
          }),
        }
      ]
      },
      {
        path: "contact",
        element: <Contact />,
        loader: async() => ({
          contact: await fetch('./components/pages/contact.js')
        }),
      }
    ]
  },
], {
  basename: "/react-portfolio/",
});

function App() {
  return (
    <div className="App">
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </div>
  );
}

export default App;
