import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Solution from "./Solution";
import DailysSolved from "./DailysSolved";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <DailysSolved />
    </div>
  );
}
