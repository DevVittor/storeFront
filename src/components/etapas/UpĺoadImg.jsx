import { useState } from "react";
import styles from "./UploadImg.module.css";

export default function UploadImg() {
  const [images, setImages] = useState([]);

  function handleImage(e) {
    const files = e.target.files;
    const imageUrls = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setImages((prevImages) => prevImages.concat(imageUrls));
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageGrid}>
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index}`}
            className={styles.image}
          />
        ))}
      </div>
      <div className={styles.upload}>
        <input type="file" name="" id="" multiple onChange={handleImage} />
        <label htmlFor="">Upload Images</label>
      </div>
    </div>
  );
}
