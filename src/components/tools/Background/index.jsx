const Background = ({children}) => {
    return (
      <main className=" opacity-90 overflow-x-hidden bg-[url('/images/fond.jpg')]  h-1/2 lg:h-screen w-screen bg-no-repeat bg-cover bg-left   ">
        {children}
      </main>
    );
  };
  
  export default Background;