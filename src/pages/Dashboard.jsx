import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";

import Sidebar from "../components/Sidebar";

import FolderCard from "../components/FolderCard";

import CreateFolderModal from "../components/CreateFolderModal";

import { getFolders } from "../services/folderService";

import { useUser } from "../context/UserContext";

function Dashboard() {
  const { user } = useUser();

  const [folders, setFolders] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const loadFolders = async () => {
    const data = await getFolders(user.email);

    setFolders(data);
  };

  useEffect(() => {
    loadFolders();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">My Folders</h1>

            <button
              onClick={() => setShowModal(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              + New Folder
            </button>
          </div>

          {folders.length === 0 ? (
            <div className="h-[70vh] flex justify-center items-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold">
                  📂 No folders found Create your first folder to start
                  uploading documents.[ + New Folder]
                </h2>

                <p className="text-gray-500 mt-2">
                  Click "New Folder" to create one.
                </p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-6 mt-8">
              {folders.map((folder) => (
                <FolderCard key={folder.id} folder={folder} />
              ))}
            </div>
          )}
        </div>
      </div>

      {showModal && (
        <CreateFolderModal
          closeModal={() => setShowModal(false)}
          refreshFolders={loadFolders}
        />
      )}
    </div>
  );
}

export default Dashboard;
