const Background = ({children}) => {
    return (
      <main className="  opacity-90 overflow-x-hidden   bg-[url('/images/fond.jpg')]  h-1/2 lg:h-1/2 w-screen bg-no-repeat bg-cover bg-center  ">
        {children}
      </main>
    );
  };
  
  export default Background;