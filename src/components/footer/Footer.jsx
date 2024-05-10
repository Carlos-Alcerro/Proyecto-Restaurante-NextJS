import Link from "next/link";
import {
  FaPhoneAlt,
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-10 bg-gray-900">
      <div className="px-0 md:px-10 py-3 md:py-10 text-white grid grid-cols-2 md:grid-cols-3 gap-3">
        <div className="block">
          <div className="text-center">
            <p className="font-semibold text-base md:text-lg">Contactos</p>
          </div>
          <div className="flex gap-3 items-center justify-center mt-3">
            <FaPhoneAlt size={15} color="white" />
            <p>+504 8788-9009</p>
          </div>
          <div className="flex gap-3 items-center justify-center mt-3">
            <FaPhoneAlt size={15} color="white" />
            <p>+504 8780-9091</p>
          </div>
          <div className="flex gap-3 items-center justify-center mt-3">
            <FaPhoneAlt size={15} color="white" />
            <p>+504 2774-3012</p>
          </div>
        </div>
        <div className="block">
          <p className="text-lg block mb-5 text-center font-semibold">
            Redes Sociales
          </p>
          <div className="flex justify-center gap-5">
            <Link href="/">
              <FaFacebookSquare size={35} color="white" />
            </Link>
            <Link href="/">
              <FaInstagramSquare size={35} color="white" />
            </Link>
            <Link href="/">
              <FaTwitter size={35} color="white" />
            </Link>
            <Link href="/">
              <FaTiktok size={35} color="white" />
            </Link>
          </div>
        </div>
        <div className="block mt-5 md:mt-0">
          <div className="">
            <Link
              href="/"
              className="text-lg block mb-5 text-center font-light hover:underline hover:underline-offset-1"
            >
              Politicas de privacidad
            </Link>
          </div>
          <div className="">
            <Link
              href="/"
              className="text-lg block mb-5 text-center font-light hover:underline hover:underline-offset-1"
            >
              Aviso legal
            </Link>
          </div>
          <div>
            <p className="text-lg block mb-5 text-center font-light">
              <span className="font-semibold text-base">Diseñador Web : </span>{" "}
              Carlos Alcerro
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
