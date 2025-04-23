import Swal from 'sweetalert2';

export default function ObservationModal(message) {
    console.log('message',message);
    
    Swal.fire({
        title: "Observación",
        text: message,
        confirmButtonColor: "#d33",
        confirmButtonText: "Cerrar"
    });
}