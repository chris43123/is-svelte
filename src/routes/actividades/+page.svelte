<script>
    import Icon from '@iconify/svelte';

    // Components
    import Modal from '../../components/Modal.svelte';

    //Modal Utilitie
    let show = true;
    function closeModal() {
        console.log(true)
        show = false
    }

</script>

<div class="container m-auto py-5">

    <Modal on:close={closeModal} show={show} title={'Caminata al Merendon'} subtitle={'Vinculantes a horas del artículo 140'}>
        <div class="" slot="body">
            <h2 class="text-slate-800 text-lg font-semibold">Información</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iste dolorum laborum itaque eius earum repudiandae sunt impedit non libero.</p>

            <form class="py-3">
                <div class="w-full md:w-1/2 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Nombre *
                    </label>
                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500" type="text" placeholder="Nombre completo">
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Cuenta *
                    </label>
                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500" type="text" placeholder="Número de cuenta">
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Correo Institucional *
                    </label>
                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500" type="text" placeholder="correo@unah.hn">
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Carrera *
                    </label>
                    <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500" type="text" placeholder="correo@unah.hn">
                </div>
            </form>
        </div>
    </Modal>


    <div class="pb-4 mb-4 border-b border-gray-200">
        <h1 class="text-2xl text-slate-800 font-bold mb-2">Explora las principales actividades</h1>
        <h2 class="text-md font-semibold text-gray-700">Vinculantes a horas del artículo 140</h2>
    </div>

    <div class="py-4 font-semibold">
        <h2 class="text-slate-800 text-xl">Este Mes</h2>
        <p class="text-md text-gray-700">Noviembre - 2022</p>
        <div class="grid grid-cols-4 my-4">
            <div class="text-medium p-3 pb-0 border border-gray-200 shadow-sm">
                <h2 class="text-slate-700 text-lg mb-2">Caminata al Merendon</h2>
                <div class="flex flex-row text-xs mb-2">
                    <span class="p-1 bg-orange-100 rounded mr-1 mb-1">Social</span>
                    <span class="p-1 bg-blue-100 rounded mr-1 mb-1">Academico</span>
                </div>
                <p class="text-sm mb-2 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="flex items-center mb-3">
                    <img class="w-7 h-7 rounded-full mr-2 cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Rounded avatar">
                    <p class="text-sm text-slate-800 cursor-pointer">Denis Villeneuve</p>
                </div>
                <div class="flex flex-row justify-between border-b border-gray-200 pb-4">
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Cant.</p>
                        <p class="text-gray-400 text-sm">4hrs</p>
                    </div>
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Horario</p>
                        <p class="text-gray-400"> 7:00 am - 11:00 am</p>
                    </div>
                </div>
                <button on:click={()=> show = true} class="p-3 text-center text-slate-600 block w-full hover:text-blue-800 focus:outline-0">Inscribirse</button>
            </div>
        </div>
    </div>
</div>