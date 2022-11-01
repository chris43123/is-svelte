<script>
    import {required} from '../../utils/validations'
    import {activityConverter} from '../../utils/firebaseMap'
    import {getAllData} from '../../utils/firebaseApi'
    import { onMount } from 'svelte';

    // Components
    import Modal from '../../components/Modal.svelte';

    let activities = []
    onMount(async () => {
        activities = await getAllData('activities', '', '');
        console.log(activities)
    });

    //Activities
    let title, subtitle
    function selectActivity(act) {
        title = act.name
        subtitle = 'Lorem ipsum dolor sit amet'
        showFormRegister = true
    }

    //Convert Firestore Date
    function convertTimestamp(timestamp) {
        let date = timestamp.toDate();
        let mm = date.getMonth();
        let dd = date.getDate();
        let yyyy = date.getFullYear();

        date = dd + '/' + mm + '/' + yyyy;
        return date;
    }
    
    //Modal Utilities
    let showFormRegister = false;
    let showFormActivity = false;

    //Function submit
    let errors = {}
    function sendForm(e) {
        errors = {}
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
        const [key, value] = field;
        if( !required(value) ) {
            errors[key] = 'Este campo es requerido'
        }
            data[key] = value;
        }
        console.log(data)
    }

    let errorsAct = {}
    function sendFormAct(e) {
        errorsAct = {}
        const formData = new FormData(e.target);

        const data = {};
        for (let field of formData) {
        const [key, value] = field;
        if( !required(value) ) {
            errorsAct[key] = 'Este campo es requerido'
        }
            data[key] = value;
        }
        console.log(data)
    }


</script>

