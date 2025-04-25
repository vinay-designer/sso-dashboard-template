import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Home,
  CreditCard,
  Clock,
  Users,
  Mail,
  Settings,
  Calendar,
  MessageSquare,
  Bell,
  ChevronLeft,
  ChevronRight,
  User
} from 'lucide-react';

// Dashboard data similar to previous examples
const dashboardData = {
  bankBalance: 143624,
  uncategorizedTransactions: 12,
  employeesWorking: 7,
  weeklyCardSpending: 3287.49,
  newClients: 54,
  invoicesOverdue: 6,
  recentEmails: [
    {
      id: 1,
      name: "Hannah Morgan",
      subject: "Meeting scheduled",
      time: "1:24 PM",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      id: 2,
      name: "Megan Clark",
      subject: "Update on marketing campaign",
      time: "12:32 PM",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      id: 3,
      name: "Brandon Williams",
      subject: "Designly 2.0 is about to launch",
      time: "Yesterday at 8:57 PM",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      id: 4,
      name: "Reid Smith",
      subject: "My friend Julie loves Dappr!",
      time: "Yesterday at 8:49 PM",
      avatar: "https://randomuser.me/api/portraits/women/50.jpg"
    }
  ],
  revenueData: [
    { date: 'Feb 14', revenue: 12000 },
    { date: 'Feb 15', revenue: 15000 },
    { date: 'Feb 16', revenue: 13000 },
    { date: 'Feb 17', revenue: 16000 },
    { date: 'Feb 18', revenue: 15500 },
    { date: 'Feb 19', revenue: 17000 },
    { date: 'Feb 20', revenue: 16500 }
  ],
  todoList: [
    { id: 1, task: "Run payroll", time: "Mar 4 at 6:00 pm" },
    { id: 2, task: "Review time off request", time: "Mar 7 at 5:00 pm" },
    { id: 3, task: "Sign board resolution", time: "Mar 12 at 6:00 pm" },
    { id: 4, task: "Finish onboarding Tony", time: "Mar 12 at 6:00 pm" }
  ]
};

const FloatingCenteredDashboard = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="flex bg-[#f0f2f5] min-h-screen relative">
      {/* Floating Centered Sidebar */}
      <motion.div 
        animate={{ 
          width: isSidebarExpanded ? 250 : 80,
          top: '50%',
          translateY: '-50%'
        }}
        className="fixed left-6 z-50 bg-white border border-gray-200 rounded-2xl shadow-xl flex flex-col"
        style={{
          transform: 'translateY(-50%)',
          height: '90vh',
          maxHeight: 700
        }}
      >
        <div className="p-6 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isSidebarExpanded ? 'block' : 'hidden'}`}>dappr</h1>
          <button 
            onClick={toggleSidebar} 
            className="ml-auto bg-gray-100 rounded-full p-2"
          >
            {isSidebarExpanded ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>
        
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {[
            { icon: <Home />, label: "Home" },
            { icon: <CreditCard />, label: "Finances" },
            { icon: <Clock />, label: "Time Tracking" },
            { icon: <Users />, label: "Team" },
            { icon: <Mail />, label: "Emails" },
            { icon: <Settings />, label: "Settings" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              className="flex items-center p-3 rounded-lg hover:bg-gray-100 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              {item.icon}
              {isSidebarExpanded && <span className="ml-3">{item.label}</span>}
            </motion.div>
          ))}
        </nav>
        
        <div className="p-4 border-t">
          <div className="flex items-center">
            <img 
              src="https://randomuser.me/api/portraits/men/46.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-full mr-3"
            />
            {isSidebarExpanded && (
              <div>
                <div className="font-semibold">James Miller</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      {/* Main Content - Adjusted for Sidebar */}
      <div className="flex-1 ml-[calc(250px+1.5rem)] p-8 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Good morning, James!</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Calendar />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Bell />
            </button>
            <img 
              src="https://randomuser.me/api/portraits/men/46.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Rest of the content remains the same as previous dashboard */}
        {/* Quick Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: <CreditCard />, value: `$${dashboardData.bankBalance.toLocaleString()}`, label: "Your bank balance" },
            { icon: <Clock />, value: dashboardData.uncategorizedTransactions, label: "Uncategorized transactions" },
            { icon: <Users />, value: dashboardData.employeesWorking, label: "Employees working today" },
            { icon: <CreditCard />, value: `$${dashboardData.weeklyCardSpending.toLocaleString()}`, label: "This week's card spending" }
          ].map((stat, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div className="text-gray-500">{stat.icon}</div>
                <button className="text-gray-400 hover:text-gray-600">
                  <Settings size={16} />
                </button>
              </div>
              <div className="mt-3">
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of the content from previous dashboard */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">New Clients</h2>
                <span className="text-green-600">+18.7%</span>
              </div>
              <div className="text-3xl font-bold">{dashboardData.newClients}</div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Invoices Overdue</h2>
                <span className="text-red-600">+2.7%</span>
              </div>
              <div className="text-3xl font-bold">{dashboardData.invoicesOverdue}</div>
            </div>
          </div>

          {/* Middle Column - Revenue Chart */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Revenue</h2>
              <span className="text-gray-500">Last 7 days VS prior week</span>
            </div>
            {/* Placeholder for chart - in a real app, you'd use a charting library */}
            <div className="h-64 flex items-center justify-center text-gray-400">
              Revenue Chart Placeholder
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Formation Status */}
            <div className="bg-black text-white p-4 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Formation status</h2>
              <div className="bg-gray-800 rounded-full h-2 mb-4">
                <div className="bg-white h-2 rounded-full w-1/2"></div>
              </div>
              <div className="text-sm mb-4">In progress</div>
              <div className="text-sm text-gray-400 mb-4">Estimated processing 4-5 business days</div>
              <button className="w-full bg-white text-black py-2 rounded-lg">
                View status
              </button>
            </div>

            {/* To-Do List */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Your to-do list</h2>
              {dashboardData.todoList.map((todo) => (
                <div key={todo.id} className="flex justify-between items-center py-3 border-b last:border-b-0">
                  <div>
                    <div className="font-medium">{todo.task}</div>
                    <div className="text-sm text-gray-500">{todo.time}</div>
                  </div>
                  <input type="checkbox" className="form-checkbox" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Emails */}
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Recent emails</h2>
          {dashboardData.recentEmails.map((email) => (
            <div 
              key={email.id} 
              className="flex items-center justify-between py-3 border-b last:border-b-0 hover:bg-gray-50"
            >
              <div className="flex items-center">
                <img 
                  src={email.avatar} 
                  alt={email.name} 
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <div className="font-medium">{email.name}</div>
                  <div className="text-sm text-gray-500">{email.subject}</div>
                </div>
              </div>
              <div className="text-sm text-gray-500">{email.time}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloatingCenteredDashboard;