export default function TabBar() {
    return (
      <div className="flex items-center justify-between bg-white rounded-2xl shadow-md p-4 mb-6">
        {/* Search */}
        <input
          type="text"
          placeholder="Search opportunities..."
          className="w-full max-w-md px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
  
        {/* User */}
        <div className="flex items-center gap-3 ml-6">
          <div className="text-right">
            <p className="font-semibold text-gray-800">User Name</p>
            <p className="text-sm text-gray-500">Applicant</p>
          </div>
  
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
            U
          </div>
        </div>
      </div>
    );
  }