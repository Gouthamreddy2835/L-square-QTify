import { useState } from "react";
import { Modal, Box, IconButton, TextField, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import styles from "./FeedbackModal.module.css";

const FeedbackModal = ({ isOpen, handleClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Clear and close
    setFormData({ fullName: "", email: "", subject: "", description: "" });
    handleClose();
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="feedback-modal-title"
      className={styles.modal}
    >
      <Box className={styles.modalContent}>
        <div className={styles.header}>
          <h3 id="feedback-modal-title" className={styles.title}>
            Feedback
          </h3>
          <IconButton onClick={handleClose} className={styles.closeBtn}>
            <CloseIcon />
          </IconButton>
        </div>

        <form onSubmit={handleSubmit} className={styles.form}>
          <TextField
            required
            fullWidth
            placeholder="Full name"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className={styles.inputField}
          />
          <TextField
            required
            fullWidth
            type="email"
            placeholder="Email ID"
            name="email"
            value={formData.email}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className={styles.inputField}
          />
          <TextField
            required
            fullWidth
            placeholder="Subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            variant="outlined"
            size="small"
            className={styles.inputField}
          />
          <TextField
            required
            fullWidth
            multiline
            rows={4}
            placeholder="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            variant="outlined"
            className={styles.inputField}
          />

          <div className={styles.btnContainer}>
            <Button
              type="submit"
              variant="contained"
              className={styles.submitBtn}
            >
              Submit Feedback
            </Button>
          </div>
        </form>
      </Box>
    </Modal>
  );
};

export default FeedbackModal;