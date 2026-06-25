import { useUser } from "../context/UserContext";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { FaUserCircle } from "react-icons/fa";

function Profile() {
  const { user } = useUser();

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="flex justify-center mt-16">
          <div className="bg-white rounded-xl shadow w-[500px] p-10">
            <div className="flex justify-center">
              <FaUserCircle className="text-8xl text-blue-600" />
            </div>

            <h2 className="text-center text-3xl font-bold mt-5">{user.name}</h2>

            <div className="mt-8 space-y-4">
              <div>
                <p className="text-gray-500">Name</p>

                <p className="font-semibold">{user.name}</p>
              </div>

              <div>
                <p className="text-gray-500">Email</p>

                <p className="font-semibold">{user.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
