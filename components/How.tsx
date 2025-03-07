import { motion } from "framer-motion";
import Image from "next/image";
import { IHow } from "../typings/home.types";
import { fadeInLeft, fadeInRight, staggerTextContainer } from "../variants";

const How = ({ howData }: { howData: IHow }) => {
  const { title, subtitle, girlImg } = howData;

  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-10 items-center"
        >
          {/* Image */}
          <motion.div variants={fadeInRight} className="flex-1">
            <Image src={girlImg} width={720} height={678} alt="" />
          </motion.div>
          {/* text */}
          <motion.div variants={fadeInLeft} className="flex-1 flex justify-end">
            <div className="max-w-[4555px]">
              <h3 className="h3">{title}</h3>
              <p className="lead">{subtitle}</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default How;
