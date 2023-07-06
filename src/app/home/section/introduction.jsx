import Image from "next/image";

const Introduction = () => {
  return (
    <>
      <div className="flex flex-row w-full justify-center">
        <Image src="/images/25336.svg" width={400} height={20} alt="Code" />
      </div>
      <h2 className="flex w-full justify-center py-2 text-amber-900 text-2xl">
        Introduction :
      </h2>
      <section className="flex flex-row items-start">
        <div>
          <p className="text  pt-2 text-start">
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
