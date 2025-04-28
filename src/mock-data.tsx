import {
  Layout, Users, Building, Server,
  User,
  Megaphone,
} from 'lucide-react';

export const dashboardData = {
  alerts: [
    // { id: 1, title: "System Maintenance", description: "Scheduled maintenance on November 15th. All systems will be offline for approximately 2 hours starting at 2:00 AM UTC. Please ensure all critical operations are completed before this time.", type: "warning", time: "3 hours ago" },
    // { id: 2, title: "New Feature Released", description: "Check out the latest updates in the dashboard", type: "info", time: "1 day ago" },
    // { id: 3, title: "Security Update", description: "Please update your password", type: "critical", time: "Just now" },
    // { id: 4, title: "Multiple Active Sessions", description: "There are 3 active sessions for your account", type: "warning", time: "5 min ago" }
  ],
  announcements: [
    { id: 1, title: "Annual Company Meeting", description: "Save the date for our yearly gathering", date: "Dec 15, 2024" },
    { id: 2, title: "Holiday Schedule", description: "Updated holiday calendar for the year", date: "Nov 20, 2024" },
    { id: 3, title: "System Upgrade Complete", description: "All services have been successfully updated", date: "Today" }
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
  quickActions: [
    { title: "Add Application", icon: <Layout />, color: "gray" },
    { title: "Add User", icon: <User />, color: "gray" },
    { title: "Add Facility Code", icon: <Building />, color: "gray" },
    { title: "Quick Announcement", icon: <Megaphone />, color: "gray" }
  ],
  todos: [
    { id: 1, title: "Review new application", date: "Nov 1 at 6:00 pm", icon: <Layout />, priority: "high" },
    { id: 2, title: "Approve user access", date: "Nov 2 at 6:00 pm", icon: <Users />, priority: "medium" },
    { id: 3, title: "Check system logs", date: "Nov 3 at 6:00 pm", icon: <Server />, priority: "high" },
    { id: 4, title: "Update facility codes", date: "Nov 4 at 6:00 pm", icon: <Building />, priority: "low" }
  ],
  userActivity: {
    daily: [120, 145, 132, 158, 142, 115, 160],
    weekly: [840, 925, 890, 1050, 980],
    hourly: [42, 35, 28, 45, 60, 78, 92, 85, 65, 75, 82, 78],
    topUsers: [
      { name: "Sarah Johnson", activity: 87, department: "Marketing" },
      { name: "David Chen", activity: 76, department: "Engineering" },
      { name: "Amanda Peters", activity: 72, department: "HR" }
    ],
    deviceStats: [
      { name: "Desktop", value: 45 },
      { name: "Mobile", value: 32 },
      { name: "Tablet", value: 23 }
    ],
    locations: [
      { name: "North America", value: 58 },
      { name: "Europe", value: 24 },
      { name: "Asia", value: 12 },
      { name: "Other", value: 6 }
    ]
  }
};

// Enhanced application list with images
export const applications = [
  {
    id: 1,
    name: 'Care & Medication - Vanguard',
    imageUrl: 'https://images.unsplash.com/photo-1614101062781-09a8dfb90dce?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwd2FyZHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Comprehensive healthcare management platform',
    lastLogin: '2 hours ago',
    status: 'Available'
  },
  {
    id: 2,
    name: 'Self-Service Portal',
    imageUrl: 'https://images.unsplash.com/photo-1648224394449-d10dbff84b8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvc3BpdGFsJTIwd2FyZHxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Intuitive user-driven service interface',
    lastLogin: 'Yesterday',
    status: 'Available'
  },
  {
    id: 3,
    name: 'UAM',
    imageUrl: 'https://images.unsplash.com/photo-1570053999725-75f373783fa7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvc3BpdGFsJTIwc3ltYm9sc3xlbnwwfHwwfHx8MA%3D%3D',
    description: 'Advanced user authentication system',
    lastLogin: '3 days ago',
    status: 'Available'
  },
  {
    id: 4,
    name: 'Patient Management System',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvc3BpdGFsJTIwc3lzdGVtfGVufDB8fDB8fHww',
    description: 'Complete patient records and care tracking',
    lastLogin: '1 week ago',
    status: 'Maintenance'
  },
  {
    id: 5,
    name: 'Pharmacy Module',
    imageUrl: 'https://images.unsplash.com/photo-1593354338446-3e42e6630399?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9zcGl0YWwlMjBzeW1ib2xzfGVufDB8fDB8fHww',
    description: 'Medication management and inventory',
    lastLogin: '2 weeks ago',
    status: 'Available'
  },
  {
    id: 6,
    name: 'Billing & Insurance',
    imageUrl: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJpbGxpbmd8ZW58MHx8MHx8fDA%3D',
    description: 'Financial management and insurance processing',
    lastLogin: '5 days ago',
    status: 'Degraded'
  },
  {
    id: 7,
    name: 'Staff Scheduling',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1704478482722-9ce6c4b6b33e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RhZmYlMjBzY2hlZHVsaW5nfGVufDB8fDB8fHww',
    description: 'Employee scheduling and time management',
    lastLogin: '1 day ago',
    status: 'Available'
  },
  {
    id: 8,
    name: 'Laboratory Results',
    imageUrl: 'https://images.unsplash.com/photo-1614308456595-a59d48697ea8?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGFib3JhdG9yeXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Test results and laboratory management',
    lastLogin: '4 days ago',
    status: 'Available'
  },
  {
    id: 9,
    name: 'Imaging & Radiology',
    imageUrl: 'https://images.unsplash.com/photo-1589723321499-f2aa0e7a4024?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJhZGlvbG9neXxlbnwwfHwwfHx8MA%3D%3D',
    description: 'Medical imaging and radiology results',
    lastLogin: '3 days ago',
    status: 'Available'
  },
  {
    id: 10,
    name: 'Emergency Management',
    imageUrl: 'https://images.unsplash.com/photo-1587745639185-3ce74468a022?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZW1lcmdlbmN5fGVufDB8fDB8fHww',
    description: 'Emergency department operations',
    lastLogin: '2 days ago',
    status: 'Available'
  },
  {
    id: 11,
    name: 'Telemedicine Portal',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGVsZW1lZGljaW5lfGVufDB8fDB8fHww',
    description: 'Virtual consultation platform',
    lastLogin: '1 day ago',
    status: 'Available'
  },
  {
    id: 12,
    name: 'Analytics Dashboard',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YW5hbHl0aWNzfGVufDB8fDB8fHww',
    description: 'Comprehensive analytics and reporting',
    lastLogin: '6 days ago',
    status: 'Available'
  }
];