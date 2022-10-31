<script>
    import Icon from '@iconify/svelte';
    import Card from './card.svelte';
    
</script>

<div class="flex flex-row p-4 mb-5 bg-gray-50 border-l-4 border-slate-300 font-medium">
    <div class="w-1/4 p-4 ">
        <h2 class="text-xl font-bold text-gray-600">Periodo 1</h2>
        <p class="py-1">12 UV</p>
        <p class="py-1">85%</p>
        <div class="text-green-400 flex flex-row py-1">
            {#each [1,2,3,4] as n}
                <span>
                    <Icon icon="ph:circle-fill" />
                </span>
            {/each}
            <span class="text-gray-300">
                <Icon icon="ph:circle-fill" />
            </span>
        </div>
    </div>
    <div class="w-3/4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    </div>
  </div>