import Swal from 'sweetalert2';

const showModalVehiculeAdd = async () => {

    const { value: formValues } = await Swal.fire({
        title: 'Agregar Vehículo',
        html: `
            <input type="text" id="plate" class="swal2-input" placeholder="Placa">
            <input type="text" id="mark" class="swal2-input" placeholder="Marca">
            <input type="text" id="model" class="swal2-input" placeholder="Modelo">
            <input type="number" id="year" class="swal2-input" placeholder="Año">
        `,
        confirmButtonText: 'Agregar',
        focusConfirm: false,
        preConfirm: () => {
            const plateInput = document.getElementById('plate');
            const markInput = document.getElementById('mark');
            const modelInput = document.getElementById('model');
            const yearInput = document.getElementById('year');

            if (!plateInput.value) {
                Swal.showValidationMessage(`Por favor, diligencie una placa.`);
            }

            return {
                plate: plateInput.value,
                mark: markInput.value,
                model: modelInput.value,
                year: yearInput.value,
            };
        }
    });

    if (formValues) {
        console.log('Placa:', formValues.plate);
        console.log('Marca:', formValues.mark);
        console.log('Modelo:', formValues.model);
        console.log('Año:', formValues.year);
    }
};

export default showModalVehiculeAdd;