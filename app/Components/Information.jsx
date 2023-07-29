import React from "react";

const Information = ({ data }) => {
  return (
    <div className=" mt-4  text-teal-700">
      <h2 className=" flex text-3xl  mb-3 justify-center">{data.name}</h2>
      <table className="w-full table-auto">
        <tbody className="divide-y divide-teal-300">
          <tr className="">
            <td className="">Temperatura: </td>
            <td className="">{parseInt(data.main.temp)} ºC</td>
          </tr>
          <tr className="">
            <td>Descrição: </td>
            <td className="capitalize">{data.weather[0].description} </td>
          </tr>
          <tr className="">
            <td>Sensação: </td>
            <td className="capitalize">{parseInt(data.main.feels_like)} ºC</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Information;
