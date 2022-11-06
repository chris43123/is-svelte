<script>
    import Icon from '@iconify/svelte'
    import {subjectConverter} from '../utils/firebase/firebaseMap'
    import {getData} from '../utils/firebase/firebaseApi'
    import { onMount } from 'svelte'

    //Props
    export let disabled = false;
    export let subject

    //Variables
    let classDisabled = 'grayscale bg-gray-100 cursor-not-allowed';
    let subj = {}
    let subjName = ''
    let classStatus = '', textStatus = 'Pendiente', iconStatus= 'ph:clock'

    onMount(async () => {
        subj = await getData('clases', subject.code, subjectConverter);

        //Slice max content subject name
        if(subj.name.length > 20) {
            subjName = subj.name.slice(0,20) + '...'
        } else {
            subjName = subj.name.slice(0,20)
        }
        if (subj) {
            subj.note = subject.note
        }

        //Define status
        if(subj.note >= 65) {
            classStatus = 'text-green-400'
            textStatus = 'Aprobado'
            iconStatus = 'ph:check-circle-fill'
        } else if (subj.note < 65 ) {
            classStatus = 'text-red-400'
            textStatus = 'Reprobado'
            iconStatus = 'ph:x'
        } else {
            classStatus = 'text-gray-400'
        }
       
    });

</script>

<div class="shadow max-w-5 filter rounded-md p-5 text-md flex flex-row justify-between cursor-pointer hover:shadow-md {disabled ? classDisabled : ''}" >
    <div class="content-between">
        <div class="flex flex-row items-center">
            <span class="text-4xl mr-3 font-light bg-slate-900 rounded text-white">
                <Icon icon="ph:atom-light" />
            </span>
            <div class="flex-col max-w-2 overflow-hidden">
                <h2 class="text-md font-bold">{subjName}</h2>
                <h5 class="text-sm text-gray-700 font-bold">{subj.code} - 5UV</h5>
            </div>
        </div>
        <div class="mt-2">
            <span class="text-md font-medium rounded-sm bg-gray-300  py-1 px-3 text-slate-900 mb-0.5 inline-block">Fisica</span>
            <span class="text-md font-medium rounded-sm bg-green-300 py-1 px-3 text-slate-900 mb-0.5 inline-block">Matemática</span>
        </div>
        
        <div class="flex justify-between items-center mt-4">
            <div class="flex flex-row items-center text-md">
                <span class="text-xl mr-1 {classStatus}">
                    <Icon icon="ph:check-circle-fill" />
                </span>
                <p class="font-medium">{textStatus}</p>
            </div>
            <h4 class="text-end font-medium">{subj.note}%</h4>
        </div>
   </div>
    <div class="flex items-start text-gray-600 text-2xl cursor-pointer font-extrabold">
        <Icon icon="ph:dots-three-bold" rotate={1} />
    </div>
</div>
