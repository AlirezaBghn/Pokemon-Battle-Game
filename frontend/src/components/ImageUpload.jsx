import { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [file, setFile] = useState(null);
  const [uploadUrl, setUploadUrl] = useState("");
  const [message, setMessage] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) {
      setMessage("No file selected.");
      return;
    }

    const formData = new FormData();
    // IMPORTANT: The field name must match what the backend expects ("image")
    formData.append("image", file);

    try {
      const res = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setUploadUrl(res.data.url);
      setMessage("Upload successful!");
    } catch (error) {
      console.error(error);
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-900 border border-green-500 rounded shadow-xl text-lime-400">
      <h2 className="text-2xl font-bold mb-4 text-center drop-shadow-[0_0_10px_rgba(0,255,0,0.8)]">
        Upload an Image
      </h2>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="mb-4 p-2 bg-gray-800 border border-green-500 text-lime-400 rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-500 text-black px-4 py-2 rounded font-bold"
        >
          Upload Image
        </button>
      </form>
      {message && <p className="mt-4 text-center">{message}</p>}
      {uploadUrl && (
        <div className="mt-4">
          <p>
            Image URL:{" "}
            <a
              href={uploadUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-400 underline"
            >
              {uploadUrl}
            </a>
          </p>
          <img
            src={uploadUrl}
            alt="Uploaded"
            className="mt-2 max-w-full rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
