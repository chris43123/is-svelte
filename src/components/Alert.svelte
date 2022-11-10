<script>
    import Icon from '@iconify/svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let text = '', title, success = false, danger = false, info = false, warning = false, show = false;

    function closeAlert() {
        console.log('test')
		dispatch('close');
	}
</script>

{#if show}
<div class="z-100 w-full fixed left-0 my-3 bottom-0">
    <div class="w-11/12 max-w-md p-4 text-slate-700 flex flex-row border-l-4 shadow-lg justify-between m-auto font-semibold text 
        {success ? 'border-green-600 bg-green-50': ''}
        {danger ? 'border-rose-500 bg-rose-50': ''}
        {info ? 'border-blue-500 bg-blue-50': ''}
        {warning ? 'border-orange-500 bg-orange-50': ''}
    "
    >
        <div class="flex flex-row">
            <span class="text-4xl mr-4">
                {#if success}
                <Icon icon="ph:check-circle-bold" class="text-green-600"/>
                {/if}
                {#if warning}
                <Icon icon="ph:warning-bold" class="text-orange-500"/>
                {/if}
                {#if danger}
                <Icon icon="ph:x-circle-bold" class="text-rose-500"/>
                {/if}
                {#if info}
                <Icon icon="ph:info-bold" class="text-blue-500"/>
                {/if}
            </span>
            <span>
                {#if title != ''}
                <h3 class=" font-bold">{title}</h3>
                {/if}
                <p class="">{text}</p>
            </span>
        </div>
        <span class="text-xl font-bold ml-4">
            <span on:click={closeAlert}  on:keypress={(e) => {console.log(e)}}>
                <Icon icon="ph:x-bold" class="cursor-pointer"  />
            </span>
        </span>
    </div>

</div>
{/if}