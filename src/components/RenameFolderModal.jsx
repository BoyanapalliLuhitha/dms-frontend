import { useState } from "react";

import toast from "react-hot-toast";

import api from "../api/axios";

import { useUser } from "../context/UserContext";

function RenameFolderModal({
  folder,

  close,

  reload,
}) {
  const { user } = useUser();

  const [name, setName] = useState(folder.name);

  const save = async () => {
    await api.put(
      "/folders/update",

      {
        folderId: folder.id,

        newName: name,

        userEmail: user.email,
      },
    );

    toast.success("Folder Renamed");

    reload();

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 w-96">
        <h2 className="text-xl font-bold">Rename Folder</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border mt-5 p-3 rounded"
        />

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={close} className="bg-gray-300 px-5 py-2 rounded">
            Cancel
          </button>

          <button
            onClick={save}
            className="bg-blue-600 text-white px-5 py-2 rounded"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default RenameFolderModal;
