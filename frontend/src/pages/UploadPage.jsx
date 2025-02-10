import ImageUpload from "../components/ImageUpload";

function UploadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-lime-400 mb-6 drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] text-center">
        Upload Page
      </h1>
      <ImageUpload />
    </div>
  );
}

export default UploadPage;
