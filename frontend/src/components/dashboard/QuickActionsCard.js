
import DashboardCard from '../DashboardCard';

const QuickActionsCard = () => (
  <DashboardCard title="Quick Actions">
    <div className="grid grid-cols-2 gap-2">
      <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600 text-sm">
        Import Data
      </button>
      <button className="bg-purple-500 text-white p-2 rounded hover:bg-purple-600 text-sm">
        Export Report
      </button>
      <button className="bg-yellow-500 text-white p-2 rounded hover:bg-yellow-600 text-sm">
        Update Scores
      </button>
      <button className="bg-red-500 text-white p-2 rounded hover:bg-red-600 text-sm">
        Settings
      </button>
    </div>
  </DashboardCard>
);

export default QuickActionsCard;