<script>
    import Icon from '@iconify/svelte';
    import { v4 as uuidv4 } from 'uuid';
    import {required} from '../../utils/validations'
    import {getAllData, createDocument, uploadFile} from '../../utils/firebase/firebaseApi'
    import { onMount } from 'svelte';

    // Components
    import Modal from '../../components/Modal.svelte';
    import Alert from '../../components/Alert.svelte';
    import LeafletMap from '../../components/Leaflet.svelte';
    import Spinner from '../../components/Spinner.svelte';
    import { goto } from '$app/navigation';

    //Variables
    let activities = []
    let showFormActivity = false;
    let uuid = uuidv4()
    let uuid2 = uuidv4()
    let alert = {}
    let load = ''
    let headers = ['Actividad', 'Descripción', 'Tipo', 'Inicio', 'Final', 'Fecha']


    async function getActivities() {
        load = true
        activities = await getAllData('activities', '', '');
        load = false
    }

    onMount(async () => {
        await getActivities()
        console.log(activities)
    });



    //Activities
    let actSelected
    function selectActivity(act) {
        actSelected = act
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

    //Checbox Utilities
    let actAreas = []
    function checkArea(e) {
        if(e.target.checked) {
            actAreas.push(e.target.value);
        } else {
            actAreas = actAreas.filter((item) => item !== e.target.value)
        }
    }

    //Radio Utilities
    let actType = ''
    function checkType(e) {
        actType = e.target.value;
        console.log(actType)
    }

    //Image
    let actImage = '', actImageName, loadImage
    async function changeImage(e) {
        console.log(e.target.files)
        let file = e.target.files[0]
        actImageName = file.name
        loadImage = true
        const res = await uploadFile(file)
        console.log(res)
        loadImage = false
        if(res.success) {
            actImage = res.url
        } else {
            errors.actImage = 'Ocurrio un error al subir la imagen'
        }
    }

    //Maps Utilites
    let latLng = {}
    function setLatLng(e) {
        latLng = e.detail
    }

    // Go to Activity
    function goToAct(id) {
        goto("/panel/"+id)
    }

    //Send Form Activity
    let errorsAct = {}
    async function sendFormAct(e) {
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

        if(actAreas.length <= 0) {
            errorsAct.actAreas = 'Debe seleccionar una de las opciones.'
        }
        if(actType == '') {
            errorsAct.actType = 'Debe seleccionar una de las opciones.'
        }
        console.log(actImage)

        if(actImage == '') {
            errorsAct.actImage = 'Debe cargar una imagen.'
        }
        
        
        if(actType == 'Exterior') {
            if(Object.entries(latLng).length === 0) {
                errorsAct.actLatLng = 'Debe marcar una posicion en el mapa.'
            }
        }
        
        if(Object.entries(errorsAct).length === 0){
            let activity = {
                id: uuid,
                name: data.actName,
                career: data.actCareer,
                description: data.actDesc,
                email: data.actEmailOwner,
                owner: data.actOwner,
                hours: data.actHours,
                start: data.actStart,
                end: data.actEnd,
                date: data.actDate,
                area: actAreas,
                type: actType,
                image: actImage
            }
            if(actType == 'Presencial') {
                activity.place = data.actPlace
            } 
            if(actType == 'Virtual') {
                activity.link = data.actLink
            }
            if(actType == 'Exterior') {
                activity.lat = latLng.lat
                activity.lng = latLng.lng
            }

            const response = await createDocument("activities", activity, uuid)
            const res = await createDocument("activitiesRegister", {idAct: uuid, name: activity.name}, uuid)

            showFormActivity = false
            alert.show = true
            if(response) {
                console.log('Enviado')
                alert.title = 'Éxito'
                alert.text = 'Actividad guardada exitosamente.'
                await getActivities()
            } else {
                console.log(response)
                alert.title = 'Error'
                alert.text = 'Problemas procesando la actividad.'
            }
        } else {
            console.log('test2')
        }
        
    }



</script>

<div class="container m-auto py-5">

    <Alert show={alert.show} on:close={() => alert.show = false} title={alert.title} text={alert.text} success/>

    <Modal on:close={() => showFormActivity = false} show={showFormActivity} title="Nueva Actividad" subtitle="Ingrese la información">
        <div class="" slot="body">
            <form class="pb-3" on:submit|preventDefault={sendFormAct}>
                <div class="grid grid-cols-2 gap-2">
                    <div class="py-2">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="actName">
                          Nombre de la actividad *
                        </label>
                        <input id="actName" name="actName" 
                            class="appearance-none block w-full border-gray-200 text-gray-700 border rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border {errorsAct.actName? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Ej. Caminata">
                        {#if errorsAct.actName} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actName}*</span>
                        {/if}
                    </div>
                    <div class="py-2">
                        <label for="actCareer" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Carrera *
                        </label>
                        <input id="actCareer" name="actCareer" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actCareer? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Carrera organizadora">
                        {#if errorsAct.actCareer} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actCareer}*</span>
                        {/if}
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div class="py-2">
                        <label for="actOwner" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Encargado *
                        </label>
                        <input id="actOwner" name="actOwner" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actOwner? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Encargado de la actividad">
                        {#if errorsAct.actOwner} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actOwner}*</span>
                        {/if}
                    </div>
                    <div class="py-2">
                        <label for="actEmailOwner" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Correo*
                        </label>
                        <input id="actEmailOwner" name="actEmailOwner" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actEmailOwner? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="email" placeholder="Correo del encargado">
                        {#if errorsAct.actEmailOwner} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actEmailOwner}*</span>
                        {/if}
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div class="py-2">
                        <label for="actStart" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Hora Inicio *
                        </label>
                        <input id="actStart" name="actStart" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actStart? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="time" placeholder="Hora inicio de la act.">
                        {#if errorsAct.actStart} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actStart}*</span>
                        {/if}
                    </div>
                    <div class="py-2">
                        <label for="actEnd" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Hora Fin*
                        </label>
                        <input id="actEnd" name="actEnd" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actEnd? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="time" placeholder="Hora final de la act.">
                        {#if errorsAct.actEnd} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actEnd}*</span>
                        {/if}
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                    <div class="py-2">
                        <label for="actHours" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Horas *
                        </label>
                        <input id="actHours" name="actHours" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actHours? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="number" placeholder="Horas vinculantes">
                        {#if errorsAct.actHours} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actHours}*</span>
                        {/if}
                    </div>
                    <div class="py-2">
                        <label for="actDate" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                          Fecha *
                        </label>
                        <input id="actDate" name="actDate" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actDate? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="date" >
                        {#if errorsAct.actDate} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actDate}*</span>
                        {/if}
                    </div>
                </div>
                
                
                <div class="py-2">
                    <label  for="actDesc" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Descripción *
                    </label>
                    <textarea id="actDesc" name="actDesc" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actDesc? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'} " type="text" placeholder="Breve descripción de la actividad"></textarea>
                    {#if errorsAct.actDesc} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actDesc}*</span>
                    {/if}
                </div>

                <div class="">
                    <div class="py-2">
                        <span class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                            Subir Imagen *
                        </span>
                        <!-- <span class="text-sm italic mb-3">Espere mientras se sube la imagen.</span> -->
                        <input on:change={changeImage} id="actImage" name="actImage" class="hidden {errorsAct.actOwner? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="file" placeholder="Formato JPG, PNG, JPEG">
                        <div class="flex items-center">
                            <label for="actImage" class="p-2 border bg-gray-100 border-gray-300 rounded cursor-pointer mr-2">
                                {actImageName ? actImageName : 'Agregar Imagen *'}
                            </label>
                            {#if loadImage}
                            <Spinner/>
                            {/if}
                        </div>
                        {#if errorsAct.actImage} 
                        <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actImage}*</span>
                        {/if}
                    </div>
                </div>

                <div class="w-full md:w-1/2 py-2">
                    <label for="actOwner" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Índole *
                    </label>
                    <div class="flex flex-row">
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="cientifico" value="Cientifico" on:click={checkArea}>
                            <label class="inline-block text-gray-800" for="cientifico">
                                Científico
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="social" value="Social" on:click={checkArea}>
                            <label class="finline-block text-gray-800" for="social">
                                Social
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="deporte" value="Deporte" on:click={checkArea}>
                            <label class="finline-block text-gray-800" for="deporte">
                                Deporte
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-60 focus:ring-0 focus:outline-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" id="cultural" value="cultural" on:click={checkArea}>
                            <label class="finline-block text-gray-800" for="cultural">
                                Cultural
                            </label>
                        </div>
                    </div>
                    {#if errorsAct.actAreas} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actAreas}*</span>
                    {/if}
                </div>
                <div class="w-full md:w-1/2 py-2">
                    <label for="actOwner" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Tipo de actividad *
                    </label>
                    <div class="flex flex-row">
                        <div class="mr-2">
                            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="actPres" value="Presencial" on:click={checkType}>
                            <label class="form-check-label inline-block text-gray-800" for="actPres">
                                Presencial
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="actVirtual" value="Virtual" on:click={checkType}>
                            <label class="form-check-label inline-block text-gray-800" for="actVirtual">
                                Virtual
                            </label>
                        </div>
                        <div class="mr-2">
                            <input class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="radio" name="flexRadioDefault" id="actExterior" value="Exterior" on:click={checkType}>
                            <label class="form-check-label inline-block text-gray-800" for="actExterior">
                                Exterior
                            </label>
                        </div>
                    </div>
                    {#if errorsAct.actType} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actAreas}*</span>
                    {/if}
                </div>
                {#if actType ==  'Presencial'}
                <div class="w-full md:w-1/2 py-2">
                    <label for="actPlace" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Lugar*
                    </label>
                    <input id="actPlace" name="actPlace" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actPlace? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Punto de reunión">
                    {#if errorsAct.actPlace} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actPlace}*</span>
                    {/if}
                </div>
                {/if}

                {#if actType ==  'Exterior'}
                <div class="w-full md:w-1/2 py-2">
                    <label for="actPlace" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Seleccione la ubicación exacta*
                    </label>
                    <LeafletMap on:getLatLng={setLatLng} sm/>

                    {#if errorsAct.actLatLng} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actLatLng}*</span>
                    {/if}
                </div>
                {/if}

                {#if actType ==  'Virtual'}
                <div class="w-full md:w-1/2 py-2">
                    <label for="actLink" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                      Enlace a la reunión*
                    </label>
                    <input id="actLink" name="actLink" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errorsAct.actLink? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'}" type="text" placeholder="Enlace a la reunión">
                    {#if errorsAct.actLink} 
                    <span class="inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2">{errorsAct.actLink}*</span>
                    {/if}
                </div>
                {/if}

                <button type="submit" class="mt-3 text-sm block w-full p-3 bg-teal-500 text-white font-bold uppercase">Enviar</button>
            </form>
        </div>
    </Modal>


    <div class="flex flex-row justify-between items-start pb-4 mb-4 border-b border-gray-200">
        <button on:click={() => showFormActivity = true} class="p-2 bg-teal-600 text-white rounded">Nueva Actividad</button>
    </div>

    <div class="py-4 font-semibold">
        <h2 class="text-slate-800 text-xl">Actividades</h2>

        <!-- component -->
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
        <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css">


        <section class="py-1">
            <div class="mx-auto mt-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded ">
                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                    <div class="flex flex-wrap items-center">
                        <div class="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 class="font-semibold text-base text-blueGray-700">Actividades</h3>
                        </div>
                    </div>
                    </div>

                    <div class="block w-full overflow-x-auto">
                    <table class="items-center bg-transparent w-full border-collapse ">
                        <thead>
                        <tr>
                            {#each headers as header}
                            <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                {header}
                            </th>
                            {/each}
                        </tr>
                        </thead>

                        <tbody>
                            {#each activities as {name, description, type, date, start, end, id}}
                            <tr class="hover:bg-slate-100 hover:cursor-pointer" on:click={goToAct(id)}>
                                <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 ">
                                {name}
                                </th>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 ">
                                {description}
                                </td>
                                <td class="border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {type}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {date}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {start}
                                </td>
                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                {end}
                                </td>
                            </tr>
                            {/each}
                        </tbody>

                    </table>
                    </div>
                </div>
            </div>
        </section>

    </div>
</div>