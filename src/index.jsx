import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import Home from './Home/Home';
import Reviews from './Reviews/Reviews';
import Articles from './Articles/Articles';
import Movies from './Movies/Movies';
import Menu from './Menu/Menu';
import MovieList from './MovieList/MovieList';
import Movie from './Movie/Movie';
import { createBrowserRouter, Outlet, RouterProvider, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="container">
      <Menu />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/reviews",
        element: <Reviews />
      },
      {
        path: "/articles",
        element: <Articles />
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:id",
            element: <Movie />
          }
        ]

      }
    ]
  }
])

createRoot(
  document.querySelector('#app'),
).render(<RouterProvider router={router} />);
