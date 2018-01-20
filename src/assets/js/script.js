function notifications_sucess($messsage) {
    iziToast.success({
        title: 'Exito',
        message: $messsage,
    });
}

function notifications_error($messsage) {
    iziToast.error({
        title: 'Error',
        message: $messsage,
    });
}