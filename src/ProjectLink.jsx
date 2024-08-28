import { TbBrandGithub } from "react-icons/tb";
import { IoLogoYoutube } from "react-icons/io";
import { RxOpenInNewWindow } from "react-icons/rx";
function ProjectLink({link}) {
  return (
    <div className="flex gap-4">
      <a href="https://github.com/settings/profile" target="blank">
        <TbBrandGithub className="hover:text-designColor duration-300 text-2xl" />
      </a>
      <a href="https://www.youtube.com/@md_mariful_999" target="blank">
        <IoLogoYoutube className="hover:text-designColor duration-300 text-2xl" />
      </a>
      <a href={link} target="blank">
        <RxOpenInNewWindow className="hover:text-designColor duration-300 text-2xl"  />
      </a>
    </div>
  );
}

export default ProjectLink;
