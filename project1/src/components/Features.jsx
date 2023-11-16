import featuredImg from "../assets/feature.png";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

function Features() {
  return (
    <div className="my-24 px-4 mx-auto max-w-screen-2xl md:px-14" id="feature">
      <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
        <motion.div
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="lg:w-1/4"
        >
          <h3 className="text-3xl text-primary font-bold lg:w-1/2 mb-3">
            Why we are better than others
          </h3>
          <p className="text-base text-tertiary">
            A simple paragraph is comprised of three major components. The first
            sentence, which is often a declarative sentence, is called the
            “topic sentence.”
          </p>
        </motion.div>
        {/* Featured Card */}
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="w-full lg:w-3/4"
        >
          <div className="grid grid-cols-1 items-start md:gap-12 md:grid-cols-3 gap-8 sm:grid-cols-2 ">
            <div className="bg-[background: #FFFFFF0A] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convenient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[background: #FFFFFF0A] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer md:mt-16">
              <div>
                <img src={featuredImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convenient study schedule
                </h5>
              </div>
            </div>
            <div className="bg-[background: #FFFFFF0A] rounded-[35px] h-96 shadow-3xl p-8 items-center flex justify-center hover:translate-y-4 transition-all duration-300 cursor-pointer">
              <div>
                <img src={featuredImg} alt="" />
                <h5 className="text-2xl font-semibold text-primary px-5 text-center mt-5">
                  Convenient study schedule
                </h5>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
