const PaisCard = ({ pais }) => {
  return (
    <section className="pais-card">
      <img className="pais-card-img" src={pais.flag} alt="Imagen del pais" />
      <h2>{pais.name}</h2>
      <p className={"pais-card-parrafo"}>
        Population:{" "}
        <span className={"pais-card-p-span"}>{pais.population.toLocaleString()}</span>
      </p>
      <p className={"pais-card-parrafo"}>
        Region: <span className={"pais-card-p-span"}>{pais.region}</span>
      </p>
      <p className={"pais-card-parrafo"}>
        Capital: <span className={"pais-card-p-span"}>{pais.capital}</span>
      </p>
    </section>
  );
};

export default PaisCard;
