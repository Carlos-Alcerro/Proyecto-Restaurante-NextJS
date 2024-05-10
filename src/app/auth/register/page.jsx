import Image from "next/image";
import Link from "next/link";
import RegisterForm from "./ui/RegisterForm";

const Register = () => {
  return (
    <div className="flex justify-center md:w-full mt-20">
      <div className="md:w-3/6 ">
        <RegisterForm />
      </div>
      <div className="hidden md:block md:w-4/12">
        <Image
          className="w-full rounded-sm md:h-[530px] bg-gray-50 opacity-80"
          alt="Restaurante Login"
          src="/images/Restaurant.jpg"
          width={350}
          height={600}
        />
      </div>
    </div>
  );
};

export default Register;
