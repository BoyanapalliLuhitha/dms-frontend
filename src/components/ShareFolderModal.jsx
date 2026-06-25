import { useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";
import { useUser } from "../context/UserContext";

function ShareFolderModal({ folder, close }) {
  const [email, setEmail] = useState("");

  const { user } = useUser();

  const share = async () => {
    await api.post("/folders/share", {
      folderId: folder.id,

      userEmail: user.email,

      sharedWithEmail: email,
    });

    toast.success("Folder Shared");

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 w-96">
        <h2 className="text-xl font-bold">Share Folder</h2>

        <input
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border w-full mt-5 p-3 rounded"
        />

        <div className="flex justify-end mt-6">
          <button
            onClick={share}
            className="bg-green-600 text-white px-6 py-2 rounded"
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
}

export default ShareFolderModal;
