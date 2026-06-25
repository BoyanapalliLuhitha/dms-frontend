import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";

import Navbar from "../components/Navbar";

import UploadModal from "../components/UploadModal";

import DocumentCard from "../components/DocumentCard";

import { getDocuments } from "../services/documentService";

function Folder() {
  const { id } = useParams();

  const [documents, setDocuments] = useState([]);

  const [showUpload, setShowUpload] = useState(false);

  const loadDocuments = async () => {
    const data = await getDocuments(id);

    setDocuments(data);
  };

  useEffect(() => {
    loadDocuments();
  }, []);

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-8">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Documents</h1>

            <button
              onClick={() => setShowUpload(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg"
            >
              Upload
            </button>
          </div>

          {documents.length === 0 ? (
            <div className="flex justify-center items-center h-[70vh]">
              <div className="text-center">
                <h2 className="text-2xl font-bold">No Documents</h2>

                <p className="text-gray-500">Upload your first document.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-4 gap-6 mt-8">
              {documents.map((doc) => (
                <DocumentCard
                  key={doc.id}
                  document={doc}
                  reload={loadDocuments}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {showUpload && (
        <UploadModal
          folderId={id}
          reload={loadDocuments}
          close={() => setShowUpload(false)}
        />
      )}
    </div>
  );
}

export default Folder;
