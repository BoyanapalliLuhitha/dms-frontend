import { Link } from "react-router-dom";
import { FaHome, FaFolder, FaUser, FaSignOutAlt } from "react-icons/fa";

import { useUser } from "../context/UserContext";

function Sidebar() {
  const { logout } = useUser();

  return (
    <div className="w-64 h-screen bg-slate-900 text-white flex flex-col">
      <h2 className="text-2xl font-bold p-6 border-b border-slate-700">DMS</h2>

      <nav className="flex flex-col mt-6 gap-2">
        <Link
          to="/dashboard"
          className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700"
        >
          <FaHome />
          📁 My Drive
        </Link>

        <Link
          to="/profile"
          className="flex items-center gap-3 px-6 py-3 hover:bg-slate-700"
        >
          <FaUser />
          👤 Profile
        </Link>
      </nav>

      <button
        onClick={logout}
        className="mt-auto m-5 bg-red-500 hover:bg-red-600 rounded-lg py-2 flex items-center justify-center gap-2"
      >
        <FaSignOutAlt />
        🚪 Logout
      </button>
    </div>
  );
}

export default Sidebar;
