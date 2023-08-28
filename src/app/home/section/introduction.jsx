import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <section className="pt-24">
        <h2 className="flex w-full justify-center py-2 text-amber-950 text-2xl lg:text-6xl ">
          Introduction :
        </h2>
        <div>
          <p className="flex flex-row items-start lg:grid grid-cols-2 text-white   pt-2 text-start mx-3 lg:text-3xl">
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
