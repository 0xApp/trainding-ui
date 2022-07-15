import "./App.css";

import Login from "./components/login/Login";
import SearchPage from "./components/searchpage/search";
import DashBoard from "./components/dashboard/dashboard";
import DashBoardV2 from "./components/dashboard/DashboardV2";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppProviders from "./providers";
import SidebarContainer from "./components/layout/SidebarContainer";

function App() {
  return (
    <AppProviders>
      <Router>
        {/* <Navbar /> */}
        <SidebarContainer>
          <Routes>
            <Route path="/search" element={<SearchPage />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/dashboard-v2" element={<DashBoardV2 />} />
            <Route path="/" element={<Login />} />
            {/* <Route path="/" children={<SidebarContainer />} /> */}
          </Routes>
        </SidebarContainer>
      </Router>
    </AppProviders>
  );
}

export default App;
