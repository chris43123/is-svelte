<script>
    import Icon from '@iconify/svelte'
    import {getAllData} from '../../utils/firebase/firebaseApi'
    import {onMount} from 'svelte';
    import {tree, subjects, treeSubjects} from '../../store.js'

    let subj = {}
    let loading = true

    onMount(async () => {
        const slots = await getAllData('tree', '', '')
        tree.set(slots[0].slots)

        const result = await getAllData('clases', '', '')
        subjects.set(result)
        loading = false


        const {LeaderLine} = await import('../../utils/leader-line.min.js')
        $treeSubjects.forEach(element => {
            element.forEach(subject => {
                console.log(subject)
                if(subject) {
                    if(subject.next) {
                        subject.next.forEach(el => {
                            if(el != undefined && subject.code != undefined && el != '' && subject.code != '') {
                                let start  = document.querySelector('#'+subject.code)
                                let end  = document.querySelector('#'+el)
                                if(start != undefined && end != undefined) {
                                    new LeaderLine(LeaderLine.mouseHoverAnchor(start, 'draw', {style: {background: ''}, hoverStyle: {background: ''}}), end, {
                                        color: '#0abde3', size: 10,
                                        startPlug: 'behind',
                                        endPlug: 'disc',
                                        background: 'null',
                                        path: 'fluid'
                                    });
                                }
                            }
                        });
                    }
                    if(subject.required) {
                        subject.required.forEach(el => {
                            if(el != undefined && subject.code != undefined && el != '' && subject.code != '') {
                                let start  = document.querySelector('#'+subject.code)
                                let end  = document.querySelector('#'+el)
                                if(start != undefined && end != undefined) {
                                    new LeaderLine(LeaderLine.mouseHoverAnchor(start, 'draw', {style: {background: ''}, hoverStyle: {background: ''}}), end, {
                                        color: '#BFC4D1', size: 10,
                                        startPlug: 'behind',
                                        endPlug: 'disc',
                                        background: 'null',
                                        path: 'fluid'
                                    });
                                }
                            }
                        });
                    }
                }
            });
        })
    });




</script>

{#if !loading}
<div class=" bg-slate-200">
    <div class="container m-auto pt-10">        
        {#each $treeSubjects as slot}
        <div class="flex flex-row justify-center my-32">
            {#each slot as subject}
            {#if subject && subject.code != undefined && subject.name != undefined}
            <div id={subject.code}  class="bg-slate-100 hover:bg-white z-10 shadow mx-7 filter rounded p-5 text-md cursor-pointer hover:shadow-md card">
                <div class="flex flex-center justify-center text-4xl mb-4">
                    <Icon icon="ph:atom" />
                </div>
                <h1 class="font-bold text-slate-900 text-center">{subject.name}</h1>
                <h3 class="text-center text-slate-500 font-semibold text-sm">{subject.code}</h3>
                <h3 class="text-center text-slate-500 font-semibold text-sm">5 UV</h3>
            </div>      
            {/if}
            {/each}
        </div>
        {/each}
    </div>

</div>
{/if}

<style>
    .card {
        width: 200px;
        min-width: 200px;
        cursor: pointer!important;
    }
</style>