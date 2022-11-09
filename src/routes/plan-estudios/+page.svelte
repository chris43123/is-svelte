<script>
    import Icon from '@iconify/svelte'
    import {getAllData} from '../../utils/firebase/firebaseApi'
    import {onMount, onDestroy } from 'svelte';
    import {tree, subjects, treeSubjects} from '../../store.js'

    let loading = true
    let Line;
    let subjSelected = ''
    let nextSelected = []
    let requiredSelected = []
    let line;
    let lineStart = [];
    let lineEnd = [];
    let cssClass = {
        bg: 'bg-slate-100',
        title: 'text-slate-900',
        subtitle: 'text-slate-500',
        icon: 'bg-slate-400 text-white'
    }
    let cssClassActive = {
        bg: '',
        title: 'text-white',
        subtitle: 'text-white',
        icon: 'bg-blue-500 text-white'
    }

    onMount(async () => {
        const slots = await getAllData('tree', '', '')
        tree.set(slots[0].slots)

        const result = await getAllData('clases', '', '')
        subjects.set(result)
        loading = false


        const {LeaderLine} = await import('../../utils/leader-line.min.js')
        Line = LeaderLine
    });

    function changeSubject(subject) {
        lineStart.map((el) => {
            if(el) {
                el.remove()
            }
        })
        lineEnd.map((el) => {
            if(el) {
                el.remove()
            }
        })
        lineStart = [] 
        lineEnd = []
        
        if(subjSelected != '') {
            document.querySelector('.card-'+subjSelected).classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-blue-500')
            document.querySelector('.title-'+subjSelected).classList.remove('text-slate-900')
            document.querySelector('.icon-'+subjSelected).classList.remove('bg-blue-500')
            document.querySelector('.card-'+subjSelected).classList.add('opacity-50')
        }

        subjSelected = subject.code

        document.querySelector('.card-'+subjSelected).classList.remove('opacity-50')
        document.querySelector('.card-'+subjSelected).classList.add('border-transparent','bg-gradient-to-r', 'from-cyan-500', 'to-blue-500')
        document.querySelector('.icon-'+subjSelected).classList.add('bg-blue-500')


        nextSelected = []
        requiredSelected = []

        subject.next.forEach(element => {
            nextSelected.push(element)
        });
        subject.required.forEach(element => {
            requiredSelected.push(element)
        });

        if(subject) {
            if(subject.next) {
                subject.next.forEach(el => {
                    if(el != undefined && subject.code != undefined && el != '' && subject.code != '') {
                        let start  = document.querySelector('#'+subject.code)
                        let end  = document.querySelector('#'+el)
                        if(start != undefined && end != undefined) {
                            line = new Line(start, end, {
                                color: '#14b8a6', size: 10,
                                startPlug: 'behind',
                                endPlug: 'disc',
                                background: 'null',
                                path: 'fluid',
                                endSocket: 'top',
                                startSocket: 'bottom',
                                hide: true
                            });
                            line['show']('draw');
                            lineStart.push(line)
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
                            line = new Line(start, end, {
                                color: '#fdba74', size: 10,
                                startPlug: 'behind',
                                endPlug: 'disc',
                                background: 'null',
                                endSocket: 'bottom',
                                startSocket: 'top',
                                path: 'fluid',
                                hide: true
                            });
                            line['show']('draw');
                            lineEnd.push(line)
                        }
                    }
                });
            }

            $treeSubjects.forEach(element => {
                element.forEach(element => {
                    let foundReq = '', foundNext = ''
                    if(element != undefined) {
                        let item = document.querySelector('.card-'+element.code)
                        let icon = document.querySelector('.icon-'+element.code)

                        foundReq = requiredSelected.find(el => el == element.code)
                        foundNext = nextSelected.find(el => el == element.code)

                        if(foundReq != undefined && foundReq  != '') {
                            item.classList.remove('opacity-50')
                            item.classList.add('border-b-8' ,'border-orange-300')
                            icon.classList.add('bg-orange-300' ,'text-white')
                        } else {
                            if(item != null) {
                                if(item.classList.contains('border-orange-300')) {
                                    icon.classList.remove('bg-orange-300')
                                    item.classList.remove('border-orange-300')
                                    if(subjSelected != element.code) {
                                        item.classList.add('opacity-50')
                                    }
                                }
                            }
                        }
                        if(foundNext != undefined && foundNext != '') {
                            item.classList.remove('opacity-50')
                            item.classList.add('border-t-8' ,'border-teal-500')
                            icon.classList.add('bg-teal-500' ,'text-white')
                        } else {
                            if(item != null) {
                                if(item.classList.contains('border-teal-500')) {
                                    item.classList.remove('border-teal-500')
                                    icon.classList.remove('bg-teal-500')
                                    if(subjSelected != element.code) {
                                        item.classList.add('opacity-50')
                                    }
                                }
                            }
                        }
                    }
                    
                });
            });
        }
    }

    onDestroy( () => {
        lineStart.map((el) => {
            if(el) {
                el.remove()
            }
        })
        lineEnd.map((el) => {
            if(el) {
                el.remove()
            }
        })
        lineStart = [] 
        lineEnd = [] 
    });



