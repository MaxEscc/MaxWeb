import React,{useState} from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,

  FaJava,
  FaPhp,
} from "react-icons/fa";

import {
  SiNextdotjs,
SiAdobepremierepro,
  SiAdobephotoshop,
  SiCsharp
  
} from "react-icons/si";


//  data
export const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: [
          <FaHtml5 key="html5" />,
          <FaCss3 key="css3" />,
          <FaJs key="javascript" />,
          <FaReact key="react" />,
          <SiNextdotjs key="nextjs" />,
          <FaJava key="java" />,
          <FaPhp key="ph" />,
          <SiCsharp key="premier" />,
        ],
      },
      {
        title: 'UI/UX Design',
        icons: [
       
          <SiAdobepremierepro key="premier" />,
         
        ]
      },
    ],
  },
  //{
   // title: 'awards',
    //info: [
      //{
        //title: 'Webby Awards - Honoree',
        //stage: '2011 - 2012',
     // },
      //{
        //title: 'Adobe Design Achievement Awards - Finalist',
        //stage: '2009 - 2010',
      //},
    //],
  //},
  {
    title: 'experience',
    info: [
      {
        title: 'API Developer - Escape Tours',
        stage: '2023 - 2023',
      },
      {
        title: ' (POS) Developer - Pizza Shop',
        stage: '2019 - 2020',
      },
      {
        title: 'Web Developer - academic project',
        stage: '2020 -2021 ',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'software engineer - Universida Estatal de sonora (Carrera a fin - en pausa)',
        stage: '2022',
      },
      {
        title: 'Tecnico en Programacion - Centro de de bachillerato tecnológico industrial y de servicios #64',
        stage: '2017',
      },
    
    ],
  },
];

//components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'


//FRAMER MOTION 
import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';

//counters
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex]=useState(0);
  console.log(index);
  return(
   <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
<Circles/>
{/* avatar imag*/}
<motion.div
 variants={fadeIn('right', 0.2)}
 initial='hidden'
  animate='show'
   exit='hidden'
   className="hidden xl:flex absolute bottom-0 -left-[370px]"
   >
    
    <Avatar />
</motion.div>
<div className="container mt-9 mx-auto h-full flex flex-col items-center xl:flex-row 
gap-x-6">
  {/* text */}
  <div className="flex-1 flex flex-col justify-center">
    <motion.h2 
    variants={fadeIn('right',0.2)}
    initial="hidden"
    animate="show"
    exit="hidden"
    className="h2"
    >
        <span className="text-accent">Conoce </span>Mi Perfil.
       

    </motion.h2>
    <motion.p
       variants={fadeIn('right',0.2)}
       initial="hidden"
       animate="show"
       exit="hidden"
     className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
     >
    Programador con amplia experiencia en el desarrollo
     de software.Mi expertise abarca desde el desarrollo
       web, aplicaciones móviles hasta la
      producción de juegos 2D en Unity.
      </motion.p>
        {/* counters */}
        <motion.div
           variants={fadeIn('right',0.6)}
           initial="hidden"
           animate="show"
           exit="hidden"
           className="hiddem md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
        >
          <div className="flex flex-1 xl:gap-x-6">  
                 {/* Experience */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0"> 
            <div className="text-2xl xl:text-4xñ font-extrabold text-accent mb-2">
              <CountUp start={0} end={3} duration={0}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
            [100px]">
               Years of rxpirence</div>
            </div>
            
            {/* clients */}
            {/*<div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0"> 
            <div className="text-2xl xl:text-4xñ font-extrabold text-accent mb-2">
              <CountUp start={0} end={250} duration={5}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
            [100px]">
               clients satisfaccion
               </div>
            </div>*/}
             {/* awardas */}
            <div className="relative flex-1 after:w-[1px] after:h-full
            after:bg-white/10 after:absolute after:top-0 after:right-0"> 
            <div className="text-2xl xl:text-4xñ font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={2}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
            [100px]">
               courses
               </div>
            </div>
                  {/* projects */}
                  <div className="relative flex-1"> 
            <div className="text-2xl xl:text-4xñ font-extrabold text-accent mb-2">
              <CountUp start={0} end={10} duration={5}/> +
            </div>
            <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-
            [100px]">
              projects
               </div>
            </div>
          </div>
        </motion.div>
  </div>
    {/* info */}
  <motion.div
  variants={fadeIn('left',0.4)}
  initial='hidden'
  animate="show"
  exit='hidden'
  className="flex flex-col w-full xl:max-w-[48%] h-[48%]">
    <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'> 
      {aboutData.map((item, itemIndex) => {
        return (
          <div
            key={itemIndex}
            className={`
              ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-0'}
              cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0
            `}
            onClick={() => setIndex(itemIndex)}
          >
            {item.title}
        </div>
    );
     })}
      </div>
      <div className=" py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4
      items-center xl:items-start">
        {aboutData[index].info.map((item, itemIndex) =>{
          return (
          <div key ={itemIndex}
          className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2
           items-center text-white/60"
          >
          
            {/* title */}
            <div className="font-light mb-2 md:mb-0">{item.title}</div>
            <div className="hidden md:flex">-</div>
            <div>{item.stage}</div>
            <div className="flex gap-x-4">
            {/* icons */}
            {item.icons?.map((icon, itemIndex)=>{
              return<div key={itemIndex} className="text-2xl text-white">{icon}</div>
            })}
            </div>
          </div>
          ); 
        })}
      </div>
     </ motion.div>
    </div>
   </div>
  );
};

export default About;
