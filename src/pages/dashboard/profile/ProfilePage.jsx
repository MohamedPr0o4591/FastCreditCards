import React, { useEffect, useState } from "react";
import "./ProfilePage.css";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";
import Modal from "@mui/material/Modal";
import {
  CameraAltRounded,
  CloseRounded,
  DateRangeRounded,
  EditOutlined,
  EmailRounded,
  HelpRounded,
  Person2,
  Person2Rounded,
  PublicRounded,
  QuestionMarkRounded,
  TabletOutlined,
  WalletRounded,
} from "@mui/icons-material";
import { auth, db, storage } from "../../../config/firebase";
import { Stack } from "@mui/system";
import CountryFlag from "react-country-flag";
import { useNavigate } from "react-router";
import ItemPayment from "../../../components/pages/profile/ItemPayment";
import { Bounce, ToastContainer, toast } from "react-toastify";
import { data } from "./data";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 520,
  bgcolor: "#182a40",
  color: "#efef",
  border: "none",
  boxShadow: "0 0.1rem 1.9rem rgba(255 ,255 ,255 ,.4)",
  p: 1,
  borderRadius: 0.6 + "rem",
};

function ProfilePage() {
  const handleUploadImg = async (e) => {
    const file = e.target.files[0];

    // إعداد مسار الصورة في Firebase Storage
    const storageRef = storage.ref(
      `users/${auth.currentUser.uid}/profileImage`
    );

    // قم بتحميل الصورة إلى Firebase Storage
    const snapshot = await storageRef.put(file);

    // قم بالحصول على رابط الصورة من Firebase Storage
    const imageURL = await snapshot.ref.getDownloadURL();

    // قم بتحديث مجموعة Firestore برابط الصورة
    await db.collection("users").doc(auth.currentUser.uid).update({
      profileImg: imageURL,
    });

    // قم بتحديث حالة الصورة في الـ useState
    setImageURL(imageURL);
  };

  useEffect(() => {
    // يتم تشغيل هذا الكود عندما يتم تحميل الصفحة
    const fetchProfileImage = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // إذا كان هناك مستخدم قام بتسجيل الدخول
          const userDoc = await db.collection("users").doc(user.uid).get();
          const profileImageURL = userDoc.data()?.profileImg;

          // إذا كانت هناك صورة في الوثائق
          if (profileImageURL) {
            setImageURL(profileImageURL);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchProfileImage();
  }, []); // [] يضمن أن useEffect سيتم تشغيله مرة واحدة عند تحميل الصفحة

  const [imageURL, setImageURL] = useState(null);
  const [country, setCountry] = useState("");
  const [open, setOpen] = React.useState(false);
  const [paymentProcessor, setPaymentProcessor] = useState("Bitcoin");
  const [network, setNetwork] = useState("Bitcoin");
  const [addressValue, setAddressValue] = useState("");
  const [referredId, setReferredId] = useState("");
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaymentProcessorChange = (event) => {
    setPaymentProcessor(event.target.value);
    setNetwork(event.target.value);
  };

  const handleNetworkChange = (event) => {
    setNetwork(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await db
          .collection("users")
          .doc(auth.currentUser.uid)
          .collection("invitation")
          .get();

        querySnapshot.forEach((doc) => {
          setReferredId(doc.data().referredId);
        });
      } catch (error) {
        console.error("Error fetching invitation data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    return async () => {
      try {
        const userId = auth.currentUser.uid; // استخدم معرف المستخدم الحالي
        const userRef = db.collection("users").doc(userId);

        const doc = await userRef.get();

        if (doc.exists) {
          const fetchedCountry = doc.data().country || "";
          setCountry(fetchedCountry);
        } else {
          // المستند غير موجود، يمكنك اتخاذ إجراء مناسب هنا
          console.log("Document does not exist!");
        }
      } catch (error) {
        // يمكنك معالجة الخطأ هنا
        console.error("Error fetching user data:", error.message);
      }
    };
  }, []);

  const handleSave = (_) => {
    let flag;
    if (addressValue !== "") {
      flag = true;
    } else {
      flag = false;
      toast.error("Please enter your details correctly!!", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
    if (flag) {
      db.collection("users").doc(auth.currentUser.uid).update({
        paymentProcessor,
        network,
        address: addressValue,
      });

      toast.success("The change was made successfully", {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="profile-page">
      <ToastContainer />
      <Paper className="p-4  container box">
        <Box className="w-100 d-flex justify-content-center ">
          <Box className="img-container">
            <Avatar
              className="img"
              alt={localStorage.fullName}
              src={imageURL}
            />
            <input
              type="file"
              accept="image/*"
              id="upload"
              onChange={handleUploadImg}
              className="d-none"
            />
            <label htmlFor="upload">
              <CameraAltRounded sx={{ fontSize: 1.2 + "rem" }} />
            </label>
          </Box>
        </Box>

        <h3 className="border-bottom my-2">
          {" "}
          <span className="text-danger">*</span>Profile
        </h3>

        <Stack gap={3} mt={2}>
          <Box className="display-grid-2-col">
            <Box className="inner-box">
              <Person2Rounded />
              <span>User Name:</span>
              <Box flexGrow={1} />
              <span className="initial">{localStorage.userName}</span>
            </Box>

            <Box className="inner-box">
              <EmailRounded />
              <span>E-mail:</span>
              <Box flexGrow={1} />

              <span className="initial">{localStorage.email}</span>
            </Box>
          </Box>
          <Box className="display-grid-2-col">
            <Box className="inner-box">
              <DateRangeRounded />
              <span>BirthDate:</span>
              <Box flexGrow={1} />

              <span className="initial">{localStorage.bithDate}</span>
            </Box>

            <Box className="inner-box">
              <TabletOutlined />
              <span>Account Created:</span>
              <Box flexGrow={1} />
              <span className="initial">{localStorage.created}</span>
            </Box>
          </Box>

          <Box className="display-grid-2-col">
            <Box className="inner-box">
              <Person2 />
              <span>Gender:</span>
              <Box flexGrow={1} />
              <span className="initial">
                {localStorage.gender ? localStorage.gender.toUpperCase() : null}
              </span>
            </Box>

            <Box className="inner-box">
              <PublicRounded />
              <span>Country:</span>
              <Box flexGrow={1} />
              <span className="initial">
                <CountryFlag countryCode={country} svg />
              </span>
            </Box>
          </Box>
        </Stack>

        <h3 className="border-bottom my-5">
          {" "}
          <span className="text-danger ">*</span>Settings
        </h3>

        <Box className="display-grid-2-col">
          <Box className="inner-box">
            <WalletRounded />
            <span>Wallet</span>
            <Box className="question-box">
              <HelpRounded className="question-mark" />
              <div className="overline">
                <span>
                  You can choose to fill one payment processor to withdraw.
                  Leave other wallet address blank if you do not need it.
                </span>
              </div>
            </Box>

            <Box flexGrow={1} />
            <IconButton onClick={handleOpen}>
              <EditOutlined
                sx={{
                  color: "#efef",
                }}
              />
            </IconButton>
          </Box>

          {referredId ? (
            <Box className="inner-box">
              <span>Invited by: </span>
              <Box flexGrow={1} />
              <span className="initial">{referredId}</span>
            </Box>
          ) : null}

          <div className="addition">
            <Modal
              open={open}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Stack sx={style} gap={2}>
                <Stack direction={"row"} alignItems={"center"} p={1}>
                  <Box flexGrow={1} />
                  <IconButton
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseRounded />
                  </IconButton>
                </Stack>

                <Stack gap={1}>
                  <span>Wallet</span>

                  <FormControl
                    sx={{
                      color: "#efef",
                    }}
                  >
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={paymentProcessor}
                      onChange={handlePaymentProcessorChange}
                      sx={{
                        color: "#efef",
                      }}
                      color="info"
                    >
                      {data
                        ? data.map((item, index) => {
                            return (
                              <MenuItem
                                value={item.value}
                                sx={{ p: 2 }}
                                key={index}
                              >
                                <ItemPayment
                                  img={item.img}
                                  name={item.name}
                                  label={item.type}
                                  color={item.color}
                                  labelBackground={item.typeBackground}
                                />
                              </MenuItem>
                            );
                          })
                        : null}
                    </Select>
                  </FormControl>
                </Stack>

                {paymentProcessor === "Bitcoin" ||
                paymentProcessor === "Tether" ||
                paymentProcessor === "Binance" ||
                paymentProcessor === "Shiba Inu" ||
                paymentProcessor === "Polygon" ||
                paymentProcessor === "USD Coin" ? (
                  <Stack>
                    <Stack gap={1}>
                      <span>Network</span>

                      <FormControl
                        sx={{
                          color: "#efef",
                        }}
                      >
                        {paymentProcessor === "Bitcoin" ? (
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={network}
                            onChange={handleNetworkChange}
                            sx={{
                              color: "#efef",
                            }}
                            color="info"
                          >
                            <MenuItem value={"Bitcoin"} sx={{ p: 2 }}>
                              <ItemPayment name="Bitcoin" />
                            </MenuItem>

                            <MenuItem
                              value={"Bitcoin Lightning Network"}
                              sx={{ p: 2 }}
                            >
                              <ItemPayment name="Bitcoin Lightning Network" />
                            </MenuItem>
                          </Select>
                        ) : paymentProcessor === "Tether" ? (
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={network}
                            onChange={handleNetworkChange}
                            sx={{
                              color: "#efef",
                            }}
                            color="info"
                            readOnly
                          >
                            <MenuItem value={"Tether"} sx={{ p: 2 }}>
                              <ItemPayment name="Tron (TRC20)" />
                            </MenuItem>
                          </Select>
                        ) : paymentProcessor === "Binance" ? (
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={network}
                            onChange={handleNetworkChange}
                            sx={{
                              color: "#efef",
                            }}
                            color="info"
                            readOnly
                          >
                            <MenuItem value={"Binance"} sx={{ p: 2 }}>
                              <ItemPayment name="BNB Smart Chain (BEP20)" />
                            </MenuItem>
                          </Select>
                        ) : paymentProcessor === "Shiba Inu" ? (
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={network}
                            onChange={handleNetworkChange}
                            sx={{
                              color: "#efef",
                            }}
                            color="info"
                            readOnly
                          >
                            <MenuItem value={"Shiba Inu"} sx={{ p: 2 }}>
                              <ItemPayment name="BNB Smart Chain (BEP20)" />
                            </MenuItem>
                          </Select>
                        ) : paymentProcessor === "Polygon" ? (
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={network}
                            onChange={handleNetworkChange}
                            sx={{
                              color: "#efef",
                            }}
                            color="info"
                            readOnly
                          >
                            <MenuItem value={"Polygon"} sx={{ p: 2 }}>
                              <ItemPayment name="Polygon" />
                            </MenuItem>
                          </Select>
                        ) : paymentProcessor === "USD Coin" ? (
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={network}
                            onChange={handleNetworkChange}
                            sx={{
                              color: "#efef",
                            }}
                            color="info"
                            readOnly
                          >
                            <MenuItem value={"USD Coin"} sx={{ p: 2 }}>
                              <ItemPayment name="Tron (TRC20)" />
                            </MenuItem>
                          </Select>
                        ) : null}
                      </FormControl>
                    </Stack>
                  </Stack>
                ) : null}

                <Stack gap={1}>
                  <span>Address</span>
                  <input
                    style={{
                      border: "1px solid #000",
                      outline: "none",
                      background: "transparent",
                      padding: "10px 20px",
                      borderRadius: 0.4 + "rem",
                      color: "#efef",
                    }}
                    type="text"
                    placeholder={`Enter your ${paymentProcessor} address`}
                    value={addressValue}
                    onChange={(e) => setAddressValue(e.target.value)}
                  />
                </Stack>

                <Stack
                  direction={"row"}
                  alignItems={"center"}
                  p={1}
                  justifyContent={"center"}
                >
                  <Button
                    variant="contained"
                    color="info"
                    sx={{
                      color: "#efef",
                      px: 5,
                    }}
                    onClick={handleSave}
                  >
                    Save
                  </Button>
                </Stack>
              </Stack>
            </Modal>
          </div>
        </Box>
      </Paper>
    </div>
  );
}

export default ProfilePage;
