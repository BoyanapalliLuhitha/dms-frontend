import { useState } from "react";
import toast from "react-hot-toast";
import { createFolder } from "../services/folderService";
import { useUser } from "../context/UserContext";

function CreateFolderModal({ closeModal, refreshFolders }) {
  const { user } = useUser();

  const [folderName, setFolderName] = useState("");

  const create = async () => {
    if (!folderName.trim()) {
      toast.error("Folder name required");

      return;
    }

    try {
      await createFolder(folderName, null, user.email);

      toast.success("Folder Created");

      refreshFolders();

      closeModal();
    } catch {
      toast.error("Unable to create folder");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl w-96">
        <h2 className="text-xl font-bold mb-5">Create Folder</h2>

        <input
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          className="w-full border rounded-lg p-3"
          placeholder="Folder Name"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={closeModal}
            className="px-5 py-2 rounded bg-gray-300"
          >
            Cancel
          </button>

          <button
            onClick={create}
            className="px-5 py-2 rounded bg-blue-600 text-white"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateFolderModal;
