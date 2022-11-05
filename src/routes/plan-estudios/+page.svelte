<script>
    import { onMount } from 'svelte';

    let start, end;

    onMount(async () => {
        const {LeaderLine} = await import('../../utils/LeaderLine/leader-line.min.js')
        new LeaderLine(start, end, {color: '#f4f4f4', size: 8});

    });


</script>

<div class="container m-auto">
    
    <div class="flex justify-between flex-row">
        <div bind:this={start} class="w-80 bg-blue-900 h-80 mt-56"></div>
        <div bind:this={end} class="w-80 bg-red-500 h-80"></div>
    </div>
</div>
