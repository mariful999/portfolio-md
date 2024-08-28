import { MdArrowUpward } from "react-icons/md";

const ScrollBtn = () => {
  const ScrollBtn = () => {
    const scrollBtn = document.querySelector(".scrollBtn");
    console.log(scrollBtn);
  };
  return (
    <div className="fixed bottom-10 right-20  z-50 bg-darkText/40  text-lightTest/80 p-3 rounded-full cursor-pointer hover:bg-black transition duration-300 scrollBtn">
      <MdArrowUpward size={24}></MdArrowUpward>
    </div>
  );
};

export default ScrollBtn;
