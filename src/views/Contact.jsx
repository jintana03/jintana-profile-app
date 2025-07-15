import React from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";

function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        backgroundColor: "#0D0D0D",
        color: "white",
        minHeight: "60vh",
        padding: "80px 10%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: { xs: "flex-start", md: "center" },
        justifyContent: "space-between",
        gap: 4,
        boxShadow: "0px 0px 30px #CCCCFF",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 6,
        }}
      >
        {/* LEFT COLUMN */}
        <Box sx={{ flex: 1 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            LET’S CONNECT
          </Typography>

          <Typography sx={{ mb: 1, color: "#ccc", fontSize: 18 }}>
            Say hello at{" "}
            <Box
              component="span"
              sx={{ textDecoration: "underline", color: "#CCCCFF" }}
            >
              jintana161246@gmail.com
            </Box>
          </Typography>

          <Typography sx={{ mb: 4, color: "#ccc", fontSize: 18 }}>
            For more info, here's my{" "}
            <Box
              component="span"
              sx={{ textDecoration: "underline", color: "#CCCCFF" }}
            >
              resume
            </Box>
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 8 }}>
            <IconButton
              sx={{ color: "#CCCCFF" }}
              href="https://th.linkedin.com/"
              target="_blank"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ backgroundColor: "black", color: "#CCCCFF" }}
              href="https://github.com/jintana03"
              target="_blank"
            >
              <GitHubIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "#CCCCFF" }}
              href="https://x.com/"
              target="_blank"
            >
              <XIcon fontSize="large" />
            </IconButton>
            <IconButton
              sx={{ color: "#CCCCFF" }}
              href="https://www.instagram.com/"
              target="_blank"
            >
              <InstagramIcon fontSize="large" />
            </IconButton>
          </Box>

          <Typography sx={{ color: "#999", fontSize: 14 }}>
            © 2025 Jintana Wongsaensri.
          </Typography>
        </Box>

        {/* RIGHT COLUMN - FORM */}
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            variant="filled"
            label="Name"
            sx={{
              mb: 2,
              bgcolor: "#111",
              input: { color: "#fff" },
              label: { color: "#bbb" },
              borderRadius: "20px",
              boxShadow: "0px 0px 30px #CCCCFF",
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Email"
            sx={{
              mb: 2,
              bgcolor: "#111",
              input: { color: "#fff" },
              label: { color: "#bbb" },
              borderRadius: "20px",
              boxShadow: "0px 0px 30px #CCCCFF",
            }}
          />
          <TextField
            fullWidth
            variant="filled"
            label="Subject"
            sx={{
              mb: 2,
              bgcolor: "#111",
              input: { color: "#fff" },
              label: { color: "#bbb" },
              borderRadius: "20px",
              boxShadow: "0px 0px 30px #CCCCFF",
            }}
          />
          <TextField
            fullWidth
            multiline
            minRows={4}
            variant="filled"
            label="Message"
            sx={{
              mb: 4,
              bgcolor: "#111",
              input: { color: "#fff" },
              label: { color: "#bbb" },
              borderRadius: "20px",
              boxShadow: "0px 0px 30px #CCCCFF",
            //   boxShadow: "0px 0px 30px #f79bd5",
            }}
          />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#CCCCFF",
              color: "#000",
              borderRadius: "999px",
              fontWeight: "bold",
              px: 5,
              py: 1.5,
              "&:hover": {
                bgcolor: "#CCCCFF",
                // bgcolor: "#DE3163",
              },
            }}
          >
            SUBMIT
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;