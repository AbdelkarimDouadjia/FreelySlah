import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "FreelySlah");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/dnqjxgbyp/image/upload",
      data
    );
    const { url } = res.data;
    return url;
  } catch (err) {   
    console.error(err);
  }
};

export default upload;
