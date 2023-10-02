//next image
import Image from "next/image";

//components
import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from '../components/ProjectsBtn';
import Avatar from '../components/Avatar';

//framer motion
import {motion} from 'framer-motion';

//variants
 import {fadeIn} from '../variants';

const Home = () => {
  return (
   <div className='bg-primary/60 h-full'>
    {/* text */}
    <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30
    to-black/10 ">
      <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left
      h-full container mx-auto">
    {/* title */}
    <motion.h1 
      variants={fadeIn('down' ,0.2)}
      initial="hidden"
      animate="show"
      exit="hidden"
    className="h1 mt-10">
      Ingeniero <br/> en {' '}
      <span className="text-accent">software</span>
      </motion.h1> 
    {/*subtitle*/}
    <motion.p 
      variants={fadeIn('down' ,0.3)}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16 ">
    Soy un apasionado programador con amplia experiencia en el desarrollo
     de software.Mi expertise abarca desde el desarrollo
       web, aplicaciones móviles hasta la
      producción de juegos 2D en Unity. Con habilidades en una
       variedad de lenguajes, incluyendo C#, Java, Next.js, Tailwind, y 
       Spring.
       </motion.p>
       {/* btn */}
       <div className="flex justify-center xl:hidden relative z-10">
       <ProjectsBtn />
       </div>
       <motion.div 
       variants={fadeIn('down' ,0.4)} 
       initial="hidden"
       animate="show"
       exit="hidden"
       className="hidden xl:flex z-10"
       >
       <ProjectsBtn />
       </motion.div>
    </div>
  </div>
    {/*image*/}
  <div className="w-[1250px] h-full absolute right-0 bottom-0">
    {/* big img */}
    <div className='bg-none xl:bg-explosion xl:bg-bottom 
    xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'>
    </div>
      {/** particles*/}
    <ParticlesContainer />
      {/* avatar img */}
      <motion.div
       variants={fadeIn('center' ,1,5)}
       initial="hidden"
       animate="show"
       exit="hidden"
       transition={{duration:1,ease:"easeInOut"}}
      className="w-full h-full max-w-[737px] max-h-[678px] absolute -bottom32
      lg:bottom-0 lg:right-[8%]">
        <Avatar/>
      </motion.div>
     </div>
    </div>
  );
};

export default Home;
