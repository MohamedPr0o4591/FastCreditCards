import { Box, Stack } from "@mui/material";
import React from "react";
import { Container } from "react-bootstrap";
import "./HistoryPage.css";
import { auth, db } from "../../../config/firebase";

function HistoryPage() {
  const [currentlyTime, setCurrentlyTime] = React.useState("");
  const [historyData, setHistoryData] = React.useState([]);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentlyTime(new Date().toLocaleString());
    }, 1000); // تحديث الوقت كل ثانية

    return () => clearInterval(intervalId);
  }, []);

  React.useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userId = user.uid;
        const userHistoryRef = db
          .collection("users")
          .doc(userId)
          .collection("history");

        // الاستماع إلى تغييرات مجموعة البيانات وتحديث الحالة
        const unsubscribeHistory = userHistoryRef.onSnapshot((snapshot) => {
          const data = [];
          snapshot.forEach((doc) => {
            // تحويل كل وثيقة إلى كائن JavaScript
            data.push({ id: doc.id, ...doc.data() });
          });
          setHistoryData(data);
        });

        // تنظيف الاشتراك عند تفريغ المكون أو إيقافه
        return () => unsubscribeHistory();
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="history-page">
      <Container className="history-container">
        <Stack
          direction="row"
          spacing={2}
          sx={{ color: "aquamarine", pointerEvents: "none" }}
        >
          <h3>Transactions</h3>
          <Box flexGrow={1} />
          {currentlyTime}
        </Stack>

        <Stack gap={2} mt={2} className="history-box">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              {historyData.length > 0
                ? historyData.map((data, index) => {
                    return (
                      <tr key={index}>
                        <td>{data.date}</td>
                        <td>{data.event}</td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
          </table>
        </Stack>
      </Container>
    </div>
  );
}

export default HistoryPage;
