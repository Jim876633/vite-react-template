import {
  BaseQueryFn,
  FetchArgs,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://pokeapi.co/api/v2/pokemon";

type pokemonType = {
  results: Array<{
    name: string;
    url: number;
  }>;
};

type pokemonDetailType = {
  sprites: {
    front_shiny: string;
  };
};

// type ResponseType<T> = {
//   results: T;
// };

type ResponseErrorType = {
  message: string;
};

// 客製化 baseQuery 以處理錯誤訊息
const customBaseQuery: BaseQueryFn<string | FetchArgs, unknown> = async (
  args,
  api,
  extraOptions
) => {
  const result = await fetchBaseQuery({ baseUrl })(args, api, extraOptions);
  if (result.error) {
    const { data } = result.error;
    const errorData = data as ResponseErrorType;
    alert(errorData.message);
  }
  console.log(result);
  // if (result.data) {
  //   const responseData = result.data as ResponseType<unknown>;
  //   result.data = responseData.results;
  // }
  return result;
};

export const pokemonApi = createApi({
  reducerPath: "itemListApi",
  baseQuery: customBaseQuery,
  tagTypes: ["pokemon"],
  endpoints: (builder) => ({
    getPokemonList: builder.query<pokemonType, void>({
      query: () => "/",
      providesTags: ["pokemon"],
    }),
    getPokemonDetail: builder.query<pokemonDetailType, string>({
      query: (name) => `/${name}`,
      providesTags: ["pokemon"],
    }),
    // addItem: builder.mutation<pokemonType[], pokemonType>({
    //   query: (item) => ({
    //     url: "/add",
    //     method: "POST",
    //     body: item,
    //   }),
    //   invalidatesTags: ["pokemon"],
    // }),
  }),
});

export const { useGetPokemonListQuery, useGetPokemonDetailQuery } = pokemonApi;
