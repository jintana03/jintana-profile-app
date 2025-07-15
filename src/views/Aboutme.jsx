import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import jinny2 from "./../assets/jinny2.jpg";

function Aboutme() {
  return (
    <Box
      id="aboutme"
      sx={{
        backgroundColor: "#0D0D0D",
        color: "white",
        minHeight: "100vh",
        padding: "100px 10% 50px",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        gap: 6,
        boxShadow: "0px 0px 30px #CCCCFF",
        borderRadius: "20px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 6,
          backgroundColor: "#121212",
          borderRadius: "20px",
          boxShadow: "0px 0px 30px #CCCCFF",
          padding: "40px",
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        {/* Left Image */}
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            boxShadow: "0px 0px 30px #CCCCFF",
            borderRadius: "20px",
          }}
        >
          <img
            src={jinny2}
            alt="about me"
            style={{
              width: "100%",
              maxWidth: "600px", // ขยายภาพ
              borderRadius: "20px", // มน
            }}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            textAlign: "left",
          }}
        >
          <Typography variant="h3" sx={{ fontWeight: "bold", mb: 3 }}>
            ABOUT ME
          </Typography>

          <Typography variant="h6" sx={{ lineHeight: 1.8, mb: 3 }}>
            ดิฉันเป็นนักพัฒนาเว็บไซต์ที่กำลังมองหาโอกาสในการทำงาน
            มีพื้นฐานการศึกษาด้านระบบสารสนเทศ <br />
            <br />
            ชอบให้ความสำคัญกับการเรียนรู้ เมื่อพัฒนาเว็บไซต์
            มีความกระตือรือร้นและอยากรู้อยากเห็นเกี่ยวกับการแก้ปัญหาต่างๆ
            ปัจจุบันกำลังศึกษาหาความรู้เกี่ยวกับ React.js
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#CCCCFF",
                color: "black",
                fontWeight: "bold",
                px: 4,
              }}
            >
              DOWNLOAD RESUME
            </Button>
            <IconButton
              sx={{
                color: "#CCCCFF",
                "&:hover": {
                  backgroundColor: "#4B525A",
                },
              }}
              href="https://www.linkedin.com"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{
                // backgroundColor: "#393E46",
                color: "#CCCCFF",
                "&:hover": {
                  backgroundColor: "#4B525A",
                },
              }}
              href="https://github.com/jintana03"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Aboutme;