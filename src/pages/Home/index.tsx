import reactLogo from "@/assets/react.svg";
import { increment } from "@/store/counter";
import useAppDispatch from "@/utils/hooks/useAppDispatch";
import useAppSelector from "@/utils/hooks/useAppSelect";
import { Link } from "react-router-dom";
import viteLogo from "/vite.svg";
const Home = () => {
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  const incrementHandler = () => {
    dispatch(increment());
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div>
        Router Test: <Link to="/pokemon">Pokemon</Link>
      </div>
      <div className="card">
        <button onClick={incrementHandler}>count is {value}</button>
      </div>
    </>
  );
};

export default Home;
