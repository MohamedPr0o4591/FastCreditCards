import { Box, Card, Paper, Rating, Stack, Switch } from "@mui/material";
import FeaturedCard from "../../../components/Offers/FeaturedCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useRef, useState } from "react";
import {
  ArrowBack,
  ArrowForward,
  ContactSupportRounded,
} from "@mui/icons-material";
import "./Offers.css";
// @ts-ignore
import bitlabs from "../../../assets/icons/bitlabs.jpg";
import OffersWall_Card from "../../../components/OffersWall_Card";
// @ts-ignore
import currency from "../../../../public/icon.png";

function Offers() {
  const [autoPlay, setAutoPlay] = useState(true);

  let sliderRef = useRef(null);

  const settings = {
    dots: false,

    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const handleClick = (_) => {
    autoPlay ? setAutoPlay(false) : setAutoPlay(true);
  };

  useEffect(() => {
    autoPlay ? play() : pause();
  }, [autoPlay]);

  const play = () => {
    sliderRef.slickPlay();
  };
  const pause = () => {
    sliderRef.slickPause();
  };

  return (
    <div className="offers_page">
      <h3>Offers</h3>

      <Paper
        sx={{
          p: 2,
          bgcolor: "#2f4560",
          color: "#efef",
          mt: 2,
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <h3>Featured</h3>

          <Box flexGrow={1} />

          <Stack gap={1} direction={"row"} alignItems={"center"}>
            <div className="container-buttons">
              <button onClick={(_) => sliderRef.slickPrev()}>
                <ArrowBack />
              </button>

              <button onClick={(_) => sliderRef.slickNext()}>
                <ArrowForward />
              </button>
            </div>

            <span>Auto play</span>

            <Switch
              {...label}
              defaultChecked
              color="info"
              onClick={handleClick}
            />
          </Stack>
        </Stack>

        <Slider ref={(slider) => (sliderRef = slider)} {...settings}>
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />

          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />

          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </Slider>
      </Paper>

      <Paper
        sx={{
          p: 2,
          bgcolor: "#2f4560",
          color: "#efef",
          mt: 2,
        }}
      >
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <h3>Surveys</h3>

          <Box className=" d-flex align-items-center help-mark">
            <ContactSupportRounded className="help-mark-icon" />

            <label>
              Complete surveys to earn satoshi. You will be rewarded for each
              survey completed.
            </label>
          </Box>

          <Box flexGrow={1} />
        </Stack>

        <ul className="list_offers d-flex gap-2 flex-column">
          <OffersWall_Card bitlabs={bitlabs} deactivate rate={3} />
          <OffersWall_Card bitlabs={bitlabs} rate={5} />
          <OffersWall_Card bitlabs={bitlabs} rate={4} />
        </ul>
      </Paper>

      <Paper
        sx={{
          p: 2,
          bgcolor: "#2f4560",
          color: "#efef",
          mt: 2,
        }}
      >
        <Stack direction={"row"} gap={1} alignItems={"center"}>
          <h3>Offerwalls</h3>

          <Box className=" d-flex align-items-center help-mark">
            <ContactSupportRounded className="help-mark-icon" />

            <label>
              Each offerwall contains hundreds of offers to complete.
            </label>
          </Box>

          <Box flexGrow={1} />
        </Stack>

        <ul className="list_offers d-flex gap-2 flex-column">
          <OffersWall_Card bitlabs={bitlabs} rate={4.50} />
          <OffersWall_Card bitlabs={bitlabs} deactivate rate={1.5} />
          <OffersWall_Card bitlabs={bitlabs} rate={3.25} />
        </ul>
      </Paper>

      <Paper
        sx={{
          p: 2,
          bgcolor: "#2f4560",
          color: "#efef",
          mt: 2,
        }}
      >
        <Stack direction={"row"} alignItems={"center"}>
          <h3>Latest Operations</h3>

          <Box flexGrow={1} />
        </Stack>

        <table>
          <thead>
            <tr>
              <th>Offer name</th>
              <th>Offerwall</th>
              <th>User</th>
              <th>Reward</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Offer length 32 ..</td>
              <td>AdGate Media</td>
              <td>Mohamed</td>
              <td className="d-flex gap-2 align-items-center">
                <img
                  src={currency}
                  alt="currency"
                  style={{ width: 40 + "px" }}
                />{" "}
                <span>3000</span>
              </td>
            </tr>
            <tr>
              <td>Offer length 32 ..</td>
              <td>AdGate Media</td>
              <td>Mohamed</td>
              <td className="d-flex gap-2 align-items-center">
                <img
                  src={currency}
                  alt="currency"
                  style={{ width: 40 + "px" }}
                />{" "}
                <span>3000</span>
              </td>
            </tr>
            <tr>
              <td>Offer length 32 ..</td>
              <td>AdGate Media</td>
              <td>Mohamed</td>
              <td className="d-flex gap-2 align-items-center">
                <img
                  src={currency}
                  alt="currency"
                  style={{ width: 40 + "px" }}
                />{" "}
                <span>3000</span>
              </td>
            </tr>
          </tbody>
        </table>
      </Paper>
    </div>
  );
}

export default Offers;
