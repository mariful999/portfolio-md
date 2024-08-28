import { mariful } from "./assets";
import Container from "./Container";
import SectionTitle from "./SectionTitle";
import { FaCode } from "react-icons/fa6";

function About() {
  const textArray = [
    { title: "javaScript", link: "https://www.w3schools.com/js/" },
    { title: "Tailwind CSS", link: "https://tailwindcss.com/" },
    { title: "Vite", link: "https://vitejs.dev/" },
    {
      title: "React js",
      link: " https://reactrouter.com/en/main/start/tutorial",
    },
    {
      title: "Node js",
      link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
    },
  ];
  return (
    <Container id="about" className=" py-10 lg:py-24 flex flex-col gap-8">
      <SectionTitle titleNo="01" title="About me" />
      <div className="flex flex-col lg:flex-row gap-16">
        <div className="w-full lg:w-2/3 text-darkText font-medium flex flex-col gap-4">
          <p>
            Hello! My name is MD Mariful islam and I enjoy creating things that
            live on the internet. My interest in web development started back in
            2012 when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className="pt-4">
            Fast-forward to today, and I had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Odio rem accusantium fugiat veritatis, quidem
            repellat ab natus possimus? Sint, accusamus!
          </p>
          <p className="pt-6">
            Here are a few technologies I have been working with recently:
          </p>
          <div className="max-w-[450px] text-sm  grid  grid-cols-2 gap-2 mt-6">
            {textArray.map((item) => (
              <a
                key={item.title}
                href={item?.link}
                className="flex items-center gap-2 hover:text-white/80 duration-200 group font-semibold"
              >
                <FaCode className="text-designColor/80 group-hover:text-designColor" />
                {item.title}
              </a>
            ))}
          </div>
        </div>
        <div className="w-full  lg:w-1/3 relative lg:relative group">
          <div className="  lg:absolute w-full -left-6 -top-6 rounded-lg">
            <div className="w-full h-full z-20 flex pl-6 lg:pl-0">
              <img
                className=" rounded-lg h-full object-cover w-3/4 "
                src={mariful}
                alt="profile img"
              />
            </div>
          </div>
          <div className=" hidden lg:inline-flex w-80 h-96 border-2 border-designColor rounded-md group-hover:-translate-x-6 group-hover:-translate-y-6 transition-transform duration-300"></div>
        </div>
      </div>
    </Container>
  );
}

export default About;
