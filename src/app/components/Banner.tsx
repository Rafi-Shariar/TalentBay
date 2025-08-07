"use client";
import React from "react";
import animation from "../assets/lotties/BannerLottie.json";
import Link from "next/link";
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div>
      <section className="flex items-center flex-col md:flex-row mt-6">
        <div className="space-y-3 md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-semibold">
            Find Freelancers.  Post Tasks. Get Things Done.
          </h1>
          <h3 className="text-base md:text-lg">
           Welcome to TalentBay — a smart freelance task marketplace where you can post tasks, hire skilled freelancers, and get work done efficiently. Whether you're looking for help or offering your services, talentBay connects talent with opportunity.
          </h3>

          <Link href="/add-task">
            <button className="btn btn-soft btn-info rounded-full px-12 hover:text-white mt-6">
              Get Started
            </button>
          </Link>
        </div>

        <div className="md:w-1/2">
          <Lottie
            animationData={animation}
            loop={true}
            autoplay={true}
            style={{
              maxWidth: "100%",
              height: "auto",
              width: "100%",
            }}
          />
        </div>
      </section>
    </div>
  );
};

export default Banner;
