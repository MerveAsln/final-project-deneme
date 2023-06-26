import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import ProtectedRoute from "./components/ProtectedRoute";
import QuizComponent from "./views/QuizPage";
import QuestionsComponent from "./views/Questions";
import AskQuestionComponent from "./views/AskQuestion";
import ShowQuestion from "./views/ShowQuestion";
import WelcomePage from "./views/WelcomePage";
import Home from "./views/Home";
import About from "./views/About";
import MathComponent from "./views/Math";
import GeoComponent from "./views/Geo";
import Profile from "./views/Profile";
import ArticleApi from "./views/Article";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <Profile />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/article-api",
        element: (
          <ProtectedRoute>
            <ArticleApi />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/all-questions",
        element: <QuestionsComponent />,
      },
      {
        path: "/math",
        element: (
          <ProtectedRoute>
            <MathComponent />
          </ProtectedRoute>
        ),
      },
      {
        path: "/geometry",
        element: (
          <ProtectedRoute>
            <GeoComponent />
          </ProtectedRoute>
        ),
      },
      {
        path: "/ask-question",
        element: (
          <ProtectedRoute>
            <AskQuestionComponent />
          </ProtectedRoute>
        ),
      },
      {
        path: "/show-question",
        element: (
          <ProtectedRoute>
            <ShowQuestion />
          </ProtectedRoute>
        ),
      },
      {
        path: "/welcome",
        element: (
          <ProtectedRoute>
            <WelcomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/quiz",
        element: (
          <ProtectedRoute>
            <QuizComponent />
          </ProtectedRoute>
        ),
      },
    ],
    errorElement: <h2>errorr ....</h2>,
    // loader: <Loading />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-jw83fnojry4ka67l.us.auth0.com"
      clientId="kwbYbAC6AynN7pb4aavIXgZzX4hPzooG"
      redirectUri={window.location.origin}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </React.StrictMode>
);
