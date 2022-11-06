import React from "react";
import { Alert, Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

function IdCardUpload({ setImg, img }) {
  const handleChange = (e) => {
    const image = e.target.files[0];
    setImg(image);
  };

  return (
    <Stack direction="row" alignItems="center" justifyContent="center">
      <Alert severity={img === null ? "warning" : "success"}>
        upload your college ID card photo
      </Alert>

      <Button variant="contained" component="label">
        Upload
        <input
          hidden
          accept="image/*"
          multiple
          onChange={handleChange}
          type="file"
        />
      </Button>
    </Stack>
  );
}

export default IdCardUpload;
