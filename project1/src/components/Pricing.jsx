import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: "Start",
      monthlyPrice: 19,
      YearlyPrice: 200,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/circle1.png",
    },
    {
      name: "Advance",
      monthlyPrice: 49,
      YearlyPrice: 500,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/circle1.png",
    },
    {
      name: "Premium",
      monthlyPrice: 99,
      YearlyPrice: 1000,
      description:
        "A common form of Lorem ipsum reads: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      green: "/src/assets/circle1.png",
    },
  ];

  return (
    <div className="md:px-14 p-4 max-w-s mx-auto py-10" id="pricing">
      <div className="text-center">
        <h2 className="text-primary text-3xl font-extrabold mb-2 md:text-5xl">
          Here are all our plans
        </h2>
        <p className="text-tertiary md:w-1/3 mx-auto px-4">
          A simple paragraph is comprised of three major components. The which
          is often a declarative sentence.
        </p>

        {/* Toggle Pricing */}
        <div className="mt-16">
          <label
            htmlFor="toggle"
            className="inline-flex items-center cursor-pointer"
          >
            <span className="mr-8 font-semibold text-2xl">Monthly</span>
            <div className="w-14 h-6 bg-gray-300 rounded-full transition duration-200 ease-in-out">
              <div
                className={`w-6 h-6 rounded-full transition duration-200 ease-in-out ${
                  isYearly ? "bg-primary ml-8" : "bg-gray-500"
                } `}
              ></div>
            </div>
            <span className="ml-8 font-semibold text-2xl">Yearly</span>
          </label>
          <input
            type="checkbox"
            id="toggle"
            className="hidden"
            checked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
        </div>
      </div>

      {/* Pricing Card */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.5 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-20 md:w-11/12 mx-auto"
      >
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border shadow-3xl py-10 md:px-6 px-4 rounded-lg "
          >
            <h3 className="text-3xl text-center font-bold text-primary ">
              {pkg.name}
            </h3>
            <p className="my-5 text-center text-tertiary">{pkg.description}</p>
            <p className="mt-5 text-center text-secondary text-4xl font-bold">
              {isYearly ? `$${pkg.YearlyPrice}` : `$${pkg.monthlyPrice}`}
              <span className="text-base text-tertiary font-medium">
                /{isYearly ? "Year" : "Month"}
              </span>
            </p>
            <ul className="mt-4 space-y-2 px-4">
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Videos of Lessons
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Homework check
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Additional practical task
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Monthly conferences
              </li>
              <li className="flex items-center gap-3">
                <img src={pkg.green} alt="" className="w-4 h-4" />
                Personal advice from teachers
              </li>
            </ul>
            <div className="w-full mx-auto mt-8 flex items-center justify-center">
              <button className="btnPrimary"> Get Started </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default Pricing;
