import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Col, Container, Row } from "react-bootstrap";
import { Box, Button, Stack } from "@mui/material";
// @ts-ignore
import bitdeer from "../../assets/bitdeer_2-6b159eaf.svg";
// @ts-ignore
import bitfufu from "../../assets/bitfufu.svg";
// @ts-ignore
import bybit from "../../assets/bybit.svg";
// @ts-ignore
import indoex from "../../assets/indoex.svg";
// @ts-ignore
import okx from "../../assets/okx_2.svg";
// @ts-ignore
import stormgain from "../../assets/stormgain.svg";
// @ts-ignore
import etoro from "../../assets/etoro.svg";
// @ts-ignore
import hbomax from "../../assets/hbomax.svg";
// @ts-ignore
import alibaba from "../../assets/alibaba.svg";
// @ts-ignore
import tiktok from "../../assets/tiktok.svg";
// @ts-ignore
import payeer from "../../assets/payeer.png";
// @ts-ignore
import amazon from "../../assets/amazon.webp";
// @ts-ignore
import bitcoin from "../../assets/bitcoin.png";
// @ts-ignore
import dogecoin from "../../assets/dogecoin.png";
// @ts-ignore
import eth from "../../assets/eth.png";
// @ts-ignore
import litecoin from "../../assets/litecoin.png";
// @ts-ignore
import visa from "../../assets/visa.png";
// @ts-ignore
import online_business from "../../assets/online_business.png";
// @ts-ignore
import start_earnning from "../../assets/secondLogo.webp";
import AdvertiserCard from "../../components/AdvertiserCard";
import { useNavigate } from "react-router";
import {
  AirlineStopsRounded,
  Groups2Rounded,
  PaymentsRounded,
  Person3Rounded,
} from "@mui/icons-material";
import { auth } from "../../config/firebase";
import ad1 from "../../../public/img2.png";
import currency from "../../../public/icon.png";
import logo from "../../../public/logo.png";
import OfferDetails from "../../components/pages/home page/OfferDetails";
import tiktokOffer from "../../assets/offers/tiktok.png";
import monoOffer from "../../assets/offers/mono.jpg";
import warPathOffer from "../../assets/offers/warPath.jpg";

