import React from "react";
import { Avatar, Box, Stack } from "@mui/material";
import { auth, db } from "../../../config/firebase";
import currency from "../../../../public/icon.png";

function Row2(props) {
  const [imageUrl, setImageUrl] = React.useState(null);
  const [points, setPoints] = React.useState(1921312);
  const [profits, setProfits] = React.useState(3000);

  React.useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          // إذا كان هناك مستخدم قام بتسجيل الدخول
          const userDoc = await db.collection("users").doc(user.uid).get();
          const profileImageURL = userDoc.data()?.profileImg;

          // إذا كانت هناك صورة في الوثائق
          if (profileImageURL) {
            setImageUrl(profileImageURL);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error.message);
      }
    };

    fetchProfileImage();
  }, []);

  return (
    <Box className="box">
      <img src={props.cr} alt={props.alt} className="crown" />
      <Avatar className="img" alt={localStorage.fullName} src={imageUrl} />

      <span className="mt-5 userName">userName</span>

      <span className="top-users">#{props.top}</span>

      <Stack direction={"row"} gap={1} alignItems={"center"} className="icon">
        <img src={currency} alt="icon" />
        <span>{points.toLocaleString()} </span>
      </Stack>

      <Box className="profits my-3">
        <span>${profits.toLocaleString()}</span>
      </Box>
    </Box>
  );
}

export default Row2;
