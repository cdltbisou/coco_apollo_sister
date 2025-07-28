import Image from "next/image";
import Apollo from "../assets/apollo.jpg";

export const Homepage = () => {
  return (
    <main className="grid grid-cols-12 gap-24">
      <div className="h-screen col-start-1 col-span-full grid grid-cols-subgrid grid-rows-[2fr_1fr]">
        <h1 className="col-start-2 col-span-6 text-[224px] italic leading-[218px] self-end z-1 text-gray-800">
          <span className="">liste de</span>
          <br />
          <span className="">naissance</span>
        </h1>

        <nav className="col-start-2 col-span-7 row-start-2 pl-56">
          <ul className="font-heading text-48 text-gray-800">
            <li>voir la liste</li>
            <li>proposer un prénom</li>
            <li>pronostics naissance</li>
          </ul>
        </nav>
        <Image
          className="sticky top-0 col-start-8 col-span-5 h-screen w-[46vw] z-0 row-span-full"
          alt="couoco"
          src={Apollo}
          width={2268}
          height={4032}
        />
      </div>
      
      <div>catégories</div>
<div className="gird">
  <div className="border border-red-600">
    card
  </div>
</div>
    </main>
  );
};
