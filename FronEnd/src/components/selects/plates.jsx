import React, { useEffect, useState } from 'react';
import { url, user } from "../../globals";
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2';


export default function SelectTags({ onChange }) {
  const [getDataPlate, setDataPlate] = useState([]);
  
  useEffect(() => {
    axios.get(`${url}/vehicule/vehiculeAll/`, user)
      .then((response) => {
        setDataPlate(response.data); // Asegúrate de usar response.data
      })
      .catch((error) => {
        Swal.fire(error.response.data);
      });
  }, []);

  return (
    <select id="plate" className="swal2-input" onChange={(e) => onChange(e.target.value)}>
        <option value="">Seleccione una placa</option>
        {getDataPlate.map((plate) => (
            <option key={plate.id} value={plate.placa}>
                {plate.placa} - {plate.tipo}
            </option>
        ))}
    </select>
);
};