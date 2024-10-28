import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Paper, Stack, Switch } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import FeaturedCard from "./FeaturedCard";
import Slider from "react-slick";

function SlideOffers(props) {
  const [autoPlay, setAutoPlay] = useState(props.auto ? true : false);

  let sliderRef = useRef(null);

  const settings = {
    dots: false,

    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 2,
    autoplay: props.auto ? true : false,
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
    setAutoPlay(!autoPlay);
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
    <Paper
      sx={{
        p: 2,
        bgcolor: "#2f4560",
        color: "#efef",
        mt: 2,
      }}
    >
      <Stack direction={"row"} alignItems={"center"}>
        <h3>{props.title}</h3>

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

          {props.auto && (
            <>
              <span>Auto play</span>

              <Switch
                {...label}
                defaultChecked
                color="info"
                onClick={handleClick}
              />
            </>
          )}
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
  );
}

export default SlideOffers;
