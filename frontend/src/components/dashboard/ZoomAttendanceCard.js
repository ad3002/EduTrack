import DashboardCard from '../DashboardCard';

const ZoomAttendanceCard = ({ darkMode }) => {
  const zoomMeetingUrl = "https://zoom.us/j/123456789";

  const attendees = [
    {
      id: 1,
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      status: "online",
      duration: "1h 20m"
    },
    {
      id: 2,
      name: "Alice Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alice",
      status: "online",
      duration: "1h 15m"
    },
    {
      id: 3,
      name: "Bob Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Bob",
      status: "offline",
      duration: "45m"
    },
    {
      id: 4,
      name: "Emma Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      status: "online",
      duration: "1h 30m"
    },
    {
      id: 5,
      name: "Michael Brown",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      status: "online",
      duration: "50m"
    },
    {
      id: 6,
      name: "Sarah Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      status: "offline",
      duration: "30m"
    },
    {
      id: 7,
      name: "James Miller",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
      status: "online",
      duration: "1h 10m"
    },
    {
      id: 8,
      name: "Lisa Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      status: "online",
      duration: "2h 05m"
    }
  ];

  return (
    <DashboardCard title="Zoom Attendance">
      <div className={`p-6 rounded-lg shadow-md ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header with Join button */}
        <div className="flex justify-between items-center mb-6">
          <h2 className={`text-xl font-semibold ${
            darkMode ? 'text-white' : 'text-gray-800'
          }`}>Zoom Attendance</h2>
          <a
            href={zoomMeetingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-lg font-medium transition-colors
              ${darkMode 
                ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                : 'bg-indigo-500 hover:bg-indigo-600 text-white'
              }`}
          >
            Join Meeting
          </a>
        </div>
        
        <div className={`space-y-4 h-[400px] overflow-y-auto pr-2
          scrollbar-thin ${darkMode 
            ? 'scrollbar-thumb-gray-600 scrollbar-track-gray-700' 
            : 'scrollbar-thumb-gray-300 scrollbar-track-gray-100'
          } scrollbar-thumb-rounded-full scrollbar-track-rounded-full`}>
          {attendees.map((attendee) => (
            <div key={attendee.id} 
              className={`flex items-center space-x-4 p-3 rounded-lg transition-colors ${
                darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
              }`}>
              <img
                src={attendee.avatar}
                alt={attendee.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-grow">
                <p className={`font-medium ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{attendee.name}</p>
                <p className={`text-sm ${
                  darkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>{attendee.duration}</p>
              </div>
              <div className={`w-3 h-3 rounded-full ${
                attendee.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </DashboardCard>
  );
};

export default ZoomAttendanceCard;