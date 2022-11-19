<script>
    import Icon from '@iconify/svelte';
    import { v4 as uuidv4 } from 'uuid';
    import {required, fieldValidation} from '../../utils/validations'
    import {getAllData, createDocument, updateDocument, uploadFile} from '../../utils/firebase/firebaseApi'
    import { onMount } from 'svelte';

    // Components
    import Modal from '../../components/Modal.svelte';
    import Alert from '../../components/Alert.svelte';
    import SkeletonCard from '../../components/skeletons/SkeletonCard.svelte';
    import LeafletMap from '../../components/Leaflet.svelte';
    import Spinner from '../../components/Spinner.svelte';

    //Variables
    let activities = []
    let showFormRegister = false;
    let showFormActivity = false;
    let uuid = uuidv4()
    let uuid2 = uuidv4()
    let alert = {}
    let load = ''


    async function getActivities() {
        load = true
        activities = await getAllData('activities', '', '');
        load = false
    }

    onMount(async () => {
        await getActivities()
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
        // console.log(file)
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

    //Send Form Register
    let errors = {}
    async function sendForm(e) {
        console.log(actSelected)

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

        const errorEmail = fieldValidation(data.email, 'email')
        !errorEmail ? errors.email = 'Debe ingresar un correo válido.' : ''
        
        if(Object.entries(errors).length === 0) {
            const response = await updateDocument("activitiesRegister", data, actSelected.id, 'users')
            showFormActivity = false
            alert.show = true
            if(response) {
                alert.title = 'Éxito'
                alert.text = 'Registro Exitoso.'
            } else {
                console.log(response)
                alert.title = 'Error'
                alert.text = 'Hubo un error al registrarse a la actividad.'
            }
        }
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

            console.log(uuid)
            console.log(uuid2)
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

    <Modal on:close={() => showFormRegister = false} show={showFormRegister} title="Nuevo Registro" subtitle="Ingrese la información requerida">
        <div class="" slot="body">
            <h2 class="text-slate-800 text-lg font-semibold">{actSelected.name}</h2>
            <p>{actSelected.description}</p>

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
                    <input id="account" name="account" class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 {errors.account? 'bg-red-50 ring-1 ring-red-500' : 'bg-gray-100'} " type="number" placeholder="Número de cuenta">
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

        {#if load == true}
        <div class="grid grid-cols-4 my-6">
            {#each [1,2] as n}
            <SkeletonCard/>
            {/each}
        </div> 
        <div class="grid grid-cols-4 my-6">
            {#each [1,2] as n}
            <SkeletonCard/>
            {/each}
        </div>       
        {:else}
        <div class="grid grid-cols-4 my-4">

            {#each activities as item}
            <div class="text-medium mr-2 my-2 border border-gray-200 rounded shadow-sm">
                <div class="relative">
                    <div class="bg-gradient-to-r from-cyan-500 to-blue-500 mt-0 h-56 max-h-56 w-full">

                    </div>
                    <div class="absolute top-0 w-full rounded">
                        {#if item.image}
                        <img class="mt-0 w-full h-56 max-h-56 object-scale-down rounded" src={item.image} alt="">
                        {:else}
                        <img class="w-full h-56 max-h-56 object-cover rounded" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="">
                        {/if}
                    </div>
                </div>
                <div class="p-3 pb-0">
                    <div class="grid grid-cols-2">
                        <h2 class="text-slate-700 text-lg mb-2  whitespace-nowrap text-ellipsis overflow-hidden" title={item.name}>{item.name}</h2>
                        <h2 class="text-gray-500 text-md mb-2 font-semibold text-end">{item.date}</h2>
                    </div>
                    <div class="flex flex-row text-xs mb-2">
                        {#each item.area as el}
                        <span class="p-1 bg-orange-100 rounded mr-1 mb-1">{el}</span>
                        {/each}
                    </div>
                    <p class="text-sm mb-2 font-normal">{item.description}</p>
                    {#if item.type == 'Exterior'}
                    <a href="https://www.openstreetmap.org/#map=16/{item.lat}/{item.lng}" target="blank" class="mb-2 flex flex-row items-center">
                        <span class="pr-2 cursor-pointer">Ubicación</span>
                        <Icon icon="ph:map-pin-fill" class="text-lg cursor-pointer" />
                    </a>
                    {/if}
                    {#if item.type == 'Virtual'}
                    <a href="{item.link}" target="blank" class="mb-2 flex flex-row items-center">
                        <span class="pr-2 cursor-pointer">Enlace a la reunión</span>
                        <Icon icon="ph:link-bold" class="cursor-pointer" />
                    </a>
                    {/if}
                    {#if item.type == 'Presencial'}
                    <div class="mb-2 flex flex-row items-center">
                        <span class="pr-2">{item.place}</span>
                        <Icon icon="ph:map-trifold-bold" class="text-lg" />
                    </div>
                    {/if}
                    <div>
                        <a class="flex items-center mb-3" href="mailto:{item.email}">
                            <img class="w-7 h-7 rounded-full mr-2 cursor-pointer" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="Rounded avatar">
                            <p class="text-sm text-slate-800 cursor-pointer">{item.owner}</p>
                        </a>
                    </div>
                    <div class="flex flex-row justify-between border-b border-gray-200 pb-4">
                        <div class="flex flex-row justify-end text-sm">
                            <p class="mr-2 text-slate-700">Horas VOAE</p>
                            <p class="text-gray-400 text-sm">{item.hours}hrs</p>
                        </div>
                        <div class="flex flex-row justify-end text-sm">
                            <p class="mr-2 text-slate-700">Horario</p>
                            <p class="text-gray-400"> {item.start} - {item.end}</p>
                        </div>
                    </div>
                    <button on:click={selectActivity(item)} class="p-3 text-center text-slate-600 block w-full hover:text-blue-800 focus:outline-0">Inscribirse</button>
                </div>
            </div>
            {/each}

        </div>
        {/if}
    </div>

</div>