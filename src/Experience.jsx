import { useState } from "react";
import Container from "./Container"
import SectionTitle from "./SectionTitle"
import WorkCard from "./WorkCard";

function Experience() {
  const [workReactBD,setWarkReactBD] = useState(true);
  const [workGoogle,setWorkGoogle] = useState(false);
  const [workApple,setWarkApple] = useState(false);
  const [workSplash,setWarkSplash] = useState(false);
  const [workAmazon,setWarkAmazon] = useState(false);

  const handleReactBD =()=>{
    setWarkReactBD(true);
    setWorkGoogle(false);
    setWarkApple(false);
    setWarkSplash(false);
    setWarkAmazon(false)
  }
  const handleGoogle =()=>{
    setWorkGoogle(true);
    setWarkApple(false);
    setWarkReactBD(false);
    setWarkSplash(false);
    setWarkAmazon(false);
  }
  const handleApple = () => {
      setWarkApple(true);
      setWorkGoogle(false);
      setWarkReactBD(false);
      setWarkSplash(false);
      setWarkAmazon(false);
    };
  const handleSplash = () => {
      setWarkSplash(true);
      setWarkApple(false);
      setWorkGoogle(false);
      setWarkReactBD(false);
      setWarkAmazon(false);
    };
    const handleAmazon = () => {
      setWarkAmazon(true);
      setWarkSplash(false);
      setWarkApple(false);
      setWorkGoogle(false);
      setWarkReactBD(false);
    };
  return (
    <Container
      id="experience"
      className="max-w-3xl mx-auto py-10 lg:py-24  gap-16"
    >
      <SectionTitle title="Where I have Worked" titleNo="02"></SectionTitle>
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={handleReactBD}
            className={`${
              workReactBD
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor to-darkText"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-3 font-medium`}
          >
            ReactBD
          </li>
          <li
            onClick={handleGoogle}
            className={`${
              workGoogle
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor to-darkText"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-3 font-medium`}
          >
            Google
          </li>
          <li
            onClick={handleApple}
            className={`${
              workApple
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor to-darkText"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-3 font-medium`}
          >
            Apple
          </li>
          <li
            onClick={handleSplash}
            className={`${
              workSplash
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor to-darkText"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-3 font-medium`}
          >
            Splash
          </li>
          <li
            onClick={handleAmazon}
            className={`${
              workAmazon
                ? "border-l-designColor text-designColor"
                : "border-l-hoverColor to-darkText"
            } border-l-2  bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-3 font-medium`}
          >
            Amazon
          </li>
        </ul>
        {workReactBD && (
          <WorkCard
            JobTitle="Engineer"
            jobTag="@ReactBD"
            Date="Jan 2023 - present"
            detailsOne="Work with a variety of different languages, platforms, frameworks, and content                           management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,and Netlify
            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis Write modern, performant, maintainable code for a diverse array of client and internal projects"
          />
        )}
        {workGoogle && (
          <WorkCard
            JobTitle="Engineer"
            jobTag="@Google"
            Date="Jan 2022 - present"
            detailsOne="Work with a variety of different languages, platforms, frameworks, and content                           management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,and Netlify
            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis Write modern, performant, maintainable code for a diverse array of client and internal projects"
          />
        )}
        {workApple && (
          <WorkCard
            JobTitle="Web Developer"
            jobTag="@Apple"
            Date="Jan 2020 - present"
            detailsOne="Work with a variety of different languages, platforms, frameworks, and content                           management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,and Netlify
            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis Write modern, performant, maintainable code for a diverse array of client and internal projects"
          />
        )}
        {workSplash && (
          <WorkCard
            JobTitle="Engineer"
            jobTag="@Splash"
            Date="Jan 2019"
            detailsOne="Work with a variety of different languages, platforms, frameworks, and content                           management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,and Netlify
            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis Write modern, performant, maintainable code for a diverse array of client and internal projects"
          />
        )}
        {workAmazon && (
          <WorkCard
            JobTitle="Engineer"
            jobTag="@Amazon"
            Date="Jan 2016"
            detailsOne="Work with a variety of different languages, platforms, frameworks, and content                           management systems such as JavaScript, TypeScript, Gatsby, React, Craft, WordPress,and Netlify
            Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis Write modern, performant, maintainable code for a diverse array of client and internal projects"
          />
        )}
      </div>
    </Container>
  );
}

export default Experience