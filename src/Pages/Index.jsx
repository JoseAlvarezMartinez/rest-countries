import data from "../data/data.json";
import { Outlet, useLoaderData, Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import PaisCard from "../components/PaisCard";
import { useState, useEffect } from "react";
export function loader() {
  return data;
}
const Index = () => {
  const paisesInformacion = useLoaderData();
  const [inputFilter, setInputFilter] = useState("");
  const [paisesFiltrados, setPaisesFiltrados] = useState([]);
  useEffect(() => {
    if (inputFilter) {
      const filtrarPais = paisesInformacion.filter((pais) =>
        pais.name.toLowerCase().includes(inputFilter.toLowerCase())
      );
      setPaisesFiltrados(filtrarPais);
    }
  }, [inputFilter]);
  return (
    <>
      <Outlet />
      <div className="buscador">
        <AiOutlineSearch size={"1.5rem"} />
        <input
          onChange={(e) => setInputFilter(e.target.value)}
          id={"input-buscador"}
          type="text"
          placeholder="Search for a country..."
        />
      </div>
      {inputFilter.length >= 1 &&
        paisesFiltrados.map((pais, index) => (
          <Link key={index} to={`/pais/${pais.name}`}>
            <PaisCard pais={pais} />
          </Link>
        ))}
      {paisesInformacion.map((pais, index) => (
        <Link key={index} to={`/pais/${pais.name}`}>
          <PaisCard pais={pais} />
        </Link>
      ))}
    </>
  );
};

export default Index;
