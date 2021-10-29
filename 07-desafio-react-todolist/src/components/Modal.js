import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  borderRadius: "15px",
  textAlign: "center",
};

export default function BasicModal({ open, setOpen, deleter }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ marginBottom: "30px" }}
          >
            Are you sure you want to delete this item?
          </Typography>
          <Button onClick={() => deleter()} variant="outlined" color="error">
            Delete
          </Button>
          <Button
            onClick={() => setOpen(false)}
            variant="contained"
            sx={{
              backgroundColor: "#686e6b",
              ":hover": { backgroundColor: "#686e6b" },
              marginLeft: "15px",
            }}
            type="submit"
          >
            CANCEL
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
