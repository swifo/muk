/* eslint-disable @next/next/no-img-element */
import AllCard from "@/components/AllCard";
import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

export default function Home() {
  return (
    <main className="">
      {/* <img src="/f_logo.png" alt="" className="m-auto h-28 mt-16" /> */}
      <img src="/shopify.jpg" className="w-[754px] m-auto mt-4" alt="" />
      <div className="flex flex-col items-center">
        <h4 className="text-[#3D7CC1] sm:text-4xl text-3xl font-semibold text-center mt-16">
          Hello, I’m Jenelyn Penullar,
        </h4>
        <h1 className="sm:text-[64px] text-5xl text-center sm:leading-16 font-semibold lg:w-[1024px] m-auto mt-5">
          A Shopify Developer Crafting Fast, Responsive, and User-Friendly
          Online Stores.
        </h1>

        <Link
          href={"https://www.fiverr.com/users/jenelynpenullar"}
          // href={""}
          target="_blank"
          className="w-auto flex items-center gap-5 m-auto py-1 px-7 mt-6 bg-[#67A5B4] font-semibold rounded-full text-[#F5F5F5]"
        >
          <img src="/fiverr.svg" className="" alt="" /> Hire me{" "}
          <BsArrowUpRight />
        </Link>
      </div>
      <div className="relative mt-10">
        <img
          src="/bg-bb.png"
          className="relative h-[520px] opacity-25"
          alt=""
        />
        <div className="absolute text-black top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:text-2xl text-lg tablet:w-[850px] w-[95%] m-auto">
          <p className="font-semibold z-[100] text-center">
            Bringing Your Shopify Vision to Life.{" "}
          </p>
          <p className="text-center mt-4">
            I specialize in turning ideas into modern, high-performing Shopify
            stores. Whether you&apos;re launching a new product, scaling your
            startup, or refreshing your online brand, I combine clean code with
            creative design to deliver seamless, conversion-focused shopping
            experiences.
          </p>
          <p className="text-center mt-6">
            From store setup to custom themes and app integrations, I help you
            create a visually stunning and high-performing Shopify presence —
            ready for launch and built for growth.
          </p>
          <p className="text-center mt-6">
            Let me know if you want a shorter, more casual version or one
            focused on a specific niche (like fashion, beauty, digital products,
            etc.).
          </p>
        </div>
      </div>

      <div className="lg:w-[1024px] m-auto">
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
        <AllCard
          img={"/spotify.svg"}
          title={"Shopify website design"}
          text={
            "We help you set up and optimize your online store for a seamless shopping experience."
          }
          color={"text-[#5E8E3E]"}
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
          deebeephil@gmail.com
        </p>
      </footer>
    </main>
  );
}
