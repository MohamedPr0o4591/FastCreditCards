import { auth, db } from "../config/firebase";

export const referredId = async () => {
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid;
    const refLink = db.collection("users").doc(userId).collection("invitation");

    try {
      await refLink.add({
        referredId: localStorage.referrer,
      });
      console.log("Referred Id added successfully!");
    } catch (error) {
      console.error("Error adding referred Id:", error);
    }
  }
};
