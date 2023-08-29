import Home from "@/pages/Home";
import Pokemon from "@/pages/Pokemon";
import { PokemonDetail } from "@/pages/PokemonDetail";

const routerConfig = [
  { path: "/", element: <Home /> },
  {
    path: "/pokemon",
    element: <Pokemon />,
  },
  {
    path: "/pokemon/:name",
    element: <PokemonDetail />,
  },
];

export default routerConfig;
