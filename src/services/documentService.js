import api from "../api/axios";

export const getDocuments = async (folderId) => {
  const response = await api.get(`/documents/folder/${folderId}`);

  return response.data;
};

export const uploadDocument = async (formData) => {
  const response = await api.post("/documents/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const downloadDocument = (id) => {
  window.open(
    `https://dms-backend-production-080e.up.railway.app/documents/download/${id}`,
  );
};

export const deleteDocument = async (id) => {
  const response = await api.delete(`/documents/delete/${id}`);

  return response.data;
};

export const shareDocument = async (documentId, sharedWithEmail) => {
  const response = await api.post(
    "/documents/share",

    {
      documentId,

      sharedWithEmail,
    },
  );

  return response.data;
};
