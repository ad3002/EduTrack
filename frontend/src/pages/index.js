import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import StudentPerformanceCard from '../components/dashboard/StudentPerformanceCard';
import ZoomAttendanceCard from '../components/dashboard/ZoomAttendanceCard';
import ChatActivityCard from '../components/dashboard/ChatActivityCard';
import LeaderboardCard from '../components/dashboard/LeaderboardCard';
import RecentActivityCard from '../components/dashboard/RecentActivityCard';
import QuickActionsCard from '../components/dashboard/QuickActionsCard';

const Home = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'
    }`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="container mx-auto px-4 py-8">
        <h1 className={`text-3xl font-bold mb-8 ${
          darkMode ? 'text-white' : 'text-gray-900'
        }`}>EduTrack Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <StudentPerformanceCard darkMode={darkMode} />
          <ZoomAttendanceCard darkMode={darkMode} />
          <ChatActivityCard darkMode={darkMode} />
          <LeaderboardCard darkMode={darkMode} />
          <RecentActivityCard darkMode={darkMode} />
          <QuickActionsCard darkMode={darkMode} />
        </div>
      </main>
    </div>
  );
};

export default Home;