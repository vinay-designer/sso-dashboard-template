import Sidebar from './Sidebar';
import TopNav from './TopNav';
import MainContent from './MainContent';

const DashboardLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <Sidebar user={{name: "Vinay"}}/>
      <TopNav/>
      
      <div className="pl-24 pt-16 flex">
        <div className="flex-1 pr-6">
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;