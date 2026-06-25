function ConfirmDeleteModal({
  title,

  message,

  confirm,

  close,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <div className="bg-white rounded-xl p-8 w-96">
        <h2 className="text-2xl font-bold">{title}</h2>

        <p className="text-gray-500 mt-3">{message}</p>

        <div className="flex justify-end gap-3 mt-8">
          <button onClick={close} className="px-5 py-2 bg-gray-300 rounded">
            Cancel
          </button>

          <button
            onClick={confirm}
            className="px-5 py-2 bg-red-600 text-white rounded"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDeleteModal;
