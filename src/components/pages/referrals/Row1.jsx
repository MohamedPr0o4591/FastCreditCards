import { Stack, Paper, Box, useTheme, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function Row1() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Stack>
      <Paper className="inner">
        <Box className="child-2">
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              width={100 + "%"}
            >
              <h4>Affilliate Total</h4>
              <p className="m-0">
                0 <span className="text-danger">points</span>
              </p>
            </Box>

            <Box
              alignItems={"center"}
              justifyContent={"center"}
              display={"flex"}
              flexDirection={"column"}
              width={100 + "%"}
            >
              <h4>Total Referrals</h4>
              <p className="m-0">0</p>
            </Box>
          </Stack>

          <Paper
            className="mt-2 p-2"
            sx={{
              background: "#0a5985",
              color: theme.palette.success.contrastText,
            }}
          >
            <span>
              Earn 5% of the profits of your friends who were invited through
              your invitation link , share your link with your friends ,if you
              can't share it you can purchase some referrals (real users)
            </span>

            <Stack direction={"row"}>
              <Box flexGrow={1} />
              <Box>
                <Button
                  variant="contained"
                  color="info"
                  onClick={(_) => navigate("/dashboard/system-market")}
                >
                  Market
                </Button>
              </Box>
            </Stack>
          </Paper>
        </Box>
      </Paper>
    </Stack>
  );
}

export default Row1;
