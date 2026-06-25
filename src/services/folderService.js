import api from "../api/axios";

export const getFolders = async (email) => {
  const response = await api.get(`/folders/user/${email}`);
  return response.data;
};

export const createFolder = async (name, parentFolderId, userEmail) => {
  const response = await api.post("/folders/create", {
    name,
    parentFolderId,
    userEmail,
  });

  return response.data;
};

export const deleteFolder = async (folderId, userEmail) => {
  const response = await api.delete("/folders/delete", {
    data: {
      folderId,
      userEmail,
    },
  });

  return response.data;
};
