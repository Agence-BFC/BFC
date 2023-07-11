import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-row w-full  justify-center  ">
        <Image className="lg:w-full " src="/images/concept-collage-html-css.svg"  width={350} height={30} Link="test" />
      </div>
      <h2 className="flex w-full justify-center py-3 text-amber-900 text-2xl lg:text-6xl">
        Introduction :
      </h2>
      <section className=" sm:flex flex-row items-start  lg:grid grid-cols-2">
        <div >
          <p className="text  pt-2 text-start mx-3 lg:text-3xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic
            illum fugiat sit itaque, suscipit blanditiis. Iusto rerum inventore
            sit. Earum commodi eligendi praesentium laborum obcaecati labore
            ratione adipisci doloribus!
          </p>
        </div>
        <div>
            <Image className="sm: hidden lg:grid  " src="images/logos/logo-black.svg" width={450} height={50} Link="agence"/>
            </div>
      </section>
    </>
  );
};

export default Introduction;
