import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import MarketplacePage from "./pages/MarketplacePage.tsx";
import ConnectWalletPage from "./pages/ConnectWalletPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import RankingsPage from "./pages/RankingsPage.tsx";
import Root from "./pages/Root.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path="marketplace" element={<MarketplacePage />} />
      <Route path="rankings" element={<RankingsPage />} />
      <Route path="connectwallet" element={<ConnectWalletPage />} />
      <Route path="singup" element={<SignUpPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
