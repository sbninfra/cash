import imageCompressor from "@/helper/imageResize";
import FileUpload from "@/helper/upload";

const { PlusIcon, X } = require("lucide-react");
const { useRef, useState } = require("react");

export function BannerImage({ id, name, bannerImage, setBannerImage }) {
  const inputRef = useRef(null);
  const [errorMessage, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleInputImage() {
    inputRef.current.click();
  }

  async function handleFileChange(e) {
    setLoading(true);
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        const compressedImage = await imageCompressor({ file });
        if (!compressedImage) return;
        formData.append("file", compressedImage);
        formData.append("name", name);
        formData.append("userId", id);

        const res = await fetch("/api/uploadFile", {
          method: "POST",
          body: formData,
        });

        const data = await res.json();

        if (res.ok && data.url) {
          console.log(data);
          setBannerImage(data.url);
        } else {
          setError(data.error || "Upload failed");
        }
      } catch (err) {
        console.error(err);
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <div className="flex flex-col justify-start items-start gap-1.5">
      <p>Banner Image</p>

      {bannerImage ? (
        <div className=" relative">
          <img
            src={bannerImage}
            className=" h-32 object-contain w-auto"
            alt=""
          />
          <X
            className=" bg-white rounded-full border text-red-600 border-red-600 absolute top-1 right-1 cursor-pointer"
            onClick={() => setBannerImage("")}
          />
        </div>
      ) : (
        <div
          className=" size-24 border-2 border-dashed rounded-md flex items-center justify-center cursor-pointer"
          onClick={handleInputImage}
        >
          <input
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
          {loading ? <p>Loading...</p> : <PlusIcon />}
        </div>
      )}
      {errorMessage && <p className=" text-red-500">{errorMessage}</p>}
    </div>
  );
}
