import { useState } from "react";
import styles from "../index.module.css";

const PageThree = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [resumeName, setResumeName] = useState<string>("");
  const [imageError, setImageError] = useState<string>("");
  const [resumeError, setResumeError] = useState<string>("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const validImageTypes = [
        "image/jpeg",
        "image/png",
        "image/jpg",
        "image/webp",
      ];
      if (!validImageTypes.includes(file.type)) {
        setImageError("Only image files (jpg, png, webp) are allowed.");
        setImagePreview(null);
        return;
      }

      setImageError("");
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const validResumeTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];

      if (!validResumeTypes.includes(file.type)) {
        setResumeError(
          "Only PDF or Word files (.pdf, .doc, .docx) are allowed."
        );
        setResumeName("");
        return;
      }

      setResumeError("");
      setResumeName(file.name);
    }
  };

  return (
    <>
      {/* Image Upload */}
      <div className={styles.formGroup}>
        <h3>Upload Profile Picture</h3>
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {imageError && <p style={{ color: "red" }}>{imageError}</p>}
        {imagePreview && (
          <div style={{ marginTop: "10px" }}>
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                width: 150,
                height: 150,
                objectFit: "cover",
                border: "1px solid #ccc",
              }}
            />
          </div>
        )}
      </div>

      <div className={styles.formGroup}>
        {/* Resume Upload */}
        <h3 style={{ marginTop: "2rem" }}>Upload Resume</h3>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
        />
        {resumeError && <p style={{ color: "red" }}>{resumeError}</p>}
        {resumeName && (
          <p style={{ marginTop: "10px" }}>Uploaded: {resumeName}</p>
        )}
      </div>
    </>
  );
};

export default PageThree;
