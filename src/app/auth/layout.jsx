const LoginLayout = ({ children }) => {
  return (
    <div className="flex justify-center sm:w-[350px] md:w-full md:h-screen px-10">
      {children}
    </div>
  );
};

export default LoginLayout;
