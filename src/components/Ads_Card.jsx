import { AccessTime, Info } from "@mui/icons-material";
import { Box, IconButton, Menu, Paper, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";

function Ads_Card(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDataClick = (id) => {
    props.handleGetAds(id);
  };

  return (
    <Paper
      className="text-light p-2"
      sx={{
        bgcolor: "#2f4560",
      }}
    >
      <Container>
        <Stack gap={2}>
          <Stack direction={"row"}>
            <a
              href={"/dashboard/ads/" + props.id}
              target="_blank"
              style={{
                textDecoration: "none",
                color: "rgb(175 211 255)",
              }}
              onClick={(_) => handleDataClick(props.id)}
            >
              {props.title}
            </a>

            {props.countdown > 0 && (
              <>
                <Box flexGrow={1} />

                <Box>
                  <p>35</p>
                </Box>
              </>
            )}

            <Box flexGrow={1} />

            <IconButton
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
              color="warning"
            >
              <Info />
            </IconButton>

            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Porn</MenuItem>
              <MenuItem onClick={handleClose}>Malicious</MenuItem>
              <MenuItem onClick={handleClose}>Not Interested</MenuItem>
              <MenuItem onClick={handleClose}>Other</MenuItem>
            </Menu>
          </Stack>

          {props.img ? (
            <Stack direction={"row"} gap={3}>
              <div
                style={{
                  background: `url(${props.img})`,
                  backgroundPosition: "center center",
                  backgroundSize: "cover",
                  minWidth: 150 + "px",
                  maxWidth: 150 + "px",
                  minHeight: 150 + "px",
                  maxHeight: 150 + "px",
                  borderRadius: 0.6 + "rem",
                }}
              />

              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti iusto pariatur optio a obcaecati aspernatur eaque
                laborum ullam distinctio consectetur aliquam, molestias,
                necessitatibus, nesciunt illo quisquam error corporis est
                tempore? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Deleniti iusto pariatur optio a obcaecati aspernatur eaque
                laborum ullam distinctio consectetur aliquam, molestias,
                necessitatibus, nesciunt illo quisquam error corporis est
                tempore? Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Deleniti iusto pariatur optio a obcaecati aspernatur eaque
                laborum ullam distinctio consectetur aliquam, molestias,
                necessitatibus, nesciunt illo quisquam error corporis est
                tempore?
              </span>
            </Stack>
          ) : null}

          <Stack direction={"row"} gap={4} alignItems={"center"}>
            <Box>
              <p className="m-0 d-flex align-items-center gap-2">
                {" "}
                <span className="text-danger fs-5">
                  {props.points}
                </span> Satoshi{" "}
              </p>
            </Box>

            <Box>
              <p className="m-0 d-flex align-items-center gap-2">
                {" "}
                <AccessTime /> <span>{props.time} s</span>
              </p>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Paper>
  );
}

export default Ads_Card;
