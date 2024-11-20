import DashboardCard from '../DashboardCard';

const ChatActivityCard = ({ darkMode }) => {
  const chatData = [
    { day: 'Mon', messages: 45, height: '45%' },
    { day: 'Tue', messages: 52, height: '52%' },
    { day: 'Wed', messages: 38, height: '38%' },
    { day: 'Thu', messages: 65, height: '65%' },
    { day: 'Fri', messages: 48, height: '48%' },
    { day: 'Sat', messages: 25, height: '25%' },
    { day: 'Sun', messages: 30, height: '30%' }
  ];

  const stats = {
    totalMessages: 303,
    activeUsers: 15,
    avgResponseTime: '5 min'
  };

  const recentMessages = [
    { id: 1, user: 'Alice Smith', message: 'Has anyone completed the homework?', time: '5m ago' },
    { id: 2, user: 'Bob Johnson', message: 'Yes, I can help you with that', time: '10m ago' },
    { id: 3, user: 'Emma Wilson', message: 'The deadline is tomorrow', time: '15m ago' },
  ];

  return (
    <DashboardCard title="Chat Activity">
      <div className={`p-6 ${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
        {/* Custom Chart */}
        <div className="h-48 mb-6">
          <div className="h-full flex items-end justify-between gap-2">
            {chatData.map((item) => (
              <div key={item.day} className="flex flex-col items-center flex-1">
                <div 
                  style={{ height: item.height }}
                  className={`w-full rounded-t-lg transition-all duration-300 ${
                    darkMode ? 'bg-indigo-600' : 'bg-indigo-500'
                  }`}
                />
                <span className={`text-xs mt-2 ${
                  darkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {item.day}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <p className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {stats.totalMessages}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Messages
            </p>
          </div>
          <div className="text-center">
            <p className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {stats.activeUsers}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Active Users
            </p>
          </div>
          <div className="text-center">
            <p className={`text-2xl font-bold ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
              {stats.avgResponseTime}
            </p>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Avg Response
            </p>
          </div>
        </div>

        {/* Recent Messages */}
        <div className={`space-y-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          <h3 className="font-semibold mb-2">Recent Messages</h3>
          {recentMessages.map((msg) => (
            <div key={msg.id} className={`p-2 rounded ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
            }`}>
              <div className="flex justify-between items-start">
                <span className="font-medium">{msg.user}</span>
                <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {msg.time}
                </span>
              </div>
              <p className={`text-sm mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {msg.message}
              </p>
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
};

export default ChatActivityCard;