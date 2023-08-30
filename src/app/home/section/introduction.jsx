import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <section className=" pt-20 lg:pt-32 flex flex-col lg:grid lg:grid-cols-2 ">      
        <div className=" lg:px-8 lg lg:my-60 lg:mx-60">
          <p className=" text-white pt-4 lg:pt-10 lg:text-4xl  ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hi
            illum fugiat sit itaque, suscipit blanditiis. Iusto rerum inventore
            sit. Earum commodi eligendi praesentium laborum obcaecati labore
            ratione adipisci doloribus!
          </p>
        </div>
        <div className="w-full flex justify-center  ">
          <Image
            src="/images/logos/white-logo.svg"
            width={300}
            height={200}
            alt="logo"
          />
        </div>
      </section>
    </>
  );
};

export default Introduction;
