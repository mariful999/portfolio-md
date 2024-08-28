import { amazon, amazon2, cyber } from "./assets";
import Container from "./Container"
import ProjectLink from "./ProjectLink";
import SectionTitle from "./SectionTitle"

function Project() {
  return (
    <Container className="py-24" id="project">
      <SectionTitle
        title="Some Things I have Built"
        titleNo="03"
      ></SectionTitle>
      <div className="mt-10 flex flex-col justify-center gap-28">
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href="https://www.amazon.com/Groan-Spirit-Led-Sarah-R-Milligan/dp/B0D465VZG2/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSWkIUBqC5PoNoy_C4BN6tVxuXWankxSNDcnwtDTX7GpzWxX7hRrOrxoC1IwQAvD_BwE#detailBullets_feature_div"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={amazon}
              alt="amazon"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />

            <div className="absolute w-full h-full bg-designColor/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-500" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h1 className="text-2xl font-bold">Amazon clone 2.0</h1>
            </div>
            <p className="bg-[#112240] md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with O-auth and then
              make the purchage using{" "}
              <span className="text-designColor">stripe</span>.
            </p>
            <ul className="flex gap-4 to-darkText  ">
              <li className="hover:text-designColor font-semibold cursor-pointer">
                javaScript
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                Tailwind CSS
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                Vite{" "}
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                React js
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                {" "}
                Node js
              </li>
            </ul>
            <ProjectLink link="https://nextamazon.reactbd.com/" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <a
            href="https://www.amazon.com/Groan-Spirit-Led-Sarah-R-Milligan/dp/B0D465VZG2/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSWkIUBqC5PoNoy_C4BN6tVxuXWankxSNDcnwtDTX7GpzWxX7hRrOrxoC1IwQAvD_BwE#detailBullets_feature_div"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={cyber}
              alt="cyber"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />

            <div className="absolute w-full h-full bg-designColor/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-500" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h1 className="text-2xl font-bold">Cyber Security Blog</h1>
            </div>
            <p className="bg-[#112240] md:text-base p-2 md:p-6 rounded-md lg:-mr-16">
              A full functional Cyber Security Blog where you can view the
              latest post and comments on it by passing your ideas besides you
              can try to add your own post on it by logging on the portal.
            </p>
            <ul className="flex gap-4 to-darkText  ">
              <li className="hover:text-designColor font-semibold cursor-pointer">
                javaScript
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                Tailwind CSS
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                Vite{" "}
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                React js
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                {" "}
                Node js
              </li>
            </ul>
            <ProjectLink link="https://nextamazon.reactbd.com/" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <a
            href="https://www.amazon.com/Groan-Spirit-Led-Sarah-R-Milligan/dp/B0D465VZG2/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=&gad_source=1&gclid=CjwKCAjw1920BhA3EiwAJT3lSWkIUBqC5PoNoy_C4BN6tVxuXWankxSNDcnwtDTX7GpzWxX7hRrOrxoC1IwQAvD_BwE#detailBullets_feature_div"
            target="blank"
            className="w-full lg:w-1/2 h-auto relative group rounded-lg overflow-hidden"
          >
            <img
              src={amazon2}
              alt="amazon"
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
            />

            <div className="absolute w-full h-full bg-designColor/20 rounded-lg top-0 left-0 group-hover:bg-transparent duration-500" />
          </a>

          <div className="w-full lg:w-1/2 flex flex-col gap-6 lg:justify-between items-end text-right lg:-ml-16 z-10">
            <div>
              <p className="text-designColor text-sm tracking-wide">
                Featured Project
              </p>
              <h1 className="text-2xl font-bold">Amazon clone 2.0</h1>
            </div>
            <p className="bg-[#112240] md:text-base p-2 md:p-6 rounded-md">
              An Amazon clone website for visualizing personalized Amazon
              website. View your products, Add your account with O-auth and then
              make the purchage using{" "}
              <span className="text-designColor">stripe</span>.
            </p>
            <ul className="flex gap-4 to-darkText  ">
              <li className="hover:text-designColor font-semibold cursor-pointer">
                javaScript
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                Tailwind CSS
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                Vite{" "}
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                React js
              </li>
              <li className="hover:text-designColor font-semibold cursor-pointer">
                {" "}
                Node js
              </li>
            </ul>
            <ProjectLink link="https://nextamazon.reactbd.com/" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Project