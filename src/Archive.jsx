import { useState,useRef } from "react";
import { projectArray } from "./ProjectArray";
import Container from "./Container";
import ArchiveCard from "./ArchiveCard";
import {motion,AnimatePresence} from "framer-motion";


function Archive() {
  const [showMore, setShowMore] = useState(false);
  const displayedArraya = showMore ? projectArray : projectArray.slice(0, 6);
  const projectContainerRef = useRef(null)
  const handelShow =()=>{
    if (showMore){
      setShowMore(false);
      projectContainerRef.current.scrollIntoView({behavior:"smooth"});
    } else{

      setShowMore(true);
    }
  };
  return (
    <Container className="py-6 max-w-5xl mx-auto ">
      <div className="py-6 flex flex-col items-center">
        <h2 className="text-3xl font-serif ">Other Noteworthy Projects</h2>
        <p className="text-sm text-designColor tracking-wide ">
          {" "}
          view the archive
        </p>
      </div>
      <div ref={projectContainerRef} className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-10">
        <AnimatePresence>
          {displayedArraya?.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ArchiveCard project={project}></ArchiveCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <div className="mt-4 flex justify-center items-center">
        <button onClick={handelShow} className="w-36 h-12 rounded-md  text-designColor  text-sm border  border-designColor  hover:bg-hoverColor duration-300 ">{showMore ? "Show Less" : "show More"}</button>
      </div>
    </Container>
  );
}

export default Archive;
