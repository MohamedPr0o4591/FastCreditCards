import React, { useEffect, useState } from "react";
import { Paper, Stack } from "@mui/material";
import { Info } from "@mui/icons-material";
import Ads_Card from "../../../components/Ads_Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllSurfAds, getSurfAdsId } from "../../../redux/actions/allActions";

function Ads_Surf() {
  const [countdown, setCountdown] = useState(0);
  const [msgErr, setMsgErr] = useState("");

  const adsData = useSelector((state) => state.GET_SURF_ADS.data);
  const adsSelected = useSelector((state) => state.GET_SURF_ADS_ID.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllSurfAds());
  }, []);
  useEffect(() => {
    console.log(adsSelected);

    if (adsSelected && adsSelected.surf_time) {
      function handleMsg(event) {
        if (event.data.action === "startCountdown") {
          setCountdown(adsSelected.surf_time);
        } else if (event.data.action === "stopCountdown" && countdown > 0) {
          setCountdown(null);
          setMsgErr("Error ,tap has closed");
        }
      }

      window.addEventListener("message", handleMsg);

      return (_) => {
        window.removeEventListener("message", handleMsg);
      };
    }
  }, [adsSelected]);

  const handleGetAds = (id) => {
    dispatch(getSurfAdsId(id));
  };

  return (
    <div className="ads-surf-page ">
      <h3>Surf Ads</h3>

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
        {adsData?.ads_surf?.map((ads) => {
          return (
            <Ads_Card
              key={ads.id}
              id={ads.id}
              title={ads.surf_title}
              time={ads.surf_time}
              points={ads.surf_price}
              countdown={countdown}
              handleGetAds={handleGetAds}
            />
          );
        })}
      </Stack>
    </div>
  );
}

export default Ads_Surf;
