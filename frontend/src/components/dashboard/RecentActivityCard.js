
import DashboardCard from '../DashboardCard';

const RecentActivityCard = () => (
  <DashboardCard title="Recent Activity">
    <div className="space-y-2">
      <div className="text-sm text-gray-600">
        <p>• Latest lecture: Advanced Topics (2h ago)</p>
        <p>• 25 students attended</p>
        <p>• 45 chat messages</p>
      </div>
    </div>
  </DashboardCard>
);

export default RecentActivityCard;