import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-row  w-full justify-center pt-28  ">
        <Image className="lg:w-auto  " src="/images/concept-collage-html-css.svg"  width={350} height={30} Link="test" />
      </div>
      <h2 className="flex w-full justify-center py-3 text-amber-900 text-2xl">
        Introduction :
      </h2>
      <section className="flex flex-row items-start">
        <div>
          <p className="text  pt-2 text-start mx-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam hic
            illum fugiat sit itaque, suscipit blanditiis. Iusto rerum inventore
            sit. Earum commodi eligendi praesentium laborum obcaecati labore
            ratione adipisci doloribus!
          </p>
        </div>
      </section>
    </>
  );
};

export default Introduction;
