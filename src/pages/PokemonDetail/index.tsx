import { useGetPokemonDetailQuery } from "@/servers/pokemon";
import { Link, useParams } from "react-router-dom";

export const PokemonDetail = () => {
  const { name } = useParams();
  const { data, isLoading } = useGetPokemonDetailQuery(name as string);

  if (isLoading) return <div>loading...</div>;
  if (data)
    return (
      <div>
        <div>{name}</div>
        <img src={data.sprites.front_shiny} />
        <div>
          <Link to="/pokemon">back</Link>
        </div>
      </div>
    );
};