function HomePage() {
  const navi = useNavigate();

  useEffect(() => {
    // تحقق من حالة المستخدم عند تحميل الصفحة
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // المستخدم مسجل، قم بتوجيهه إلى صفحة الداشبورد
        navi("/dashboard");
      }
    });

    return () => unsubscribe();
  }, [history]);

  const [totalUsers, setTotalUsers] = useState(6118291);
  const [activeUsers, setActiveUsers] = useState(182901);
  const [advertisement, setAdvertisement] = useState(9102810);
  const [payments, setPayments] = useState(2104501);

  return (
    <div className="home-page">
      <div className="home-page-img position-relative">
        {Array.from({ length: 3 }, (_, index) => {
          return <q key={index} />;
        })}

        <div className="start_earnnings">
          <Container className="container">
            <Row className="h-100">
              <div className="content">
                <h2>Earn rewards simply</h2>
                <span>Your interests are our interests</span>
              </div>
              <Col sm={12} lg={6} className=" col-start">
                <div>
                  <button onClick={(_) => navi("/register/full_name")}>
                    Start earning now
                  </button>

                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    mt={2}
                    gap={10}
                  >
                    <Box className="desc-box">
                      <img
                        src={logo}
                        alt="Currency"
                        style={{ borderColor: "#008ba9" }}
                      />

                      <p>+150 offers available in Egypt</p>
                    </Box>

                    <Box className="desc-box">
                      <img src={currency} alt="Currency" />

                      <p>Earn up to $150 per offer</p>
                    </Box>
                  </Stack>
                </div>

                <Stack direction={"row"} alignItems={"center"} mt={2} gap={4}>
                  <OfferDetails
                    img={tiktokOffer}
                    title="Tiktok install"
                    price="$2.75"
                  />

                  <OfferDetails
                    img={monoOffer}
                    title="Monopoly Go!"
                    price="$154"
                  />

                  <OfferDetails
                    img={warPathOffer}
                    title="Warpath: Ace..."
                    price="$91"
                  />
                </Stack>
              </Col>

              <Col sm={12} lg={6} className="col-end">
                <div className="img-container">
                  {Array.from({ length: 9 }, (_, index) => {
                    return (
                      <i key={index} className={`hover bt-${index + 1}`} />
                    );
                  })}

                  <img
                    src={start_earnning}
                    alt="Start_earnnings"
                    className="logo-earn"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Row className="w-100 p-5 border-bottom">
        <Col
          sm={12}
          lg={6}
          className="d-flex justify-content-between"
          style={{
            gap: 2.6 + "rem",
          }}
        >
          <span
            className=" fs-2 d-flex align-items-center"
            style={{
              color: "orange",
            }}
          >
            Read more about us
          </span>
          <img src={ad1} />
        </Col>

        <Col sm={12} lg={6}>
          <h2
            className="text-center"
            style={{
              color: "orange",
            }}
          >
            Advertise At FastCreditCards
          </h2>

          <span className="text-light text-center fs-4">
            Create your campaign by easy steps. Connect your project to large
            audience of users immediately.
          </span>
        </Col>
      </Row>

      <Stack gap={2} p={4}>
        <h2
          className="text-center fs-1"
          style={{
            color: "orange",
          }}
        >
          Our Advertisers
        </h2>

        <ul
          className="list-unstyled p-0"
          style={{
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 1140 + "px",
          }}
        >
          <AdvertiserCard img={bitdeer} />
          <AdvertiserCard img={bitfufu} />
          <AdvertiserCard img={bybit} />
          <AdvertiserCard img={indoex} />
          <AdvertiserCard img={okx} />

          <AdvertiserCard img={stormgain} />
          <AdvertiserCard img={hbomax} />
          <AdvertiserCard img={etoro} />
          <AdvertiserCard img={alibaba} />
          <AdvertiserCard img={tiktok} />
        </ul>
      </Stack>

      <Stack gap={2} p={4} className="border-bottom">
        <h2
          className="text-center fs-1"
          style={{
            color: "orange",
          }}
        >
          Be rewarded via
        </h2>

        <ul
          className="list-unstyled p-0"
          style={{
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            maxWidth: 1140 + "px",
          }}
        >
          <AdvertiserCard
            img={bitcoin}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />

          <AdvertiserCard
            img={eth}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />
          <AdvertiserCard
            img={dogecoin}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />
          <AdvertiserCard
            img={payeer}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />
          <AdvertiserCard
            img={litecoin}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />
          <AdvertiserCard
            img={visa}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />
          <AdvertiserCard
            img={amazon}
            flex="flex"
            contentCenter="center"
            itemsCenter="center"
            width="80%"
            height="auto"
          />
        </ul>
      </Stack>

      <Container className="py-4">
        <ul className="w-100 d-flex flex-wrap list-unstyled m-0 p-0 justify-content-between">
          <li
            className="p-3"
            style={{
              borderRadius: 0.6 + "rem",
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                color: "#00cbee",
                fontSize: 1.4 + "rem",
              }}
            >
              <Groups2Rounded sx={{ fontSize: 6.5 + "rem" }} />
              <span className="fs-3">{totalUsers.toLocaleString()}</span>

              <span className="mt-3 fw-light fs-6 text-light opacity-50">
                Total Users
              </span>
            </Stack>
          </li>

          <li
            className="p-3"
            style={{
              borderRadius: 0.6 + "rem",
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                color: "#00cbee",
                fontSize: 1.4 + "rem",
              }}
            >
              <Person3Rounded sx={{ fontSize: 6.5 + "rem" }} />
              <span className="fs-3">{activeUsers.toLocaleString()}</span>

              <span className="mt-3 fw-light fs-6 text-light opacity-50">
                Active Users Weekly
              </span>
            </Stack>
          </li>

          <li
            className="p-3"
            style={{
              borderRadius: 0.6 + "rem",
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                color: "#00cbee",
                fontSize: 1.4 + "rem",
              }}
            >
              <AirlineStopsRounded sx={{ fontSize: 6.5 + "rem" }} />
              <span className="fs-3">{advertisement.toLocaleString()}</span>

              <span className="mt-3 fw-light fs-6 text-light opacity-50">
                Advertisement Impression <br /> Weekly
              </span>
            </Stack>
          </li>

          <li
            className="p-3"
            style={{
              borderRadius: 0.6 + "rem",
            }}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                color: "#00cbee",
                fontSize: 1.4 + "rem",
              }}
            >
              <PaymentsRounded sx={{ fontSize: 6.5 + "rem" }} />
              <span className="fs-3">{payments.toLocaleString()}</span>

              <span className="mt-3 fw-light fs-6 text-light opacity-50">
                Times Of Successful <br /> Payments
              </span>
            </Stack>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default HomePage;
