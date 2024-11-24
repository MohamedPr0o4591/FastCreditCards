import React, { useEffect } from "react";
import "./ReturnAds.css";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getSurfAdsId } from "../../redux/actions/allActions";

function ReturnAds() {
  const params = useParams();
  const surfData = useSelector((state) => state.GET_SURF_ADS_ID.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSurfAdsId(params.id));

    window.opener?.postMessage({ action: "startCountdown" }, "*");

    return (_) => {
      window.opener?.postMessage({ action: "stopCountdown" }, "*");
    };
  }, []);

  return (
    <section className="return-ads">
      <div className="header-nav">
        <strong>{surfData.surf_time}</strong>

        <span
          style={{
            color: surfData.surf_time <= 0 && "#0e6",
          }}
        >
          {" "}
          {surfData.surf_time > 0 ? "Ad is running ..." : "Ad has ended"}
        </span>
      </div>
      <iframe src={surfData.surf_link} frameBorder="0" width={"100%"}></iframe>
    </section>
  );
}

export default ReturnAds;
