/* eslint-disable @typescript-eslint/no-restricted-imports */
import { AppDispatch } from "@/store";
import { useDispatch } from "react-redux";

/**
 * 自訂 useAppDispatch 使用 AppDispatch type。
 */
const useAppDispatch: () => AppDispatch = useDispatch;

export default useAppDispatch;
