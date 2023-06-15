import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./screens/Home";
import Post from "./screens/Post";
import Base from "./screens/Base";

function App() {

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then((registration) => {
        console.log('ServiceWorker registered with scope:', registration.scope);
      }, (error) => {
        console.log('ServiceWorker registration failed:', error);
      });
    });
  }
  

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Base />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "article/:id",
          element: <Post />
        }
      ]
    },

  ]);

  return <RouterProvider router={router} />
}

export default App