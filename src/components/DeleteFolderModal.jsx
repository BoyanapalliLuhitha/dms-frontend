import toast from "react-hot-toast";

import { deleteFolder } from "../services/folderService";

import { useUser } from "../context/UserContext";

function DeleteFolderModal({
  folderId,

  close,

  reload,
}) {
  const { user } = useUser();

  const remove = async () => {
    await deleteFolder(
      folderId,

      user.email,
    );

    toast.success("Folder Deleted");

    reload();

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8">
        <h2 className="text-xl font-bold">Delete Folder?</h2>

        <p className="mt-3 text-gray-500">This cannot be undone.</p>

        <div className="flex justify-end gap-3 mt-6">
          <button onClick={close} className="px-4 py-2 rounded bg-gray-300">
            Cancel
          </button>

          <button
            onClick={remove}
            className="px-4 py-2 rounded bg-red-600 text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteFolderModal;
