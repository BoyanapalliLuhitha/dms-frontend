import { useState } from "react";

import toast from "react-hot-toast";

import { uploadDocument } from "../services/documentService";

function UploadModal({
  folderId,

  reload,

  close,
}) {
  const [file, setFile] = useState(null);

  const upload = async () => {
    if (!file) {
      toast.error("Choose File");

      return;
    }

    const formData = new FormData();

    formData.append(
      "file",

      file,
    );

    formData.append(
      "folderId",

      folderId,
    );

    await uploadDocument(formData);

    toast.success("Uploaded");

    reload();

    close();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold">Upload Document</h2>

        <input
          type="file"
          className="mt-5"
          onChange={(e) => setFile(e.target.files[0])}
        />

        <div className="flex justify-end gap-3 mt-8">
          <button onClick={close} className="px-4 py-2 bg-gray-300 rounded">
            Cancel
          </button>

          <button
            onClick={upload}
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadModal;
