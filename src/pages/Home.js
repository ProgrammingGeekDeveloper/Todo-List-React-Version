import { useQuery } from "@tanstack/react-query"
import axios from "axios";
export const Home = () => {
  const {data, isLoading, isError, refetch} = useQuery(['cat'], () => {
   return  axios.get('https://catfact.ninja/fact').then ((res) => res.data);
  } );


  if (isLoading) {

    return <h1>Loading..</h1>
  }

  return (
  <>
  <h1>This Is the Home Page and user is <p>{data?.fact}</p> </h1>

  <button onClick={refetch}>Update Data</button>

  </>

  );
  

};