import Container from "./Container"

function Contact() {
  return (
    <Container
      id="contact"
      className="py-10 lg:py-24 flex flex-col  gap-4 items-center justify-center"
    >
      <p className="text-lg text-designColor font-semibold ">0.4 What Next?</p>
      <h1 className="text-5xl font-semibold">Get In Touch</h1>
      <p className="max-w-xl mx-auto text-darkText">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis,
        temporibus nam? Fugiat labore repellat pariatur repudiandae nihil vel
        laborum suscipit, id saepe dolore, itaque magni nobis reiciendis quas
        alias aperiam?
      </p>
      <a href="mdmarifulislammugdho50@gmail.com">
        {" "}
        <p className="w-40 h-14 border border-designColor font-semibold text-sm text-designColor tracking-wider rounded-md hover:bg-hoverColor duration-300 flex items-center justify-center ">Say Hello</p>{" "}
      </a>
    </Container>
  );
} 

export default Contact