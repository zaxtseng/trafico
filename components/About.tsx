import { motion } from "framer-motion";
import Image from "next/image";
import { IAbout } from "../typings/home.types";
import { fadeInDown, fadeInUp, staggerTextContainer } from "../variants";

const About = ({ aboutData }: { aboutData: IAbout }) => {
  const { text, title, subtitle, boyImg } = aboutData;
  return (
    <section className="mb-[60px] lg:mb-[160px]">
      <div className="container mx-auto">
        <motion.div
          variants={staggerTextContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.6 }}
          className="flex flex-col lg:flex-row gap-x-[20px]"
        >
          {/* text */}
          <motion.div variants={fadeInDown} className="flex-1 mt-[74px]">
            <h3 className="h3">{title}</h3>
            <p className="lead max-w-[470px] mb-[70px]">{subtitle}</p>
            {/* textbox */}
            <div className="bg-accent/10 border-1-[10px] border-accent max-w-[570px] h-[160px] flex items-center justify-center mb-8 lg:mb-0">
              <p className="text-[20px] leading-normal lg:text-[24px] lg:leading-[32px] font-medium max-w-[320px] lg:max-w-[460px]">
                {text}
              </p>
            </div>
          </motion.div>
          {/* image */}
          <motion.div variants={fadeInUp} className="flex-1">
            <Image src={boyImg} width={375} height={480} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
