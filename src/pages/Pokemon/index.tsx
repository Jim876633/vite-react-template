import { useGetPokemonListQuery } from "@/servers/pokemon";
import { Link } from "react-router-dom";

const Pokemon = () => {
  const { data, isLoading } = useGetPokemonListQuery();

  if (isLoading) return <div>loading...</div>;
  if (data)
    return (
      <div>
        {data.results.map((item, index) => (
          <div key={index}>
            <Link to={`/pokemon/${item.name}`}>{item.name}</Link>
          </div>
        ))}
        <h2>
          <Link to="/">back</Link>
        </h2>
      </div>
    );
};

export default Pokemon;
