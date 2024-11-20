
import DashboardCard from '../DashboardCard';

const LeaderboardCard = () => (
  <DashboardCard title="Student Leaderboard">
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-medium">Top Students</h3>
        <select className="text-sm border rounded p-1">
          <option>Overall Score</option>
          <option>Attendance</option>
          <option>Participation</option>
        </select>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <span>Student 1</span>
          <span className="font-medium">95 pts</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <span>Student 2</span>
          <span className="font-medium">88 pts</span>
        </div>
        <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
          <span>Student 3</span>
          <span className="font-medium">82 pts</span>
        </div>
      </div>
    </div>
  </DashboardCard>
);

export default LeaderboardCard;