import React from 'react';
import Swal from 'sweetalert2';
import SelectTags from '../selects/tags';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { url, user } from "../../globals";

const sendData = async (dataSend) => {
    await axios.post(`${url}/expense`, dataSend)
        .then((result) => {
            Swal.fire(result.data);
        })
        .catch((error) => {
            Swal.fire(error.response.data);
        });
}

export default async function ShowModalExpenceAdd() {
    let selectedTags = [];

    const { value: formValues } = await Swal.fire({
        title: 'Agregar Gasto',
        html: `
            <input type="text" id="description" class="swal2-input" placeholder="Descripción">
            <input type="number" id="amount" class="swal2-input" placeholder="Valor">
            <div id="select-tags-container"></div>
            <textarea id="observation" class="swal2-textarea" placeholder="Observación"></textarea>
        `,
        confirmButtonText: 'Agregar',
        focusConfirm: false,
        preConfirm: () => {
            const descriptionInput = document.getElementById('description');
            const amountInput = document.getElementById('amount');
            const observation = document.getElementById('observation');

            if (!descriptionInput.value || !amountInput.value || selectedTags.length === 0) {
                Swal.showValidationMessage(`Por favor, completa todos los campos.`);
            }

            return {
                description: descriptionInput.value,
                amount: amountInput.value,
                tags: selectedTags.map(tag => tag.value),
                observation: observation.value
            };
        },
        didOpen: () => {
            const selectContainer = ReactDOM.createRoot(document.getElementById('select-tags-container'));
            
            selectContainer.render(
                <SelectTags 
                    onChange={(tags) => {
                        selectedTags = tags;
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