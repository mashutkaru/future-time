import { Routes, Route } from "react-router-dom";
import Layout from "@/Layout";
import Participants from "@/pages/Participants";
import About from "@/pages/About";

export default function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout currentPageName="Participants">
            <Participants />
          </Layout>
        }
      />
      <Route
        path="/Participants"
        element={
          <Layout currentPageName="Participants">
            <Participants />
          </Layout>
        }
      />
      <Route
        path="/About"
        element={
          <Layout currentPageName="About">
            <About />
          </Layout>
        }
      />
    </Routes>
  );
}
