const PaisCard = ({ pais }) => {
  return (
    <>
      <img className="pais-card-img" src={pais.flag} alt="Imagen del pais" />
      <div className="card-padding">
        <h2>{pais.name}</h2>

        {pais.population && (
          <p className={"pais-card-parrafo"}>
            Population:{" "}
            <span className={"pais-card-p-span"}>
              {pais.population.toLocaleString()}
            </span>
          </p>
        )}
        {pais.region && (
          <p className={"pais-card-parrafo"}>
            Region: <span className={"pais-card-p-span"}>{pais.region}</span>
          </p>
        )}

        {pais.capital && (
          <p className={"pais-card-parrafo"}>
            Capital: <span className={"pais-card-p-span"}>{pais.capital}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default PaisCard;
