
const DashboardCard = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow-md p-6 col-span-1">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    {children}
  </div>
);

export default DashboardCard;