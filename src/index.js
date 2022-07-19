import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import { CookiesProvider } from "react-cookie";
import User from "./components/admin/Users/User";
const Post = React.lazy(() => import("./Post"));
const Main = React.lazy(() => import("./components/editor/Main"));
const Dashboard = React.lazy(() => import("./components/admin/Dashboard"));
const AdminPost = React.lazy(() =>
  import("./components/admin/Posts/AdminPost")
);
const Pages = React.lazy(() => import("./components/admin/Pages/Pages"));
const Comment = React.lazy(() => import("./components/admin/Comments/Comment"));
const Preview = React.lazy(() => import("./components/editor/Preview"));
const Media = React.lazy(() => import("./components/admin/Media/Media"));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CookiesProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/post/:id"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Post />
            </React.Suspense>
          }
        />
        <Route
          path="/edit"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Main />
            </React.Suspense>
          }
        />
        <Route
          path="/admin"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Dashboard />
            </React.Suspense>
          }
        />
        <Route
          path="/adminpost"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <AdminPost />
            </React.Suspense>
          }
        />
        <Route
          path="/page"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Pages />
            </React.Suspense>
          }
        />
        <Route
          path="/comment"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Comment />
            </React.Suspense>
          }
        />
        <Route
          path="/preview"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Preview />
            </React.Suspense>
          }
        />
        <Route
          path="/media"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <Media />
            </React.Suspense>
          }
        />
        <Route
          path="/user"
          element={
            <React.Suspense
              fallback={
                <div
                  style={{
                    width: "100%",
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Spinner animation="border" style={{ color: "#D05270" }} />
                </div>
              }
            >
              <User />
            </React.Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  </CookiesProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
