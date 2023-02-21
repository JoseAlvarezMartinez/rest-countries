const PaisCard = ({ pais }) => {
  return (
    <section className="pais-card">
      <img src={pais.flag} alt="Imagen del pais" />
      <h2>{pais.name}</h2>
      <p>
        Population: <span>{pais.population}</span>
      </p>
      <p>
        Region: <span>{pais.region}</span>
      </p>
      <p>
        Capital: <span>{pais.capital}</span>
      </p>
    </section>
  );
};

export default PaisCard;
