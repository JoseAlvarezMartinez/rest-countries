import { useNavigate, useLocation } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

const PaisDetalle = () => {
  const navigate = useNavigate();
  const location = useLocation().state;
  return (
    <>
      <header>
        <h1>Where in the world?</h1>
      </header>
      <main className="contenedor-pais">
        <button className="volver-btn" onClick={() => navigate("/")}>
          {" "}
          <AiOutlineArrowLeft /> Back
        </button>
        <div className="tablet-design">
          <img src={location.flag} className={"pais-card-img"} alt="" />
          <div className="testing">
            <h2>{location.name}</h2>

            <div className="informacion-tablet">
              <div>
                <p className="pais-card-parrafo">
                  Native Name:{" "}
                  <span className="pais-card-p-span">
                    {location.nativeName}
                  </span>
                </p>
                <p className="pais-card-parrafo">
                  Population:{" "}
                  <span className="pais-card-p-span">
                    {location.population.toLocaleString()}
                  </span>
                </p>
                <p className="pais-card-parrafo">
                  Region:{" "}
                  <span className="pais-card-p-span">{location.region}</span>
                </p>
                <p className="pais-card-parrafo">
                  Sub Region:{" "}
                  <span className="pais-card-p-span">{location.subregion}</span>
                </p>
                <p className="pais-card-parrafo">
                  Capital:{" "}
                  <span className="pais-card-p-span">{location.capital}</span>
                </p>
              </div>

              <div className="topLevel">
                <p className="pais-card-parrafo">
                  Top Level Domain:{" "}
                  <span className="pais-card-p-span">
                    {location.topLevelDomain}
                  </span>
                </p>
                <p className="pais-card-parrafo">
                  Currencies:{" "}
                  <span className="pais-card-p-span">
                    {location.currencies[0].name}
                  </span>
                </p>
                <p className="pais-card-parrafo">
                  Languages:{" "}
                  <span className="pais-card-p-span">
                    {location.languages.map((idioma, index) => (
                      <span key={index}> {idioma.name} </span>
                    ))}
                  </span>
                </p>
              </div>

        
                {location.borders && (
                  <>
                    <h3 className="border-countries">Border Countries:</h3>
                    <div className="limitrofes-paises">
                      {location.borders &&
                        location.borders.map((limitrofe, index) => (
                          <p className="limitrofes" key={index}>
                            {limitrofe}
                          </p>
                        ))}
                    </div>
                  </>
                )}
            
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaisDetalle;
