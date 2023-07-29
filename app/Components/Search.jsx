"use client"

import React from "react";
import { WeatherData } from "../api";
import Information from "./Information";
import Error from "./Error";

const Search = () => {
  const [cidade, setCidade] = React.useState("");
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  function handleChange({ target }) {
    setCidade(target.value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const json = await WeatherData(cidade);
    if (json.cod !== 200) {
      setData(null);
      setError(json);
    } else {
      setData(json);
      setError(null);
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-row">
          <input
            type="text"
            value={cidade}
            placeholder="Nome da Cidade"
            onChange={handleChange}
            className="w-full mr-4 px-4 py-2 rounded border focus:border-teal-500 focus:outline-none"
          />
          <button className="bg-teal-800 hover:bg-teal-900 text-teal-100 px-4 py-2 rounded shadow">
            Pesquisar
          </button>
        </div>
      </form>
      {data && <Information data={data} />}
      {error && <Error />}
    </>
  );
};

export default Search;
