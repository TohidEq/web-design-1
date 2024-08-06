"use client";
import React from "react";

import PytTabs from "@/components/pickYourTrip/PytTabs";
import { HiXMark } from "react-icons/hi2";

type Props = {};

function PickYourTrip({}: Props) {
  return (
    <div className="pyt">
      <div className="pyt-bg">
        <span className="item-1"></span>
        <span className="item-2"></span>
      </div>
      <div className="pyt-title">
        <div className="pyt-container">
          <h2 className="title">Pick Your Trip </h2>

          <HiXMark />
          <div className="text">
            <p>
              Our team put together some trips to you to discover, feel free to
              discover each of them.
            </p>
          </div>
        </div>
      </div>

      <PytTabs />
    </div>
  );
}

export default PickYourTrip;
