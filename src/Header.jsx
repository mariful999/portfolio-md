import { Link } from "react-scroll";
import { logo } from "./assets";
import { motion } from "framer-motion";
import { useRef } from "react";
import resume from "../public/resume.pdf";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const navigation = [
  { title: "home", link: "home", value: "" },
  { title: "about", link: "about", value: "01" },
  { title: "experience", link: "experience", value: "02" },
  { title: "project", link: "project", value: "03" },
  { title: "contact", link: "contact", value: "04" },
];
const Header = () => {
  const [show, setShow] = useState(false);
  // Create a ref using the useRef hook
  const resumeRef = useRef(null);

  return (
    <div className="h-20 shadow-lg shadow-designColor/10 px-4 lg:px-0 sticky top-0 z-50 bg-primaryColor">
      <div className="max-w-[1440px] mx-auto flex items-center h-full justify-between">
        <img
          src={logo}
          alt="logo"
          className="w-16 bg-designColor opacity-75 hover:opacity-100 duration-300 cursor-pointer"
        />
        <div className="hidden md:inline-flex gap-7 items-center">
          <div className="flex gap-7 text-[14px]">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                to={item?.link}
                smooth={true}
                duration={500}
                offset={-80}
                className="font-medium hover:text-designColor cursor-pointer duration-300"
              >
                <button>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, delay: 0.7 }}
                    className="text-designColor mr-2"
                  >
                    {item?.value}
                    {item?.value && "."}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 3, delay: 0.7 }}
                    className="uppercase tracking-wide "
                  >
                    {item?.title}
                  </motion.span>
                </button>
              </Link>
            ))}
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 3, delay: 0.7 }}
            target="_blank"
            href={resume} // use href for link to the resume
            ref={resumeRef} // attach the ref here
            className="uppercase tracking-wide px-4 py-2 rounded-md font-medium text-designColor text-[13px border border-designColor hover:bg-hoverColor duration-300"
          >
            Resume
          </motion.a>
        </div>
        <div
          onClick={() => setShow(true)}
          className="md:hidden w-6 h-5 flex flex-col justify-between items-center cursor-pointer group overflow-hidden "
        >
          <span className=" w-full h-[2px] bg-designColor inline-flex transform group-hover:translate-x-2 transition-all duration-500" />
          <span
            className=" w-full h-[2px] bg-designColor inline-flex transform 
          translate-x-3 group-hover:translate-x-0 transition-all duration-500"
          />
          <span className=" w-full h-[2px] bg-designColor inline-flex transform   translate-x-1 group-hover:translate-x-2 transition-all duration-500" />
        </div>
        {show && (
          <div className="absolute md:hidden top-0 right-0 w-1/2  bg-primaryColor flex flex-col items-end">
            <motion.div
              inherit={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="w-[80%]  h-full overflow-y-scroll bg-primaryColor flex  flex-col items-center py-10 relative"
            >
              <MdOutlineClose
                onClick={() => setShow(false)}
                className="text-3xl text-designColor hover:text-red-700 
                absolute top-4 right-4 duration-300"
              />
              <div className="flex flex-col items-center gap-7">
                <ul className="flex flex-col text-base gap-5">
                  {navigation?.map((item) => (
                    <Link
                      key={item?.title}
                      to={item?.link}
                      smooth={true}
                      duration={500}
                      offset={-80}
                      className="font-medium hover:text-designColor text-darkText cursor-pointer duration-300"
                    >
                      <motion.li
                        inherit={{ y: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.1, delay: item?.delay }}
                      >
                        <span className="text-designColor">
                          {item?.value}
                          {item?.value && "."}
                          {""}
                        </span>
                        <span className="tracking-wide uppercase">
                          {item?.title}
                        </span>
                      </motion.li>
                    </Link>
                  ))}
                </ul>
                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 3, delay: 0.7 }}
                  target="_blank"
                  href={resume} // use href for link to the resume
                  ref={resumeRef} // attach the ref here
                  className="uppercase tracking-wide px-4 py-2 rounded-md font-medium text-designColor text-[13px border border-designColor hover:bg-hoverColor duration-300"
                >
                  Resume
                </motion.a>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
