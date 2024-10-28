import React from 'react';
import Swal from 'sweetalert2';
import SelectTags from '../selects/tags';
import ReactDOM from 'react-dom';

const showModalIncomesAdd = async () => {
    let selectedTags = [];

    const { value: formValues } = await Swal.fire({
        title: 'Agregar Ingreso',
        html: `
            <input type="text" id="description" class="swal2-input" placeholder="Descripción">
            <input type="number" id="amount" class="swal2-input" placeholder="Valor">
            <div id="select-tags-container"></div>
        `,
        confirmButtonText: 'Agregar',
        focusConfirm: false,
        preConfirm: () => {
            const descriptionInput = document.getElementById('description');
            const amountInput = document.getElementById('amount');

            if (!descriptionInput.value || !amountInput.value || selectedTags.length === 0) {
                Swal.showValidationMessage(`Por favor, completa todos los campos.`);
            }

            return {
                description: descriptionInput.value,
                amount: amountInput.value,
                tags: selectedTags.map(tag => tag.value),
            };
        },
        didOpen: () => {
            const selectContainer = document.getElementById('select-tags-container');
            ReactDOM.render(<SelectTags onChange={(selectedOptions) => {
                selectedTags = selectedOptions;
            }} />, selectContainer);
        },
    });

    if (formValues) {
        console.log('Descripción:', formValues.description);
        console.log('Valor:', formValues.amount);
        console.log('Tags:', formValues.tags);
    }
};

export default showModalIncomesAdd;