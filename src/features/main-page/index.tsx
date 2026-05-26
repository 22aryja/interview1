import Sidebar from "./sidebar";
import Topbar from "./topbar";
import AnalyticsPage from "./analytics-page";

const MainPage = () => {
  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#F0F2F5]">
      <Topbar />

      <div className="flex flex-1 min-w-0">
        <Sidebar />
        <AnalyticsPage />
      </div>
    </div>
  );
};

export default MainPage;
