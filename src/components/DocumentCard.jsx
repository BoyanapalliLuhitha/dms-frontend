import {
  FaFilePdf,
  FaFileWord,
  FaFileImage,
  FaFileAlt,
  FaDownload,
  FaTrash,
  FaShareAlt,
} from "react-icons/fa";

import {
  downloadDocument,
  deleteDocument,
  shareDocument,
} from "../services/documentService";

import toast from "react-hot-toast";

function DocumentCard({
  document,

  reload,
}) {
  const getIcon = () => {
    const type = document.contentType;

    if (type.includes("pdf"))
      return <FaFilePdf className="text-red-500 text-5xl" />;

    if (type.includes("word"))
      return <FaFileWord className="text-blue-500 text-5xl" />;

    if (type.includes("image"))
      return <FaFileImage className="text-green-500 text-5xl" />;

    return <FaFileAlt className="text-gray-500 text-5xl" />;
  };

  const remove = async () => {
    await deleteDocument(document.id);

    toast.success("Deleted");

    reload();
  };

  const share = async () => {
    const email = prompt("Share with Email");

    if (!email) return;

    await shareDocument(
      document.id,

      email,
    );

    toast.success("Shared");
  };

  return (
    <div className="bg-white rounded-xl shadow p-5 hover:shadow-lg">
      <div className="flex justify-center">{getIcon()}</div>

      <h2 className="mt-4 text-center font-semibold">{document.fileName}</h2>

      <p className="text-center text-gray-500">
        {(document.fileSize / 1024).toFixed(2)} KB
      </p>

      <div className="flex justify-center gap-4 mt-5">
        <button onClick={() => downloadDocument(document.id)}>
          <FaDownload />
        </button>

        <button onClick={share}>
          <FaShareAlt />
        </button>

        <button onClick={remove}>
          <FaTrash className="text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default DocumentCard;
