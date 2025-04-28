import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, AlertTriangle, ArrowRight, ArrowUp, 
  BarChart3, Building, Cpu, FileText, 
  Grid, Info, Layers, MoreHorizontal,
  Server, Shield, Users, X, Plus
} from 'lucide-react';

const Dashboard = () => {
  const [showAlert, setShowAlert] = useState(true);
  
  // Color theme - Modern aesthetic palette
  const colors = {
    primary: '#7F9CE0',     // Cleaner blue with slight purple undertone
    secondary: '#E3DFF9',   // Very light lavender
    accent: '#A7D7CF',      // Mint green with blue undertone
    textPrimary: '#1A1A2E',  // Almost black with slight blue
    textSecondary: '#565674', // Muted blue-gray
    background: '#F0F2F8',   // Very light blue-gray
    backgroundAlt: '#E8EAF2', // Slightly darker background
    border: '#DFE3F3',      // Blue-tinted border
    cardBackground: '#FFFFFF', // Pure white for cards
    shadow: '0 10px 30px rgba(136, 155, 198, 0.08)' // Soft shadow
  };
  
  // Sample data
  const stats = [
    { 
      title: 'Total Users', 
      value: '3,854', 
      change: '+12.5%', 
      positive: true,
      icon: <Users className="w-4 h-4" />
    },
    { 
      title: 'Applications', 
      value: '156', 
      change: '+3.2%', 
      positive: true,
      icon: <Grid className="w-4 h-4" />,
      highlight: true
    },
    { 
      title: 'Facilities', 
      value: '48', 
      change: '+2.7%', 
      positive: true,
      icon: <Building className="w-4 h-4" />
    },
    { 
      title: 'Active Alerts', 
      value: '12', 
      change: '-4.3%', 
      positive: false,
      icon: <AlertTriangle className="w-4 h-4" />
    }
  ];

  const applications = [
    { 
      id: 1, 
      name: 'Atlas Project', 
      description: 'Customer management platform',
      users: 23,
      icon: <Layers className="w-4 h-4" />
    },
    { 
      id: 2, 
      name: 'Nova System', 
      description: 'Analytics dashboard',
      users: 16,
      icon: <BarChart3 className="w-4 h-4" />
    },
    { 
      id: 3, 
      name: 'Fusion Suite', 
      description: 'Inventory management',
      users: 32,
      icon: <Server className="w-4 h-4" />
    },
    { 
      id: 4, 
      name: 'Echo Platform', 
      description: 'Communication tools',
      users: 18,
      icon: <Activity className="w-4 h-4" />
    },
    { 
      id: 5, 
      name: 'Pulse Analytics', 
      description: 'Performance metrics',
      users: 11,
      icon: <Cpu className="w-4 h-4" />
    },
    { 
      id: 6, 
      name: 'Orbit Connect', 
      description: 'API integration tool',
      users: 7,
      icon: <Activity className="w-4 h-4" />
    }
  ];

  const alerts = [
    { 
      id: 1, 
      title: 'System Maintenance', 
      description: 'Scheduled downtime on May 3, 2025', 
      severity: 'warning',
      time: '3 days'
    },
    { 
      id: 2, 
      title: 'Resource Limit', 
      description: 'CPU usage exceeded 85% threshold', 
      severity: 'critical',
      time: '1 hour'
    },
    { 
      id: 3, 
      title: 'Security Update', 
      description: 'New security patch available', 
      severity: 'info',
      time: '1 day'
    }
  ];

  const activities = [
    { 
      user: { name: 'Alex Morgan', avatar: '/api/placeholder/32/32' },
      action: 'deployed a new version of',
      target: 'Atlas Project',
      time: '15m'
    },
    { 
      user: { name: 'Jordan Lee', avatar: '/api/placeholder/32/32' },
      action: 'updated facility details for',
      target: 'North Campus',
      time: '2h'
    },
    { 
      user: { name: 'Taylor Reed', avatar: '/api/placeholder/32/32' },
      action: 'resolved alert on',
      target: 'Fusion Suite',
      time: '5h'
    },
    { 
      user: { name: 'Casey Kim', avatar: '/api/placeholder/32/32' },
      action: 'added new users to',
      target: 'Nova System',
      time: '1d'
    }
  ];

  // Animation variants
  const alertVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto", 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25
      }
    },
    exit: { 
      height: 0, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Alert severity styles
  const getSeverityStyles = (severity) => {
    switch(severity) {
      case 'critical':
        return {
          borderColor: '#F27D7D', // Brighter red
          icon: <AlertTriangle className="w-4 h-4" style={{ color: '#F27D7D' }} />
        };
      case 'warning':
        return {
          borderColor: '#FFD166', // Brighter amber
          icon: <AlertTriangle className="w-4 h-4" style={{ color: '#FFD166' }} />
        };
      case 'info':
      default:
        return {
          borderColor: colors.primary,
          icon: <Info className="w-4 h-4" style={{ color: colors.primary }} />
        };
    }
  };

  // Sample chart data
  const chartData = [35, 55, 70, 85, 75, 90, 65, 75, 60, 70, 75, 90];

  return (
    <div className="p-10" style={{ backgroundColor: colors.background, fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif" }}>
      {/* Alert Banner */}
      <AnimatePresence>
        {showAlert && (
          <motion.div
            variants={alertVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="mb-8 overflow-hidden"
            style={{ 
              backgroundColor: colors.cardBackground, 
              borderRadius: '16px', 
              borderLeft: '3px solid #F27D7D', 
              boxShadow: colors.shadow
            }}
          >
            <div className="p-4 flex items-start">
              <div className="flex-shrink-0 mt-0.5">
                <AlertTriangle className="w-4 h-4" style={{ color: '#F27D7D' }} />
              </div>
              <div className="ml-3 flex-1">
                <h3 className="text-sm font-medium" style={{ color: colors.textPrimary }}>System Alert</h3>
                <div className="mt-1 text-sm" style={{ color: colors.textSecondary }}>
                  Database server load has reached 92%. Performance may be affected.
                </div>
              </div>
              <div className="ml-4 flex-shrink-0">
                <button
                  onClick={() => setShowAlert(false)}
                  className="hover:text-gray-600"
                  style={{ color: colors.textSecondary }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section - Moved to top */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.4 }}
            className="p-6"
            style={{ 
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.cardBackground,
              boxShadow: colors.shadow,
              borderRadius: '16px'
            }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 rounded-full" 
                       style={{ 
                         backgroundColor: stat.highlight ? `${colors.primary}15` : colors.backgroundAlt,
                         color: stat.highlight ? colors.primary : colors.textSecondary
                       }}>
                    {stat.icon}
                  </div>
                  <span className="text-xs font-medium" style={{ color: colors.textSecondary, letterSpacing: '0.3px' }}>
                    {stat.title}
                  </span>
                </div>
                
                <div className="flex items-center text-xs rounded-full px-2 py-0.5" 
                     style={{ 
                       backgroundColor: stat.positive ? `${colors.accent}20` : 'rgba(242, 125, 125, 0.2)',
                       color: stat.positive ? '#3A9E8C' : '#E05252'
                     }}>
                  {stat.positive ? 
                    <ArrowUp className="w-3 h-3 mr-1" /> : 
                    <ArrowUp className="w-3 h-3 mr-1 transform rotate-180" />
                  }
                  {stat.change}
                </div>
              </div>
              
              <div className="mt-4">
                <span className="text-2xl font-semibold" style={{ 
                  color: stat.highlight ? colors.primary : colors.textPrimary,
                  letterSpacing: '-0.5px'
                }}>
                  {stat.value}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Welcome Section */}
  
      
      {/* APPLICATIONS SECTION - CENTRALIZED AND HIGHLIGHTED */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-12 overflow-hidden"
        style={{ 
          borderRadius: '20px',
          backgroundColor: colors.cardBackground,
          boxShadow: colors.shadow
        }}
      >
        {/* Header Banner */}
        <div className="p-7" style={{ borderBottom: `1px solid ${colors.border}` }}>
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="p-3 rounded-full mr-4" 
                   style={{ 
                     background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)` 
                   }}>
                <Grid className="w-5 h-5" style={{ color: colors.primary }} />
              </div>
              <div>
                <h2 className="text-xl font-semibold tracking-tight" 
                    style={{ color: colors.textPrimary, letterSpacing: '-0.5px' }}>
                  My Applications
                </h2>
                <p className="text-sm mt-1" style={{ color: colors.textSecondary }}>
                  You have access to {applications.length} applications
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center rounded-full px-4 py-2 text-xs font-medium"
                style={{ 
                  background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)`,
                  color: colors.primary
                }}
              >
                <Plus className="w-3.5 h-3.5 mr-1.5" />
                Add New
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center text-xs font-medium"
                style={{ color: colors.primary }}
              >
                View All 
                <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </div>
        
        {/* Application Grid */}
        <div className="p-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, index) => (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3, duration: 0.4 }}
                whileHover={{ 
                  y: -4, 
                  boxShadow: "0 14px 28px rgba(127, 156, 224, 0.15)",
                  backgroundColor: index < 3 ? `${colors.primary}04` : colors.cardBackground
                }}
                className="p-6 cursor-pointer h-full"
                style={{ 
                  borderRadius: '16px',
                  backgroundColor: index < 3 ? `${colors.primary}05` : colors.cardBackground,
                  border: `1px solid ${index < 3 ? colors.primary + '30' : colors.border}`,
                  boxShadow: index < 3 ? '0 8px 20px rgba(127, 156, 224, 0.1)' : '0 4px 12px rgba(127, 156, 224, 0.05)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2.5 rounded-full" 
                         style={{ 
                           background: index < 3 ? 
                             `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)` : 
                             colors.backgroundAlt,
                           color: index < 3 ? colors.primary : colors.textSecondary
                         }}>
                      {app.icon}
                    </div>
                    <h3 className="text-base font-semibold" 
                        style={{ 
                          color: index < 3 ? colors.primary : colors.textPrimary,
                          letterSpacing: '-0.3px'
                        }}>
                      {app.name}
                    </h3>
                  </div>
                  <button style={{ color: colors.textSecondary }}>
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </div>
                
                <p className="text-sm mb-5 leading-relaxed" style={{ color: colors.textSecondary }}>
                  {app.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs px-2 py-1 rounded-full"
                       style={{ backgroundColor: colors.backgroundAlt, color: colors.textSecondary }}>
                    <Users className="w-3 h-3 mr-1.5" />
                    <span>{app.users} users</span>
                  </div>
                  {index < 3 && (
                    <div className="w-7 h-7 rounded-full flex items-center justify-center"
                         style={{ 
                           background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)` 
                         }}>
                      <ArrowRight className="w-3.5 h-3.5" style={{ color: colors.primary }} />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content Grid - Alerts and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Recent Alerts */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="p-7"
          style={{ 
            borderRadius: '20px',
            backgroundColor: colors.cardBackground,
            boxShadow: colors.shadow
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-3" 
                   style={{ background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)` }}>
                <AlertTriangle className="w-3.5 h-3.5" style={{ color: colors.primary }} />
              </div>
              <h2 className="text-lg font-semibold tracking-tight" 
                  style={{ color: colors.textPrimary, letterSpacing: '-0.5px' }}>
                Recent Alerts
              </h2>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium" 
                  style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
              {alerts.length} active
            </span>
          </div>
          
          <div className="space-y-4">
            {alerts.map((alert) => {
              const styles = getSeverityStyles(alert.severity);
              
              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-xl"
                  style={{ 
                    backgroundColor: colors.backgroundAlt,
                    borderLeft: `3px solid ${styles.borderColor}`
                  }}
                >
                  <div className="flex">
                    <div className="flex-shrink-0">
                      {styles.icon}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium" 
                          style={{ color: colors.textPrimary }}>
                        {alert.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed" 
                         style={{ color: colors.textSecondary }}>
                        {alert.description}
                      </p>
                      <p className="mt-2 text-xs" 
                         style={{ color: `${colors.textSecondary}90` }}>
                        {alert.time} ago
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className="mt-6 w-full flex items-center justify-center px-4 py-2.5 text-xs font-medium rounded-full"
            style={{ 
              background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)`,
              color: colors.primary
            }}
          >
            View All Alerts
          </motion.button>
        </motion.div>

        {/* Recent Activity */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="p-7"
          style={{ 
            borderRadius: '20px',
            backgroundColor: colors.cardBackground,
            boxShadow: colors.shadow
          }}
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <div className="p-2 rounded-full mr-3" 
                   style={{ background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)` }}>
                <Activity className="w-3.5 h-3.5" style={{ color: colors.primary }} />
              </div>
              <h2 className="text-lg font-semibold tracking-tight" 
                  style={{ color: colors.textPrimary, letterSpacing: '-0.5px' }}>
                Activity
              </h2>
            </div>
            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="text-xs px-2.5 py-1 rounded-full font-medium"
              style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}
            >
              View All
            </motion.button>
          </div>
          
          <div className="space-y-5">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                className="flex items-start space-x-3 pb-3"
                style={{ borderBottom: index < activities.length - 1 ? `1px solid ${colors.border}` : 'none' }}
              >
                <div className="w-8 h-8 rounded-full overflow-hidden shadow-sm" 
                     style={{ border: index === 0 ? `1px solid ${colors.primary}30` : 'none' }}>
                  <img 
                    src={activity.user.avatar} 
                    alt={activity.user.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-xs leading-relaxed">
                    <span style={{ color: colors.primary, fontWeight: 600 }}>{activity.user.name}</span>
                    <span style={{ color: colors.textSecondary }}> {activity.action} </span>
                    <span style={{ color: colors.textPrimary, fontWeight: 600 }}>{activity.target}</span>
                  </p>
                  <p className="text-xs mt-0.5 px-1.5 py-0.5 rounded-full inline-block"
                     style={{ 
                       backgroundColor: colors.backgroundAlt,
                       color: colors.textSecondary
                     }}>
                    {activity.time}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* User Activity Chart */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-12 p-7"
        style={{ 
          borderRadius: '20px',
          backgroundColor: colors.cardBackground,
          boxShadow: colors.shadow
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center">
            <div className="p-2 rounded-full mr-3" 
                 style={{ background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)` }}>
              <BarChart3 className="w-3.5 h-3.5" style={{ color: colors.primary }} />
            </div>
            <h2 className="text-lg font-semibold tracking-tight" 
                style={{ color: colors.textPrimary, letterSpacing: '-0.5px' }}>
              User Activity
            </h2>
          </div>
          <div className="flex space-x-3">
            <div className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium" 
                  style={{ backgroundColor: `${colors.primary}15`, color: colors.primary }}>
              Today
            </div>
          </div>
        </div>
        
        <div className="relative h-48">
          <div className="absolute inset-x-0 bottom-0 h-40">
            <div className="h-full w-full flex items-end justify-between space-x-1.5">
              {chartData.map((value, index) => (
                <motion.div
                  key={index}
                  className="flex-1 relative"
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ 
                    duration: 1,
                    delay: index * 0.05,
                    ease: "easeOut"
                  }}
                >
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 rounded-t-lg"
                    style={{ 
                      background: index % 3 === 0 ? 
                        `linear-gradient(to top, ${colors.primary}, ${colors.primary}90)` : 
                        (index % 3 === 1 ? 
                          `linear-gradient(to top, ${colors.secondary}, ${colors.secondary}90)` : 
                          `linear-gradient(to top, ${colors.primary}60, ${colors.primary}40)`),
                      opacity: index % 2 === 0 ? 0.95 : 0.7
                    }}
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ 
                      duration: 1.2,
                      delay: index * 0.05,
                      ease: "easeOut"
                    }}
                  />
                </motion.div>
              ))}
            </div>
            
            {/* X-axis labels */}
            <div className="flex justify-between mt-4 text-xs" style={{ color: colors.textSecondary }}>
              {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month, i) => (
                <div key={i} className="flex-1 text-center">{month}</div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {[
          { icon: <FileText className="w-4 h-4" />, title: "Documents", count: 128 },
          { icon: <Users className="w-4 h-4" />, title: "Team", count: 42 },
          { icon: <Building className="w-4 h-4" />, title: "Facilities", count: 16 },
          { icon: <Shield className="w-4 h-4" />, title: "Security", count: 8 }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index + 0.4, duration: 0.4 }}
            whileHover={{ y: -3, boxShadow: '0 12px 24px rgba(127, 156, 224, 0.12)' }}
            whileTap={{ scale: 0.98 }}
            className="p-5 cursor-pointer"
            style={{ 
              borderRadius: '16px',
              backgroundColor: colors.cardBackground,
              boxShadow: colors.shadow,
              transition: 'all 0.3s ease'
            }}
          >
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-full" 
                   style={{ 
                     background: `linear-gradient(135deg, ${colors.primary}20, ${colors.primary}30)`,
                     color: colors.primary 
                   }}>
                {item.icon}
              </div>
              <div>
                <h3 className="text-xs font-medium" 
                    style={{ color: colors.textSecondary, letterSpacing: '0.3px' }}>
                  {item.title}
                </h3>
                <p className="text-xl font-semibold mt-1" 
                   style={{ color: colors.textPrimary, letterSpacing: '-0.5px' }}>
                  {item.count}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;