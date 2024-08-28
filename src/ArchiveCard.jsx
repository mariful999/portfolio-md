import { FaFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
const ArchiveCard = ({ project }) => {
  return (
    <a href={project?.link} target="blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-4 group:">
        <div className="flex justify-between items-center">
          <FaFolder className="text-4xl text-designColor" />
          <RxOpenInNewWindow className="text-2xl hover:text-designColor" />
        </div>
        <div>
          <h2 className="text-xl font-semibold tracking-wide hover:text-designColor duration-300">
            {project?.title}
          </h2>
          <p className="text-sm mt-3">{project?.description}</p>
        </div>
        <ul className="text-sm  text-darkText flex items-center gap-2 justify-between font-bold ">{project?.listItem.map((item)=>(<li key={item}>{item}</li>))}</ul>
      </div>
    </a>
  );
};

export default ArchiveCard;
