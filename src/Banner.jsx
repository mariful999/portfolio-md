import { motion } from "framer-motion";
import Container from "./Container";
import Typewriter from "typewriter-effect";

function Banner() {
  const stringArray = [
    "I build things for the web",
    "Passionate web developer",
    "Love to learn new ideas",
  ];
  return (
    <Container
      id="home"
      className="py-10 md:py-24  flex-col gap-4 lg:gap-8 md:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-lg font-semibold tracking-wide text-designColor"
      >
        hi, my name is{" "}
      </motion.h3>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lg:text-6xl font-bold flex flex-col py-3"
      >
        Md Mariful Islam
        <span className="text-darkText font-semibold mt-2 sm:mt-4">
          <Typewriter
            options={{
              strings: stringArray,
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="md:mx-w-[650px] text-darkText font-bold leading-7  py-10 "
      >
        I am a web developer with 4+ years of experience in React. I have a
        strong foundation in front-end & back-end development and am skilled in
        creating user-friendly and responsive web applications using React and
        its ecosystem.
        <a href="https://www.facebook.com/mdmugdho.mugdho.31?mibextid=JRoKGi" target="blank">
          <span className="font-bold text-designColor cursor-pointer ">
            Learn more
          </span>
        </a>
      </motion.p>
      <motion.a
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        href="https://github.com/mariful999"
        target="blank"
        className="w-52 h-14 text-designColor  font-bold border border-designColor hover:bg-hoverColor rounded-md  duration-500 p-3 flex items-center justify-center"
      >
        check my project!
      </motion.a>
    </Container>
  );
}

export default Banner;
