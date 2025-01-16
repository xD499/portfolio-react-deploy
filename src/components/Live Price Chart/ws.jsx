import React, { useEffect } from "react";

export default function WebSocketComponent({ onData }) {
  useEffect(() => {
    // Make sure the onData callback is defined
    if (!onData) {
      console.error('onData is missing or undefined!');
      return;
    }

    // Create a new WebSocket connection
    const socket = new WebSocket("wss://wbs.mexc.com/ws");

    // Connection established
    socket.onopen = () => {
      console.log("Connected to WebSocket server");

      // Send the subscription message only once
      const pingMessage = JSON.stringify({
        "method": "SUBSCRIPTION",
        "params": ["spot@public.deals.v3.api@BTCUSDT"]
      });
      socket.send(pingMessage);
      console.log("Sent:", pingMessage);
    };

    // Listen for messages from the server
    socket.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);

      // Extract "p" values from "deals" array
      const prices = parsedData?.d?.deals?.map(deal => deal.p);
      
      // Send the extracted prices to the parent
      if (prices) {
        onData(prices);
      }
    };

    // Handle connection errors
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // Handle connection close
    socket.onclose = () => {
      console.log("WebSocket connection closed, reconnecting...");
      setTimeout(() => {
       socket = new WebSocket("wss://wbs.mexc.com/ws");
      }, 5000);  // Try reconnecting after 5 seconds
    };

    // Cleanup on component unmount
    return () => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.close();
      }
    };
  }, []);  // Empty dependency array ensures this effect only runs once

  return <div>WebSocket Component Active</div>;
};
