import { useNavigate } from "react-router-dom";

const PaisDetalle = () => {
  const navigate = useNavigate();
  return (
    <div>
      PaidDetalle
      <button onClick={() => navigate("/")}>Volver</button>
    </div>
  );
};

export default PaisDetalle;
