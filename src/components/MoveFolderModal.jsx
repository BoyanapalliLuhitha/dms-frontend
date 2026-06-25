import { useState } from "react";
import api from "../api/axios";
import toast from "react-hot-toast";
import { useUser } from "../context/UserContext";

function MoveFolderModal({ folder, close, reload }) {
  const [parent, setParent] = useState("");

  const { user } = useUser();

  const move = async () => {
    await api.put("/folders/move", {
      folderId: folder.id,

      newParentFolderId: Number(parent),

      userEmail: user.email,
    });

    toast.success("Folder moved");

    reload();

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-bold">Move Folder</h2>

        <input
          placeholder="Parent Folder ID"
          className="border mt-5 p-3 rounded w-full"
          value={parent}
          onChange={(e) => setParent(e.target.value)}
        />

        <button
          onClick={move}
          className="bg-blue-600 text-white mt-6 px-6 py-2 rounded"
        >
          Move
        </button>
      </div>
    </div>
  );
}

export default MoveFolderModal;
