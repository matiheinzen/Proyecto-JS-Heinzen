/*contacto*/

const $form = document.querySelector('#form');
$form.addEventListener('submit', handleSubmit);
async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response =await fetch(this.action, {
            method: this.method,
            body: form,
            headers: {
                'Accept': 'aplication/json',
            }
        })
        if (response.ok){
            this.reset()  
            Swal.fire({
              icon: 'success',
              title: 'Enviado Correctamente',
              text: 'tu consulta fue enviada con exito',
              footer: 'en breve nos comunicaremos para darte una respuesta'
            })       
        }
}

/*fin contacto*/