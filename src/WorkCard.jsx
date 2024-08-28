import { TiArrowForward } from "react-icons/ti";
import { motion } from "framer-motion";
function WorkCard({ JobTitle, jobTag, Date, detailsOne }) {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.1}}>
      <h3 className="text-xl font-medium flex gap-1">
        {JobTitle}{" "}
        <span className="text-designColor tracking-wide font-bold">
          {jobTag}
        </span>
      </h3>
      <p className=" text-sm mt-2 font-medium text-darkText">{Date}</p>
      <ul className="mt-4 ">
        <li className="flex gap-2 text-darkText">
          <span>
            <TiArrowForward className="text-designColor mt-1" size={20} />
          </span>
          {detailsOne}
        </li>
      </ul>
    </motion.div>
  );
}

export default WorkCard;
