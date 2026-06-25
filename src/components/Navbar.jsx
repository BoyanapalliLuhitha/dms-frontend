import { FaUserCircle } from "react-icons/fa";
import { useUser } from "../context/UserContext";

function Navbar() {
  const { user } = useUser();

  return (
    <div className="h-16 bg-white shadow flex items-center justify-between px-8">
      <h1 className="text-2xl font-bold text-blue-600">📁 My Drive</h1>

      <div className="flex items-center gap-3">
        <FaUserCircle className="text-3xl text-gray-600" />

        <div>
          <p className="font-semibold">{user?.name}</p>

          <p className="text-sm text-gray-500">{user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
