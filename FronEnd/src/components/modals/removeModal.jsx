import { randomGenerate } from "../../components/random/randomIndex";
import Swal from 'sweetalert2';
import { url } from "../../globals";
import axios from 'axios';


export default async function RemoveModel({title, urlRoute, data}){
    let randomCreate = randomGenerate();

    const { value: randomSend } = await Swal.fire({
        title: title,
        input: "text",
        html: `Ingrese el siguiente código <strong>${randomCreate}</strong> para eliminar (${data.name})`,
        inputPlaceholder: `Ingrese el código`,
        confirmButtonText: "Eliminar",
        confirmButtonColor: "red"
      });

      if (randomSend) {
        if (randomSend === randomCreate) {
        await axios.delete(url + urlRoute, {data: {id: data.id, name: data.name}})
            .then((result) => {
                Swal.fire(result.data.message)
            })
            .catch((error) => {
                Swal.fire(error.response.data.message);
            });
        } else {
            Swal.fire({
                title: "Error de validación",
                text: "Los códigos no coinciden",
                icon: "error"
            });
        }
      } else if (randomSend === "") {
        Swal.fire({
            title: "Error de validación",
            text: "Debe digitar el código para continuar",
            icon: "error"
        });
      }
}