</script>

{#if !loading}
<div class="bg-gray-800 items-start pt-8 border-b border-gray-700">
    <h1 class="text-3xl text-slate-100 font-bold mb-2 text-center">Plan de Estudios</h1>
    <h2 class="text-lg font-semibold text-gray-100 text-center">Explora las clases correspondientes al plan de estudios de la carrera Ingeniería en Sistemas </h2>

    <div class="container m-auto">
        <div class="flex flex-row justify-center py-10 text-lg text-slate-100">
            <div class="flex flex-row mx-4 p-2 bg-slate-700 rounded-md">
                <div class="rounded-md w-7 h-7 bg-blue-500 mr-3"></div>
                <h2>Seleccionada</h2>
            </div>
            <div class="flex flex-row mx-4 p-2 bg-slate-700 rounded-md">
                <div class="rounded-md w-7 h-7 bg-orange-300 mr-3"></div>
                <h2>Requerida</h2>
            </div>  
            <div class="flex flex-row mx-4 p-2 bg-slate-700 rounded-md">
                <div class="rounded-md w-7 h-7 bg-teal-500 mr-3"></div>
                <h2>Apertura</h2>
            </div>     
        </div>
    </div>
</div>

<div class=" bg-gray-800">
    <div class="container m-auto pt-10">        
        {#each $treeSubjects as slot}
        <div class="flex flex-row justify-center mt-32">
            {#each slot as subject}
            {#if subject && subject.code != undefined && subject.name != undefined}
            <div id={subject.code} 
            on:click={changeSubject(subject)} 
            on:keypress={changeSubject} 
            class="transition-all opacity-50 duration-500 shadow border-t-8 border-b-8 border-transparent mx-7 filter rounded p-5 text-md cursor-pointer hover:shadow-md card 
            {cssClass.bg} 
            {'card-'+subject.code}
            ">
                <div class="flex flex-center justify-center text-4xl mb-4">
                    <div class="p-3 bg-slate-400 rounded-full {cssClass.icon} {'icon-'+subject.code}">
                        <Icon icon="ph:atom" />
                    </div>
                </div>
                <h1 class="font-bold text-md text-center mb-2 {subjSelected == subject.code ? cssClassActive.title : cssClass.title} {'title-'+subject.code} ">{subject.name}</h1>
                <h3 class="text-center font-semibold text-sm {subjSelected == subject.code ? cssClassActive.subtitle : cssClass.subtitle} {'subtitle-'+subject.code} ">{subject.code}</h3>
                <h3 class="text-center font-semibold text-sm {subjSelected == subject.code ? cssClassActive.subtitle : cssClass.subtitle} {'subtitle-'+subject.code} ">5 UV</h3>
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