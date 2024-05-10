import Location from "@/components/Location/Location";
import NavBar from "@/components/NavBar/NavBar";
import Image from "next/image";

const LandinPage = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <div className="h-[400px] mt-12 md:mt-24">
        <Image
          src="/images/Restaurant.jpg"
          alt="restaurante"
          width={1200}
          height={900}
          className="w-full h-[400px]"
        />
      </div>
      <div className="flex justify-center mt-12">
        <p className="text-orange-700 text-lg md:text-xl font-semibold">
          Restaurante Carl&#39;s & Cafe
        </p>
      </div>
      <div className="flex justify-center mt-5">
        <p className="text-orange-700 text-lg md:text-2xl font-bold">
          Platillos, Postres y mucho mas.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 lg:mt-12">
        <div className="w-full h-full">
          <Image
            src="/images/platillo1.jpg"
            alt="platillo1"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="block px-10">
          <p className="text-orange-700 font-bold text-lg text-center">
            Estofado de res
          </p>
          <div>
            <p className="text-gray-700 font-semibold text-xs md:text-base mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              facilis voluptate exercitationem officia, est eligendi tempore,
              cum explicabo sapiente impedit odio similique minus dolore enim
              ipsam nulla. Numquam, voluptas iste. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/platillo2.jpg"
            alt="platillo1"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="block px-10">
          <p className="text-orange-700 font-bold text-lg text-center">
            Lomo de res asado
          </p>
          <div>
            <p className="text-gray-700 font-semibold text-xs md:text-base mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              facilis voluptate exercitationem officia, est eligendi tempore,
              cum explicabo sapiente impedit odio similique minus dolore enim
              ipsam nulla. Numquam, voluptas iste. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <div className="w-full h-full">
          <Image
            src="/images/platillo3.jpg"
            alt="platillo1"
            width={300}
            height={300}
            className="w-full h-full"
          />
        </div>
        <div className="block px-10">
          <p className="text-orange-700 font-bold text-lg text-center">
            Chuleton de res
          </p>
          <div>
            <p className="text-gray-700 font-semibold text-xs md:text-base mt-2">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque
              facilis voluptate exercitationem officia, est eligendi tempore,
              cum explicabo sapiente impedit odio similique minus dolore enim
              ipsam nulla. Numquam, voluptas iste. Lorem ipsum dolor sit amet
              consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandinPage;
