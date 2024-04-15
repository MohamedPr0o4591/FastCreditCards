import { auth, db } from "../config/firebase";

export const addEvent = async (props) => {
  const user = auth.currentUser;
  if (user) {
    const userId = user.uid;
    const historyRef = db.collection("users").doc(userId).collection("history");

    const registrationTime = new Date().toLocaleString(); // الوقت الحالي

    try {
      await historyRef.add({
        date: registrationTime,
        event: props.event,
      });
    } catch (error) {
      console.error("Error adding adding event to history:", error);
    }
  }
};
