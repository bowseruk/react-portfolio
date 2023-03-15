import './App.css';
import Layout from './components/layout';
import Home from './components/pages/home.js'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // loader: rootLoader,
    // children: [
    //   {
    //     path: "events/:id",
    //     element: <Event />,
    //     loader: eventLoader,
    //   },
    // ],
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
