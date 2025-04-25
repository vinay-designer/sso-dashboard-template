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
  User,
  AlertCircle,
  Megaphone,
  FileText,
  UserCheck,
  Layout,
  Share2,
  TrendingUp,
  Activity,
  ShieldAlert,
  Lock,
  Zap,
  BarChart3,
  Key,
  Server,
  Clipboard,
  Layers,
  AlertTriangle,
  Eye,
  Building,
  CheckCircle2,
  History,
  Clock3,
  RefreshCw,
  BarChart4,
  PieChart,
  Map,
  Network,
  Award,
  CircleCheck,
  Info
} from 'lucide-react';

// Enhanced dashboard data with more information
const dashboardData = {
  alerts: [
    {
      id: 1,
      title: "System Maintenance",
      description: "Scheduled maintenance on November 15th",
      type: "warning",
      time: "3 hours ago"
    },
    {
      id: 2,
      title: "New Feature Released",
      description: "Check out the latest updates in the dashboard",
      type: "info",
      time: "1 day ago"
    },
    {
      id: 3,
      title: "Security Update",
      description: "Please update your password",
      type: "critical",
      time: "Just now"
    },
    {
      id: 4,
      title: "Multiple Active Sessions",
      description: "There are 3 active sessions for your account",
      type: "warning",
      time: "5 min ago"
    }
  ],
  announcements: [
    {
      id: 1,
      title: "Annual Company Meeting",
      description: "Save the date for our yearly gathering",
      date: "Dec 15, 2024"
    },
    {
      id: 2,
      title: "Holiday Schedule",
      description: "Updated holiday calendar for the year",
      date: "Nov 20, 2024"
    },
    {
      id: 3,
      title: "System Upgrade Complete",
      description: "All services have been successfully updated to the latest version",
      date: "Today"
    }
  ],
  systemStatus: {
    overall: "Healthy",
    uptime: "99.8%",
    lastIncident: "Oct 10, 2024",
    services: [
      { name: "Authentication Service", status: "Operational", uptime: "99.9%" },
      { name: "Database Service", status: "Operational", uptime: "99.7%" },
      { name: "Storage Service", status: "Degraded", uptime: "95.3%" },
      { name: "API Gateway", status: "Operational", uptime: "99.8%" }
    ]
  },
  sessionData: {
    currentSessions: 3,
    currentSessionId: "sess_2824afxd2",
    lastActivity: "2 minutes ago",
    sessionTimeout: "28 minutes remaining",
    location: "San Francisco, CA",
    browser: "Chrome 120.0.0",
    device: "MacBook Pro",
    ipAddress: "192.168.1.xxx"
  },
  securityStatus: {
    lastPasswordChange: "45 days ago",
    passwordExpiry: "45 days remaining",
    failedLogins: 0,
    twoFactorEnabled: true,
    recentSuspiciousActivity: false,
    securityScore: 92
  },
  facilityData: {
    assigned: ["HQ-001", "LAB-020", "RND-101"],
    total: 42,
    facilities: [
      { code: "HQ-001", name: "Headquarters", active: true, apps: 24 },
      { code: "LAB-020", name: "Research Lab", active: true, apps: 15 },
      { code: "RND-101", name: "R&D Center", active: true, apps: 18 }
    ]
  },
  totalApplications: 157,
  totalUsers: 1254,
  totalFacilityCodes: 42,
  activeUsers: 867,
  recentAddedApps: 12,
  myApplications: [
    {
      id: 1,
      name: "Application Portal",
      description: "Manage your applications",
      icon: <Layout className="text-blue-500" />,
      lastLogin: "2 hours ago",
      color: "from-blue-500 to-blue-700",
      status: "Available"
    },
    {
      id: 2,
      name: "HR Management",
      description: "Employee resources and tools",
      icon: <Users className="text-green-500" />,
      lastLogin: "Yesterday",
      color: "from-green-500 to-green-700",
      status: "Available"
    },
    {
      id: 3,
      name: "Financial System",
      description: "Accounting and finance tools",
      icon: <CreditCard className="text-purple-500" />,
      lastLogin: "3 days ago",
      color: "from-purple-500 to-purple-700",
      status: "Available"
    },
    {
      id: 4,
      name: "Document Management",
      description: "Store and manage documents",
      icon: <FileText className="text-amber-500" />,
      lastLogin: "1 week ago",
      color: "from-amber-500 to-amber-700",
      status: "Maintenance"
    },
    {
      id: 5,
      name: "Inventory System",
      description: "Track inventory and assets",
      icon: <Clipboard className="text-indigo-500" />,
      lastLogin: "2 weeks ago",
      color: "from-indigo-500 to-indigo-700",
      status: "Available"
    },
    {
      id: 6,
      name: "Team Collaboration",
      description: "Communication and project tools",
      icon: <MessageSquare className="text-red-500" />,
      lastLogin: "5 days ago",
      color: "from-red-500 to-red-700",
      status: "Degraded"
    }
  ],
  recentActivity: [
    { id: 1, action: "Logged into Financial System", time: "2 hours ago", icon: <CreditCard /> },
    { id: 2, action: "Changed password", time: "Yesterday, 3:45 PM", icon: <Lock /> },
    { id: 3, action: "Updated profile information", time: "Oct 28, 2:20 PM", icon: <User /> },
    { id: 4, action: "Accessed Document Management", time: "Oct 27, 10:15 AM", icon: <FileText /> },
    { id: 5, action: "Enabled 2FA authentication", time: "Oct 25, 9:30 AM", icon: <ShieldAlert /> }
  ],
  auditLogs: [
    { id: 1, event: "User Profile Updated", user: "James Miller", date: "Oct 28, 2024", status: "SUCCESS" },
    { id: 2, event: "Password Changed", user: "James Miller", date: "Oct 27, 2024", status: "SUCCESS" },
    { id: 3, event: "Failed Login Attempt", user: "Unknown", date: "Oct 25, 2024", status: "FAILURE" },
    { id: 4, event: "Document Accessed", user: "Sarah Johnson", date: "Oct 24, 2024", status: "SUCCESS" },
    { id: 5, event: "New User Created", user: "Admin", date: "Oct 22, 2024", status: "SUCCESS" }
  ],
  userActivity: {
    daily: [120, 145, 132, 158, 142, 115, 160],
    weekly: [850, 940, 915, 978, 1020, 980, 925],
    topUsers: [
      { name: "Sarah Johnson", activity: 87, department: "Marketing" },
      { name: "David Chen", activity: 76, department: "Engineering" },
      { name: "Amanda Peters", activity: 72, department: "HR" },
      { name: "Robert Davis", activity: 65, department: "Finance" }
    ],
    deviceDistribution: [
      { device: "Desktop", percentage: 68 },
      { device: "Mobile", percentage: 24 },
      { device: "Tablet", percentage: 8 }
    ]
  }
};

