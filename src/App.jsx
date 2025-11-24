import { useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Preloader from "../src/components/Pre";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cursor from "../src/components/Cursor";
import Layout from "./pages/Layout";
import ArchiveProjects from "./pages/ArchiveProjects";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";
import DonationPage from "./pages/DonationForAliAkbar";
import "./App.css";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  const hostname = window.location.hostname;

  let content;
  if (hostname.startsWith('donate.')) {
    content = <DonationPage />;
  } else {
    content = <Layout />;
  } 
  return <div>{content}</div>;

 
}

export default App;
