import data from "../data/data.json";
import { Outlet, useLoaderData } from "react-router-dom";
import PaisCard from "../components/PaisCard";
export function loader() {
  return data;
}
const Index = () => {
  const paisesInformacion = useLoaderData();

  return (
    <>
      <Outlet />
      {paisesInformacion.map((pais,index) => <PaisCard key={index} pais={pais} />)}
      
    </>
  );
};

export default Index;
