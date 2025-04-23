import React from 'react';
import Swal from 'sweetalert2';
import SelectTags from '../selects/tags';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { url, user } from "../../globals";

const sendData = async (dataSend) => {
    await axios.post(`${url}/income`, dataSend)
        .then((result) => {
            Swal.fire(result.data);
        })
        .catch((error) => {
            Swal.fire(error.response.data);
        });
}

export default async function ShowModalIncomesAdd() {
    let selectedTags = [];

    const { value: formValues } = await Swal.fire({
        title: 'Agregar Ingreso Vehículo',
        html: `
            <input type="text" id="description" class="swal2-input" placeholder="Descripción">
            <input type="number" id="amount" class="swal2-input" placeholder="Valor">
            <div id="select-tags-container"></div>
            <div id="select-plate-container"></div>
            <textarea id="observation" class="swal2-textarea" placeholder="Observación"></textarea>
        `,
        confirmButtonText: 'Agregar',
        focusConfirm: false,
        preConfirm: () => {
            const plateInput = document.getElementById('plate');
            const descriptionInput = document.getElementById('description');
            const amountInput = document.getElementById('amount');
            const observation = document.getElementById('observation');

            if (!descriptionInput.value || !amountInput.value || selectedTags.length === 0 || !plateInput.value) {
                Swal.showValidationMessage(`Por favor, completa todos los campos.`);
            }

            return {
                description: descriptionInput.value,
                amount: amountInput.value,
                plaates: getDataPlate.map(plate => plate.value),
                tags: selectedTags.map(tag => tag.value),
                observation: observation.value
            };
        },
        didOpen: () => {
            const selectContainerTags = ReactDOM.createRoot(document.getElementById('select-tags-container'));
            const selectContainerPlates = ReactDOM.createRoot(document.getElementById('select-plate-container'));
            
            selectContainerTags.render(
                <SelectTags 
                    onChange={(tags) => {
                        selectedTags = tags;
                    }}
                />
            );

            selectContainerPlates.render(
                <SelectPlates 
                    onChange={(selectedPlate) => {
                        console.log("Placa seleccionada:", selectedPlate);
                    }}
                />
            );
        },
    });

    if (formValues) {
        sendData({
            description: formValues.description, 
            amount: formValues.amount,
            observation: formValues.observation,
            userId: user, 
            tags: formValues.tags,
            vehiculeId: null, 
            creditId: null
        });
    }
};