import DashboardCard from '../DashboardCard';

const students = [
  { id: 1, name: 'Alex K.', avatar: 'https://i.pravatar.cc/40?img=1' },
  { id: 2, name: 'Maria S.', avatar: 'https://i.pravatar.cc/40?img=2' },
  { id: 3, name: 'John D.', avatar: 'https://i.pravatar.cc/40?img=3' },
  { id: 4, name: 'Sarah M.', avatar: 'https://i.pravatar.cc/40?img=4' },
  { id: 5, name: 'Mike R.', avatar: 'https://i.pravatar.cc/40?img=5' },
];

const StudentPerformanceCard = () => (
  <DashboardCard title="Student Performance">
    <div className="space-y-4">
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {students.map((student) => (
          <div key={student.id} className="flex flex-col items-center min-w-max">
            <img
              src={student.avatar}
              alt={student.name}
              className="w-10 h-10 rounded-full border-2 border-gray-200"
            />
            <span className="text-xs text-gray-600 mt-1">{student.name}</span>
          </div>
        ))}
      </div>
      <p className="text-gray-600">Connect Google Sheets to view student performance data</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Connect Google Sheets
      </button>
    </div>
  </DashboardCard>
);

export default StudentPerformanceCard;