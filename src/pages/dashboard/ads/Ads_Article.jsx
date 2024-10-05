import { Info } from "@mui/icons-material";
import { Paper, Stack } from "@mui/material";
import Ads_Card from "../../../components/Ads_Card";
import React from "react";
import ad1 from "../../../../public/img2.png";

function Ads_Article() {
  return (
    <div className="ads-article-page">
      <h3>Article Ads</h3>

      <Paper
        className="text-light p-2 opacity-50 mt-3"
        sx={{
          bgcolor: "#3575",
        }}
      >
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <Info sx={{ color: "tomato" }} />

          <span>
            Any link served through advertisements is not an endorsement or
            recommendation by FastCreditCards. Please exercise your due
            diligence before use.
          </span>
        </Stack>
      </Paper>

      <Stack mt={2} gap={2}>
        <Ads_Card img={ad1} />
        <Ads_Card img={ad1} />
        <Ads_Card img={ad1} />
      </Stack>
    </div>
  );
}

export default Ads_Article;