const FloatingCenteredDashboard = () => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  const getAlertIcon = (type) => {
    switch(type) {
      case 'warning': return <AlertCircle className="text-yellow-600" />;
      case 'critical': return <AlertTriangle className="text-red-600" />;
      default: return <Info className="text-blue-600" />;
    }
  };

  return (
    <div className="flex bg-[#f0f2f5] min-h-screen relative">
      {/* Sidebar */}
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
        {/* Sidebar content */}
        <div className="p-6 flex justify-between items-center">
          <h1 className={`text-2xl font-bold ${isSidebarExpanded ? 'block' : 'hidden'}`}>ECCare suite</h1>
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
            { icon: <Layout />, label: "Applications" },
            { icon: <Users />, label: "Users" },
            { icon: <Building />, label: "Facilities" },
            { icon: <Server />, label: "System" },
            { icon: <BarChart3 />, label: "Reports" },
            { icon: <Shield />, label: "Security" },
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

      {/* Main Content */}
      <div 
        className="flex-1 p-8 space-y-6" 
        style={{ 
          marginLeft: isSidebarExpanded ? 'calc(250px + 1.5rem)' : 'calc(80px + 1.5rem)' 
        }}
      >
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
            <div className="relative">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <Bell />
              </button>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">4</span>
            </div>
            <img 
              src="https://randomuser.me/api/portraits/men/46.jpg" 
              alt="Profile" 
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

      

        {/* Session Info Banner */}
        <motion.div 
          className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-md p-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <Key className="text-white" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Current Session</h3>
              <p className="text-blue-100">ID: {dashboardData.sessionData.currentSessionId}</p>
            </div>
          </div>
          <div className="flex space-x-12">
            <div>
              <p className="text-blue-100 text-sm">Last Activity</p>
              <p className="font-medium">{dashboardData.sessionData.lastActivity}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Session Timeout</p>
              <p className="font-medium">{dashboardData.sessionData.sessionTimeout}</p>
            </div>
            <div>
              <p className="text-blue-100 text-sm">Active Sessions</p>
              <p className="font-medium">{dashboardData.sessionData.currentSessions}</p>
            </div>
          </div>
          <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-medium transition">
            Manage Sessions
          </button>
        </motion.div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-4 gap-6">
          {[
            { 
              icon: <FileText className="text-blue-600" />, 
              value: dashboardData.totalApplications, 
              label: "Total Applications",
              change: "+15%",
              changeColor: "text-green-500",
              graphColor: "stroke-blue-500",
              graphData: [10, 15, 7, 12, 9, 14, 11]
            },
            { 
              icon: <UserCheck className="text-green-600" />, 
              value: dashboardData.totalUsers, 
              label: "Total Users",
              change: "+23%",
              changeColor: "text-green-500",
              graphColor: "stroke-green-500",
              graphData: [8, 12, 9, 15, 11, 13, 10]
            },
            { 
              icon: <Building className="text-purple-600" />, 
              value: dashboardData.totalFacilityCodes, 
              label: "Facility Codes",
              change: "-5%",
              changeColor: "text-red-500",
              graphColor: "stroke-purple-500",
              graphData: [6, 5, 7, 4, 6, 5, 3]
            },
            { 
              icon: <Activity className="text-amber-600" />, 
              value: dashboardData.activeUsers, 
              label: "Active Users",
              change: "+8%",
              changeColor: "text-green-500",
              graphColor: "stroke-amber-500",
              graphData: [12, 14, 11, 13, 16, 15, 17]
            }
          ].map((stat, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-2xl shadow-md p-5 border border-gray-100 relative overflow-hidden"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gray-100 rounded-xl">
                    {stat.icon}
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                </div>
                <div className={`flex items-center ${stat.changeColor}`}>
                  <span className="text-sm font-medium mr-1">{stat.change}</span>
                  {stat.change.startsWith('+') ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                    </svg>
                  )}
                </div>
              </div>
              
              {/* Subtle Graph */}
              <svg viewBox="0 0 100 30" className="w-full absolute bottom-0 left-0 opacity-30">
                <polyline
                  fill="none"
                  className={stat.graphColor}
                  strokeWidth="2"
                  points={stat.graphData.map((value, i) => `${i * 15},${30 - value}`).join(' ')}
                />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Alerts and Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Alerts Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Alerts</h3>
                <AlertCircle className="text-gray-500" size={20} />
              </div>
              <div className="space-y-4">
                {dashboardData.alerts.map((alert) => (
                  <motion.div 
                    key={alert.id} 
                    className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="pt-1">
                      {getAlertIcon(alert.type)}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">{alert.title}</div>
                      <div className="text-sm text-gray-600">{alert.description}</div>
                      <div className="text-xs text-gray-400 mt-1">{alert.time}</div>
                    </div>
                    <button className="text-gray-500 hover:text-gray-700">
                      <Settings size={18} />
                    </button>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                View All Alerts
              </button>
            </div>
          </div>

          {/* Announcements Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Announcements</h3>
                <Megaphone className="text-gray-500" size={20} />
              </div>
              <div className="space-y-4">
                {dashboardData.announcements.map((announcement) => (
                  <motion.div 
                    key={announcement.id} 
                    className="flex items-start space-x-4 p-4 rounded-xl border border-gray-100 hover:bg-gray-50 transition"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="pt-1">
                      <Megaphone className="text-gray-500" size={20} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium mb-1">{announcement.title}</div>
                      <div className="text-sm text-gray-600">{announcement.description}</div>
                    </div>
                    <span className="text-xs text-gray-500">{announcement.date}</span>
                  </motion.div>
                ))}
              </div>
              <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition">
                View All Announcements
              </button>
            </div>
          </div>
        </div>

        {/* System Status and Security Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* System Status */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">System Status</h3>
              <Server className="text-gray-500" size={20} />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-green-50 rounded-xl">
                <div className="flex items-center">
                  <CheckCircle2 className="text-green-500 mr-2" size={20} />
                  <span className="font-medium">Overall Status:</span>
                </div>
                <span className="font-medium text-green-600">{dashboardData.systemStatus.overall}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">System Uptime</span>
                <span className="font-medium">{dashboardData.systemStatus.uptime}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Last Incident</span>
                <span className="font-medium">{dashboardData.systemStatus.lastIncident}</span>
              </div>
              
              <div className="mt-4">
                <h4 className="font-medium mb-3">Service Status</h4>
                <div className="space-y-2">
                  {dashboardData.systemStatus.services.map((service, index) => (
                    <div key={index} className="flex justify-between items-center p-2 border-b border-gray-100">
                      <div className="flex items-center">
                        {service.status === "Operational" ? (
                          <CheckCircle2 className="text-green-500 mr-2" size={16} />
                        ) : (
                          <AlertCircle className="text-yellow-500 mr-2" size={16} />
                        )}
                        <span>{service.name}</span>
                      </div>
                      <div className="text-sm">
                        <span className={service.status === "Operational" ? "text-green-600" : "text-yellow-600"}>
                          {service.status}
                        </span>
                        <span className="text-gray-400 ml-2">({service.uptime})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Security Status */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Security Status</h3>
              <ShieldAlert className="text-gray-500" size={20} />
            </div>
            
            <div className="flex justify-center mb-6">
              <div className="relative w-32 h-32">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#E5E7EB"
                    strokeWidth="3"
                    strokeDasharray="100, 100"
                  />
                  <path
                    d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="3"
                    strokeDasharray={`${dashboardData.securityStatus.securityScore}, 100`}
                  />
                </svg>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-3xl font-bold text-indigo-600">{dashboardData.securityStatus.securityScore}</div>
                  <div className="text-xs text-gray-500">Security Score</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Password Expiry</span>
                <span className="font-medium">{dashboardData.securityStatus.passwordExpiry}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Last Password Change</span>
                <span className="font-medium">{dashboardData.securityStatus.lastPasswordChange}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Two-Factor Authentication</span>
                <span className={`font-medium ${dashboardData.securityStatus.twoFactorEnabled ? 'text-green-600' : 'text-red-600'}`}>
                  {dashboardData.securityStatus.twoFactorEnabled ? 'Enabled' : 'Disabled'}
                </span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Failed Login Attempts</span>
                <span className="font-medium">{dashboardData.securityStatus.failedLogins}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Suspicious Activity</span>
                <span className={`font-medium ${dashboardData.securityStatus.recentSuspiciousActivity ? 'text-red-600' : 'text-green-600'}`}>
                  {dashboardData.securityStatus.recentSuspiciousActivity ? 'Detected' : 'None'}
                </span>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-sm font-medium transition">
              Security Check-up
            </button>
          </div>
        </div>

        {/* Facility Information */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold">My Facilities</h3>
            <Building className="text-gray-500" size={20} />
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {dashboardData.facilityData.facilities.map((facility, index) => (
              <motion.div 
                key={index} 
                className="border border-gray-200 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <div className="p-2 bg-purple-100 rounded-lg mr-3">
                      <Building className="text-purple-600" size={18} />
                    </div>
                    <h4 className="font-semibold">{facility.code}</h4>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs ${facility.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                    {facility.active ? 'Active' : 'Inactive'}
                  </div>
                </div>
                
                <div className="mb-3">
                  <div className="text-sm text-gray-600 mb-1">Facility Name</div>
                  <div className="font-medium">{facility.name}</div>
                </div>
                
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <div className="text-gray-600">Available Apps</div>
                    <div className="font-medium">{facility.apps}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Last Access</div>
                    <div className="font-medium">Today</div>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-purple-50 hover:bg-purple-100 text-purple-700 py-2 rounded-lg text-sm font-medium transition">
                  View Details
                </button>
              </motion.div>
            ))}
          </div>
          
          <button className="w-full mt-6 text-purple-600 hover:text-purple-800 py-2 rounded-lg text-sm font-medium border border-purple-200 hover:border-purple-300 transition">
            Manage Facilities
          </button>
        </div>

        {/* Activity and Logs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <Activity className="text-gray-500" size={20} />
            </div>
            
            <div className="space-y-4">
              {dashboardData.recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{activity.action}</div>
                    <div className="text-sm text-gray-500">{activity.time}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition">
              View All Activity
            </button>
          </div>

          {/* Audit Logs */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Audit Logs</h3>
              <Clipboard className="text-gray-500" size={20} />
            </div>
            
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Event</th>
                    <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                    <th className="text-left py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="text-right py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.auditLogs.map((log, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-2 text-sm">{log.event}</td>
                      <td className="py-2 text-sm">{log.user}</td>
                      <td className="py-2 text-sm text-gray-600">{log.date}</td>
                      <td className="py-2 text-right">
                        <span className={`px-2 py-1 rounded-full text-xs ${
                          log.status === 'SUCCESS' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <button className="w-full mt-4 text-blue-600 hover:text-blue-800 text-sm font-medium transition">
              View All Logs
            </button>
          </div>
        </div>

        {/* My Applications Section */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">My Applications</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-2">
              <Share2 size={16} />
              <span>Manage</span>
            </button>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {dashboardData.myApplications.map((app) => (
              <motion.div 
                key={app.id} 
                className="border border-gray-200 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                whileHover={{ scale: 1.03 }}
              >
                <div className={`h-2 w-full bg-gradient-to-r ${app.color}`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="p-3 bg-gray-100 rounded-xl">
                      {app.icon}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full">
                        <Share2 size={18} />
                      </button>
                      <button className="text-gray-500 hover:text-gray-700 bg-gray-100 p-2 rounded-full">
                        <User size={18} />
                      </button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{app.name}</h3>
                    <p className="text-sm text-gray-600 mb-4">{app.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        Last login: {app.lastLogin}
                      </span>
                      <div className={`rounded-full px-3 py-1 text-xs ${
                        app.status === 'Available' 
                          ? 'bg-blue-50 text-blue-600' 
                          : app.status === 'Maintenance'
                            ? 'bg-amber-50 text-amber-600'
                            : 'bg-red-50 text-red-600'
                      }`}>
                        {app.status}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="w-full mt-6 border border-blue-200 hover:border-blue-300 text-blue-600 hover:text-blue-800 py-2 rounded-lg text-sm font-medium transition">
            View All Applications
          </button>
        </div>

        {/* User Activity Analytics */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold">User Activity Analytics</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-50 text-blue-600 px-3 py-1 rounded-lg text-sm font-medium">Daily</button>
              <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">Weekly</button>
              <button className="text-gray-500 hover:text-gray-700 px-3 py-1 rounded-lg text-sm font-medium">Monthly</button>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Activity Chart */}
            <div className="col-span-2 bg-white rounded-xl p-4 border border-gray-100">
              <h4 className="font-medium mb-4">Daily Active Users</h4>
              <div className="h-64 flex items-end space-x-2">
                {dashboardData.userActivity.daily.map((value, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div 
                      className="w-full bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-all"
                      style={{ height: `${(value / 160) * 100}%` }}
                    ></div>
                    <div className="text-xs text-gray-500 mt-1">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* User Device Distribution */}
            <div className="bg-white rounded-xl p-4 border border-gray-100">
              <h4 className="font-medium mb-4">Device Distribution</h4>
              <div className="space-y-4">
                {dashboardData.userActivity.deviceDistribution.map((device, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm">{device.device}</span>
                      <span className="text-sm text-gray-600">{device.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${device.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h4 className="font-medium mt-6 mb-3">Top Active Users</h4>
              <div className="space-y-3">
                {dashboardData.userActivity.topUsers.slice(0, 3).map((user, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-2">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="text-sm font-medium">{user.name}</div>
                        <div className="text-xs text-gray-500">{user.department}</div>
                      </div>
                    </div>
                    <div className="text-sm font-medium">{user.activity}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Recently Added Applications */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Recently Added Applications</h3>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
              {dashboardData.recentAddedApps} New
            </span>
          </div>
          
          <p className="text-indigo-100 mb-4">
            We've added {dashboardData.recentAddedApps} new applications to the platform in the last 30 days.
          </p>
          
          <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-medium hover:bg-indigo-50 transition">
            Explore New Applications
          </button>
        </div>
        
      </div>
    </div>
  );
};

// Helper component for Shield icon
const Shield = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
    </svg>
  );
};

export default FloatingCenteredDashboard;