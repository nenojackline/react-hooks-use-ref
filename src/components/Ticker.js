import React, { useEffect, useRef, useState } from "react";
import { makeRandomNumber } from "../utils";

function Ticker() {
  const [price, setPrice] = useState(0);
  const [color, setColor] = useState("black");

  const prePriceRef = useRef(price);

  useEffect(() => {
    const prePrice = prePriceRef.current;

    if(price > prePrice) {
      setColor("green");
    }
    else if(price < prePrice) {
      setColor("red")
    }
    else {
      setColor("black")
    };

    prePriceRef.current = price;

  }, [price])

  useEffect(() => {
    const id = setInterval(() => setPrice(makeRandomNumber), 1000);
    return function () {
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      <h1>TickerMaster</h1>
      <h2 style={{ color: color }}>Price: ${price}</h2>
    </div>
  );
}

export default Ticker;
