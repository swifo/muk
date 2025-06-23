/* eslint-disable @next/next/no-img-element */
import AllCard from "@/components/AllCard";
// import Link from "next/link";
// import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  return (
    <main className="">
      {/* <img src="/f_logo.png" alt="" className="m-auto h-28 mt-16" /> */}
      <img src="/banner.jpg" className="w-[754px] m-auto mt-4" alt="" />
      <div className="flex flex-col items-center">
        <h4 className="text-[#3D7CC1] sm:text-4xl text-3xl font-semibold text-center mt-16">
          Hello, I’m Falak Shear,
        </h4>
        <h1 className="sm:text-[64px] text-5xl text-center sm:leading-16 font-semibold lg:w-[1024px] m-auto mt-5">
          A web developer crafting fast, responsive, and user-friendly websites.
        </h1>

        {/* <Link
          // href={
          //   "https://www.fiverr.com/anjanetteaprid?source=gig_page&gigs=slug%3Ado-a-product-listing-for-you%2Cpckg_id%3A1&ref=seller_location%3APH"
          // }
          href={""}
          target="_blank"
          className="w-auto flex items-center gap-5 m-auto py-1 px-7 mt-6 bg-[#67A5B4] font-semibold rounded-full text-[#F5F5F5]"
        >
          <img src="/fiverr.svg" className="" alt="" /> Hire me{" "}
          <BsArrowUpRight />
        </Link> */}
      </div>
      <div className="relative mt-10">
        <img
          src="/bg-bb.png"
          className="relative h-[520px] opacity-25"
          alt=""
        />
        <div className="absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl text-lg tablet:w-[850px] w-[95%] m-auto">
          <p className="font-semibold z-[100] text-center">
            Bringing ideas to life and production.{" "}
          </p>
          <p className="text-center mt-4">
            I specialize in turning ideas into modern, functional digital
            experiences. Whether you’re building a personal project, startup, or
            business website, I bring clean code and creative design together to
            make it happen.
          </p>
          <p className="text-center mt-6">
            Whether launching a new product or enhancing your online presence,
            we’re here to make it visually striking and market-ready.
          </p>
        </div>
      </div>

      <div className="lg:w-[1024px] m-auto">
        <AllCard
          img={"/spotify.svg"}
          title={"Shopify website design"}
          text={
            "We help you set up and optimize your online store for a seamless shopping experience."
          }
          color={"text-[#5E8E3E]"}
        />
        <AllCard
          img={"/amazon.svg"}
          title={"Amazon KDP"}
          text={
            "We craft engaging book covers and promotional materials to attract more readers."
          }
          color={"text-[#8E553E]"}
        />
        <AllCard
          img={"/figma.svg"}
          title={"UI/UX Design with figma"}
          text={
            "We create visually compelling and user-friendly product designs that enhance brand identity."
          }
          color={"text-[#A259FF]"}
        />
        {/* <AllCard
          img={"/start.svg"}
          title={"Trustpilot Review Management"}
          text={
            "We help manage and optimize your Trustpilot reviews to strengthen customer trust."
          }
          color={"text-[#00B67A]"}
          border={false}
        /> */}
      </div>
      <footer className="py-20 text-center">
        <p className="tablet:text-3xl phone:text-2xl text-base text-[#6D6D6D]">
          Contact for your projects on
        </p>
        <p className="tablet:text-5xl phone:text-3xl text-xl font-semibold mt-2">
          yawal7460@gmail.com
        </p>
      </footer>
    </main>
  );
}
