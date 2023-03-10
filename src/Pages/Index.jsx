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
  const [paisesFiltrados, setPaisesFiltrados] = useState([1]);

  const [selectFilter, setSelectFilter] = useState("");

  useEffect(() => {
    if (inputFilter) {
      const filtrarPais = paisesInformacion.filter(
        (pais) =>
          pais.name.toLowerCase().includes(inputFilter.toLowerCase()) &&
          pais.region.toLowerCase().includes(selectFilter.toLowerCase())
      );
      setPaisesFiltrados(filtrarPais);
    }
  }, [inputFilter, selectFilter]);

  return (
    <>
      <Outlet />
      <div className="contenedor">
        <div className="buscadores-responsive">
          <select
            id="select"
            className="select-region"
            onChange={(e) => setSelectFilter(e.target.value)}
          >
            <option value="">Select by Region</option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
          <div className="buscador">
            <AiOutlineSearch size={"1.5rem"} />
            <input
              onChange={(e) => setInputFilter(e.target.value)}
              value={inputFilter}
              id={"input-buscador"}
              type="text"
              placeholder="Search for a country..."
            />
            <p className="buscador-eliminar" onClick={() => setInputFilter("")}>
              X
            </p>
          </div>
        </div>
        <main className="grid">
          {inputFilter.length >= 1 &&
            paisesFiltrados.map((pais, index) => (
              <section key={index} className=" pais-card">
                <Link to={`/pais/${pais.name}`} state={pais}>
                  <PaisCard pais={pais} />
                </Link>
              </section>
            ))}

          {!inputFilter &&
            paisesInformacion.map((pais, index) => (
              <section key={index} className=" pais-card">
                <Link to={`/pais/${pais.name}`} state={pais}>
                  <PaisCard pais={pais} />
                </Link>
              </section>
            ))}
        </main>
        {paisesFiltrados.length === 0 && (
          <h2 className="error">
            The selected country does not exist or is not in that region.
          </h2>
        )}
      </div>
    </>
  );
};

export default Index;
