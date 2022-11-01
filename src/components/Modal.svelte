<script>
    import { createEventDispatcher } from 'svelte';
    import Icon from '@iconify/svelte';

    export let show = false;

	const dispatch = createEventDispatcher();

	function closeModal() {
        console.log('test')
		dispatch('close');
	}
</script>

{#if show}
<div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

  <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
      <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
        
        <!-- Modal Header -->
        <div class="flex flex-row justify-between py-3 px-4 bg-slate-100">
            <div>
                <h1 class="text-gray-800 text-xl font-semibold">Modal Title</h1>
                <h4 class="text-gray-600 font-medium">Subtitle</h4>
            </div>
            <div class="w-15 text-2xl" on:click={closeModal} on:keypress={(e) => {console.log(e)}}>
                <Icon icon="ph:x" class="cursor-pointer"/>
            </div>
        </div>
        
        <!-- Modal Header -->
        <div class="p-4">
            <!-- <slot></slot> -->
            <h1>Hola</h1>
        </div>       
      </div>
    </div>
  </div>
</div>
{/if}