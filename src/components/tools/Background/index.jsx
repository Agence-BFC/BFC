const Background = ({children}) => {
    return (
      <main className=" overflow-x-hidden bg-[url('/images/concept.jpg')] h-1/2 lg:h-screen w-screen bg-no-repeat bg-cover bg-center ">
        {children}
      </main>
    );
  };
  
  export default Background;