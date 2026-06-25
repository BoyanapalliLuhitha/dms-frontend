import { FaFolderOpen } from "react-icons/fa";

function EmptyState({
  title,

  subtitle,

  button,

  onClick,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-[70vh]">
      <FaFolderOpen className="text-8xl text-gray-300" />

      <h2 className="text-3xl font-bold mt-5">{title}</h2>

      <p className="text-gray-500 mt-2">{subtitle}</p>

      {button && (
        <button
          onClick={onClick}
          className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
        >
          {button}
        </button>
      )}
    </div>
  );
}

export default EmptyState;
