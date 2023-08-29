/* eslint-disable @typescript-eslint/no-restricted-imports */
import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "@/store";

/**
 * 自訂 useAppSelect 使用 RootState type。
 */
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useAppSelector;
