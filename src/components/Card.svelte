<script>
    import Icon from '@iconify/svelte';
    export let disabled = false;
    let classDisabled = 'grayscale bg-gray-100 cursor-not-allowed';
</script>

<div class="shadow-md max-w-5 filter rounded-md p-5 text-md flex flex-row justify-between cursor-pointer hover:shadow-lg {disabled ? classDisabled : ''}" >
    <div>
        <div class="flex flex-row items-center">
            <span class="text-4xl mr-3 font-light bg-slate-900 rounded text-white">
                <Icon icon="ph:atom-light" />
            </span>
            <div class="flex-col">
                <h2 class="text-xl font-bold">Fisica I</h2>
                <h5 class="text-sm text-gray-700 font-bold">FS-100 - 5UV</h5>
            </div>
        </div>
        <div class="mt-4">
            <span class="text-md font-medium rounded-sm bg-gray-300  py-1 px-3 text-slate-900">Fisica</span>
            <span class="text-md font-medium rounded-sm bg-green-300 py-1 px-3 text-slate-900">Matemática</span>
        </div>

        <div class="mt-4 flex flex-row items-center text-md">
            <span class="text-green-400 text-xl mr-1">
                <Icon icon="ph:check-circle-fill" />
            </span>
            <p class="font-medium">Completado</p>
        </div>
   </div>
    <div class="flex items-start text-gray-600 text-2xl cursor-pointer font-extrabold">
        <Icon icon="ph:dots-three-bold" rotate={1} />
    </div>
</div>