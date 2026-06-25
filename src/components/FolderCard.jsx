import { FaFolder } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function FolderCard({ folder }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/folder/${folder.id}`)}
      className="cursor-pointer bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center hover:scale-105"
    >
      <FaFolder className="text-yellow-400 text-6xl" />

      <h2 className="mt-4 font-semibold text-lg">{folder.name}</h2>
    </div>
  );
}

export default FolderCard;