<div class="container m-auto py-5">

    <Modal on:close={() => showFormActivity = false} show={showFormActivity} title="Nueva Actividad" subtitle="Ingrese la información">
        <div class="" slot="body">
            <!-- <h2 class="text-slate-800 text-lg font-semibold">Información</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iste dolorum laborum itaque eius earum repudiandae sunt impedit non libero.</p> -->
            <form class="py-3" on:submit|preventDefault={sendFormAct}>
                <div class="w-full md:w-1/2 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="actName">
                      Nombre de la actividad *
                    </label>
                    <input id="actName" name="actName" 
                        class="appearance-none block w-full border-gray-200 text-gray-700 border rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border {errorsAct.actName? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Ej. Caminata">
                    {#if errorsAct.actName} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actName}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label  for="actDesc" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Descripción *
                    </label>
                    <textarea id="actDesc" name="actDesc" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actDesc? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'} " type="text" placeholder="Breve descripción de la actividad"></textarea>
                    {#if errorsAct.actDesc} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actDesc}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="actCareer" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Carrera *
                    </label>
                    <input id="actCareer" name="actCareer" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actCareer? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Carrera organizadora">
                    {#if errorsAct.actCareer} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actCareer}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="actHours" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Horas *
                    </label>
                    <input id="actHours" name="actHours" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actHours? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="number" placeholder="Horas vinculantes">
                    {#if errorsAct.actHours} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actHours}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="actOwner" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Encargado *
                    </label>
                    <input id="actOwner" name="actOwner" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actOwner? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Encargado de la actividad">
                    {#if errorsAct.actOwner} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actOwner}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="actOwner" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Índole *
                    </label>
                    <div class="flex flex-row">
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="scientific">
                            <label class="inline-block text-gray-800" for="scientific">
                                Científico
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="social">
                            <label class="finline-block text-gray-800" for="social">
                                Social
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="sport">
                            <label class="finline-block text-gray-800" for="sport">
                                Deporte
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-60 focus:ring-0 focus:outline-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="cultural">
                            <label class="finline-block text-gray-800" for="cultural">
                                Cultural
                            </label>
                        </div>
                    </div>
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="actDate" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Fecha *
                    </label>
                    <input id="actDate" name="actDate" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actDate? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="date" >
                    {#if errorsAct.actDate} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actDate}*</span>
                    {/if}
                </div>
                <button type="submit" class="mt-3 text-sm block w-full p-3 bg-teal-500 text-white font-bold uppercase">Enviar</button>
            </form>
        </div>
    </Modal>

    <Modal on:close={() => showFormRegister = false} show={showFormRegister} {title} {subtitle}>
        <div class="" slot="body">
            <h2 class="text-slate-800 text-lg font-semibold">Información</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod iste dolorum laborum itaque eius earum repudiandae sunt impedit non libero.</p>

            <form class="py-3" on:submit|preventDefault={sendForm}>
                <div class="w-full md:w-1/2 py-2">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                      Nombre *
                    </label>
                    <input id="name" name="name" 
                        class="appearance-none block w-full border-gray-200 text-gray-700 border rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border {errors.name? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Nombre completo">
                    {#if errors.name} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errors.name}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label  for="account" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Cuenta *
                    </label>
                    <input id="account" name="account" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errors.account? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'} " type="text" placeholder="Número de cuenta">
                    {#if errors.account} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errors.account}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="email" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Correo Institucional *
                    </label>
                    <input id="email" name="email" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errors.email? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="correo@unah.hn">
                    {#if errors.email} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errors.email}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="career" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Carrera *
                    </label>
                    <input id="career" name="career" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errors.career? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Carrera">
                    {#if errors.career} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errors.career}*</span>
                    {/if}
                </div>
                <button type="submit" class="mt-3 text-sm block w-full p-3 bg-teal-500 text-white font-bold uppercase">Enviar</button>
            </form>
        </div>
    </Modal>


    <div class="flex flex-row justify-between items-start pb-4 mb-4 border-b border-gray-200">
        <div>
            <h1 class="text-2xl text-slate-800 font-bold mb-2">Explora las principales actividades</h1>
            <h2 class="text-md font-semibold text-gray-700">Vinculantes a horas del artículo 140</h2>
        </div>
        <button on:click={() => showFormActivity = true} class="p-2 bg-teal-600 text-white rounded">Nueva Actividad</button>
    </div>

    <div class="py-4 font-semibold">
        <h2 class="text-slate-800 text-xl">Este Mes</h2>
        <p class="text-md text-gray-700">Noviembre - 2022</p>
        <div class="grid grid-cols-4 my-4">

            {#each activities as item}
            <div class="text-medium mr-2 my-2 p-3 pb-0 border border-gray-200 shadow-sm">
                <div class="grid grid-cols-2">
                    <h2 class="text-slate-700 text-lg mb-2  whitespace-nowrap text-ellipsis overflow-hidden" title={item.name}>{item.name}</h2>
                    <h2 class="text-gray-500 text-md mb-2 font-semibold text-end">{convertTimestamp(item.date)}</h2>
                </div>
                <div class="flex flex-row text-xs mb-2">
                    {#each item.area as el}
                    <span class="p-1 bg-orange-100 rounded mr-1 mb-1">{el}</span>
                    {/each}
                </div>
                <p class="text-sm mb-2 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="flex items-center mb-3">
                    <img class="w-7 h-7 rounded-full mr-2 cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Rounded avatar">
                    <p class="text-sm text-slate-800 cursor-pointer">Denis Villeneuve</p>
                </div>
                <div class="flex flex-row justify-between border-b border-gray-200 pb-4">
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Cant.</p>
                        <p class="text-gray-400 text-sm">{item.hours}hrs</p>
                    </div>
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Horario</p>
                        <p class="text-gray-400"> 7:00 am - 11:00 am</p>
                    </div>
                </div>
                <button on:click={selectActivity(item)} class="p-3 text-center text-slate-600 block w-full hover:text-blue-800 focus:outline-0">Inscribirse</button>
            </div>
            {/each}

        </div>
    </div>

    <div class="py-4 font-semibold">
        <h2 class="text-slate-800 text-xl">Próximas Actividades</h2>
        <div class="grid grid-cols-4 my-4">

            {#each activities as item}
            <div class="text-medium mr-2 my-2 p-3 pb-0 border border-gray-200 shadow-sm">
                <div class="grid grid-cols-2">
                    <h2 class="text-slate-700 text-lg mb-2  whitespace-nowrap text-ellipsis overflow-hidden" title={item.name}>{item.name}</h2>
                    <h2 class="text-gray-500 text-md mb-2 font-semibold text-end">{convertTimestamp(item.date)}</h2>
                </div>
                <div class="flex flex-row text-xs mb-2">
                    {#each item.area as el}
                    <span class="p-1 bg-orange-100 rounded mr-1 mb-1">{el}</span>
                    {/each}
                </div>
                <p class="text-sm mb-2 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="flex items-center mb-3">
                    <img class="w-7 h-7 rounded-full mr-2 cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Rounded avatar">
                    <p class="text-sm text-slate-800 cursor-pointer">Denis Villeneuve</p>
                </div>
                <div class="flex flex-row justify-between border-b border-gray-200 pb-4">
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Cant.</p>
                        <p class="text-gray-400 text-sm">{item.hours}hrs</p>
                    </div>
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Horario</p>
                        <p class="text-gray-400"> 7:00 am - 11:00 am</p>
                    </div>
                </div>
                <button on:click={selectActivity(item)} class="p-3 text-center text-slate-600 block w-full hover:text-blue-800 focus:outline-0">Inscribirse</button>
            </div>
            {/each}
            {#each activities as item}
            <div class="text-medium mr-2 my-2 p-3 pb-0 border border-gray-200 shadow-sm">
                <div class="grid grid-cols-2">
                    <h2 class="text-slate-700 text-lg mb-2  whitespace-nowrap text-ellipsis overflow-hidden" title={item.name}>{item.name}</h2>
                    <h2 class="text-gray-500 text-md mb-2 font-semibold text-end">{convertTimestamp(item.date)}</h2>
                </div>
                <div class="flex flex-row text-xs mb-2">
                    {#each item.area as el}
                    <span class="p-1 bg-orange-100 rounded mr-1 mb-1">{el}</span>
                    {/each}
                </div>
                <p class="text-sm mb-2 font-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div class="flex items-center mb-3">
                    <img class="w-7 h-7 rounded-full mr-2 cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Rounded avatar">
                    <p class="text-sm text-slate-800 cursor-pointer">Denis Villeneuve</p>
                </div>
                <div class="flex flex-row justify-between border-b border-gray-200 pb-4">
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Cant.</p>
                        <p class="text-gray-400 text-sm">{item.hours}hrs</p>
                    </div>
                    <div class="flex flex-row justify-end text-sm">
                        <p class="mr-2 text-slate-700">Horario</p>
                        <p class="text-gray-400"> 7:00 am - 11:00 am</p>
                    </div>
                </div>
                <button on:click={selectActivity(item)} class="p-3 text-center text-slate-600 block w-full hover:text-blue-800 focus:outline-0">Inscribirse</button>
            </div>
            {/each}
       

        </div>
    </div>
</div>