"use client";
import { useState, useEffect } from "react";
import { formatDistanceToNowStrict, parseISO } from "date-fns";

function RemainingTime({ pickupDate }: { pickupDate: string }) {
  const [remainingTime, setRemainingTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const pickupDateTime = parseISO(pickupDate);
      if (pickupDateTime > now) {
        setRemainingTime(
          formatDistanceToNowStrict(pickupDateTime, { addSuffix: true })
        );
      } else {
        setRemainingTime("Pickup time has passed");
        clearInterval(interval);
      }
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [pickupDate]);

  return <span>{remainingTime}</span>;
}

export default RemainingTime;
