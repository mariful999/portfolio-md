import Header from "./Header";
import "./App.css";
import Banner from "./Banner";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";
import Archive from "./Archive";
import ScrollBtn from "./ScrollBtn";
import LeftSide from "./LeftSide";
import { motion } from "framer-motion";

function App() {
  return (
    <main className="bg-primaryColor text-lightTest font-bodyFont">
      <Header></Header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 1.5 }}
        className="hidden lg:inline-flex w-32 h-full fixed left-0 bottom-0"
      >
        <LeftSide></LeftSide>
      </motion.div>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Project></Project>
      <Archive></Archive>
      <Contact></Contact>
      <ScrollBtn></ScrollBtn>
    </main>
  );
}

export default App;
