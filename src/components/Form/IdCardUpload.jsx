import React from "react";
import { Alert, Button } from "@mui/joy";

function IdCardUpload({ setImg, img }) {
  const handleChange = (e) => {
    const image = e.target.files[0];
    setImg(image);
  };

  return (
    <div
      style={{
        marginTop: "1rem",
        display: "flex",

        justifyContent: "center",
        alignItems: "stretch",
      }}
    >
      <Alert
        color={img === null ? "warning" : "success"}
        style={{ borderRadius: "1rem 0 0 1rem" }}
      >
        Upload your college ID card
      </Alert>

      <Button
        variant="solid"
        component="label"
        style={{ borderRadius: "0 1rem 1rem 0" }}
      >
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          onChange={handleChange}
          type="file"
        />
      </Button>
    </div>
  );
}

export default IdCardUpload;
