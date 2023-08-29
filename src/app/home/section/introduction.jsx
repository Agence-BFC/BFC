import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <section className="pt-20 lg:pt-32">
        <h2 className="flex w-full justify-center py-2 text-amber-950 text-2xl lg:text-6xl ">
          Introduction :
        </h2>
        <div className="items-center lg:py-16 lg:grid lg:grid-cols-2 mx-3 lg:mx-14">
          <p className="flex flex-row items-start text-white  pt-2 text-start lg:pt-6 lg:text-4xl ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hi illum fugiat sit itaque, suscipit blanditiis. Iusto rerum inventore
            sit. Earum commodi eligendi praesentium laborum obcaecati labore
            ratione adipisci doloribus!
          </p>
        <div className="w-full flex justify-center ">
        <Image src="/images/logos/white-logo.svg"
        width={160}
        height={160}
        alt="logo"
        />
        </div>
        </div>
      </section>
    </>
  );
};

export default Introduction;
