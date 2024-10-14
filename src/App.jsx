import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import NavBar from "./Utilities/NavBar";
import HomePage from "./pages/home/HomePage";
import RegisterPage from "./pages/auth/RegisterPage";
import FullName_details from "./components/FullName_details";
import More_details from "./components/More_details";
import Privacy_details from "./components/Privacy_details";
import Show_details from "./components/Show_details";
import Confirm_details from "./components/Confirm_details";
import LoginPage from "./pages/auth/LoginPage";
import Footer from "./Utilities/Footer";
import PrivacyPolicy from "./pages/Terms&Coditions/PrivacyPolicy";
import TermsService from "./pages/Terms&Coditions/TermsService";
import CookiesPolicy from "./pages/Terms&Coditions/CookiesPolicy";
import Dashboard_Page from "./pages/dashboard/Dashboard_Page";
import Main_Dashboard from "./pages/dashboard/outlet/Main_Dashboard";
import Ads_Surf from "./pages/dashboard/ads/Ads_Surf";
import Ads_Window from "./pages/dashboard/ads/Ads_Window";
import Ads_Article from "./pages/dashboard/ads/Ads_Article";
import Offers from "./pages/dashboard/offers/Offers";
import Forget_Pass from "./pages/auth/Forget_Pass";
import AdvertisePage from "./pages/dashboard/advertise/AdvertisePage";
import ReferralsPage from "./pages/dashboard/referrals/ReferralsPage";
import ProfilePage from "./pages/dashboard/profile/ProfilePage";
import HistoryPage from "./pages/dashboard/history/HistoryPage";
import LeaderboardPage from "./pages/dashboard/leaderBoard/LeaderboardPage";

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMouseMove(e) {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    function disableRightClick(e) {
      e.preventDefault();
    }

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("contextmenu", disableRightClick);

    return (_) => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <div className="main">
      <div
        className="cursor"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      />

      <NavBar />

      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />}>
          <Route path="full_name" element={<FullName_details />} />
          <Route path="more_details" element={<More_details />} />
          <Route path="privacy_details" element={<Privacy_details />} />
          <Route path="show_details" element={<Show_details />} />
          <Route path="confirm_details" element={<Confirm_details />} />
        </Route>
        <Route path="/r/:refId" element={<RegisterPage />}>
          <Route path="full_name" element={<FullName_details />} />
          <Route path="more_details" element={<More_details />} />
          <Route path="privacy_details" element={<Privacy_details />} />
          <Route path="show_details" element={<Show_details />} />
          <Route path="confirm_details" element={<Confirm_details />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/login/forget_password" element={<Forget_Pass />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/service" element={<TermsService />} />
        <Route path="/cookies" element={<CookiesPolicy />} />

        <Route path="/dashboard" element={<Dashboard_Page />}>
          <Route index element={<Main_Dashboard />} />
          <Route path="/dashboard/offers" element={<Offers />} />
          <Route path="/dashboard/ads-surf" element={<Ads_Surf />} />
          <Route path="/dashboard/ads-active" element={<Ads_Window />} />
          <Route path="/dashboard/ads-article" element={<Ads_Article />} />
          <Route path="/dashboard/advertise" element={<AdvertisePage />} />
          <Route path="/dashboard/referrals" element={<ReferralsPage />} />
          <Route path="/dashboard/profile" element={<ProfilePage />} />
          <Route path="/dashboard/history" element={<HistoryPage />} />
          <Route
            path="/dashboard/affiliate-leaderboard"
            element={<LeaderboardPage />}
          />
        </Route>
        <Route path="*" element={<Dashboard_Page />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
