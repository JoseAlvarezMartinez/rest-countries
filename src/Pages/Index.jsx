import data from "../data/data.json";
import { Outlet, useLoaderData } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import PaisCard from "../components/PaisCard";
import { useEffect } from "react";
export function loader() {
  return data;
}
const Index = () => {
  const paisesInformacion = useLoaderData();

  return (
    <>
      <Outlet />
      <div className="buscador">
        <AiOutlineSearch size={"1.5rem"} />
        <input id={"input-buscador"} type="text" placeholder="Search for a country..." />
      </div>
      {paisesInformacion.map((pais, index) => (
        <PaisCard key={index} pais={pais} />
      ))}
    </>
  );
};

export default Index;
