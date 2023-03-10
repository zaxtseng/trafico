import { motion } from 'framer-motion';
import Image from 'next/image';
import { CgArrowLongRight } from 'react-icons/cg';
import { IHeader, IHero, INav } from '../typings/home.types';
import { boyAnim, fadeInDown, girlAnim, heroTruckAnim, staggerContainer } from '../variants';
import Header from './Header';

interface IHeroProps {
  heroData: IHero;
  navData: INav[];
  headerData: IHeader;
}

const Hero = ({heroData, navData, headerData}: IHeroProps) => {
  const { title, boyImg, btnText, truckImg, girlImg } = heroData;
  
  return <section className='bg-left-top bg-no-repeat bg-hero min-h-[800px] lg:min-h-[950px] lg:mb-80'>
    {/* container */}
    <motion.div variants={staggerContainer} initial='initial' animate='animate' className="container relative mx-auto min-h-[800px] lg:min-h-[950px]">
      {/* header */}
      <motion.div className='relative z-20' variants={fadeInDown}>
        <Header headerData={headerData} navData={navData} />
      </motion.div>

      {/* title */}
      <motion.h1 variants={fadeInDown} className='h1 max-w-[740px] text-white pt-[12rem] mb-[60px]'>{title}</motion.h1>

      {/* button */}
      <motion.button whileHover={{scale: 1.05}} variants={fadeInDown} className='btn'>{btnText}
        <CgArrowLongRight className='text-[30px]' />
      </motion.button>

      {/* girl image */}
      <motion.div variants={girlAnim} className='absolute bottom-0 hidden lg:flex'>
        <Image src={girlImg} alt={''} width={206} height={495} />
      </motion.div>

      {/* truck image */}
      <motion.div variants={heroTruckAnim} className='absolute hidden lg:flex -bottom-[25%] -left-[30%]'>
        <Image src={truckImg} alt={''} width={811} height={395} />
      </motion.div>
      
      {/* boy image */}
      <motion.div variants={boyAnim} className='absolute hidden lg:flex right-[380px] bottom-0 z-10'>
        <Image src={boyImg} alt={''} width={206} height={495} />
      </motion.div>
    </motion.div>
  </section>;
};

export default Hero;
