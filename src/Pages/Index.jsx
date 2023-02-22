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

  const [selectFilter,setSelectFilter] = useState("")

  useEffect(() => {
    if (inputFilter) {
      const filtrarPais = paisesInformacion.filter((pais) =>
        pais.name.toLowerCase().includes(inputFilter.toLowerCase()) && pais.region.toLowerCase().includes(selectFilter.toLowerCase())
      );
      setPaisesFiltrados(filtrarPais);
    }
  }, [inputFilter,selectFilter]);

  return (
    <>
      <Outlet />
      <select className="select-region" onChange={(e) => setSelectFilter(e.target.value)}>
        <option value="">Select by Region</option>
        <option className="probando" value="africa">Africa</option>
        <option value="americas">America</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
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
