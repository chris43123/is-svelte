<script>
    import Icon from '@iconify/svelte'
    import {getAllData} from '../../utils/firebase/firebaseApi'
    import {onMount, onDestroy } from 'svelte';
    import {tree, subjects, treeSubjects} from '../../store.js'
    import bg from '../../public/fondo.png'

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
            document.querySelector('.card-'+subjSelected).classList.add('bg-slate-300')
        }

        subjSelected = subject.code

        document.querySelector('.card-'+subjSelected).classList.remove('bg-slate-300')
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
        let size = 10
        if(screen.width < 900) {
            size = 6
        }

        if(subject) {
            if(subject.next) {
                subject.next.forEach(el => {
                    if(el != undefined && subject.code != undefined && el != '' && subject.code != '') {
                        let start  = document.querySelector('#'+subject.code)
                        let end  = document.querySelector('#'+el)
                        console.log(screen.width)
                        if(start != undefined && end != undefined) {
                            line = new Line(start, end, {
                                color: '#14b8a6', size: size,
                                startPlug: 'behind',
                                endPlug: 'disc',
                                background: 'null',
                                path: 'fluid',
                                endSocket: 'top',
                                startSocket: 'bottom',
                                hide: true,
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
                                color: '#fdba74', size: size,
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
                            item.classList.remove('bg-slate-300')
                            item.classList.add('border-b-8' ,'border-orange-300', 'bg-white')
                            icon.classList.add('bg-orange-300' ,'text-white')
                        } else {
                            item.classList.add('bg-slate-300')
                            if(item != null) {
                                if(item.classList.contains('border-orange-300')) {
                                    icon.classList.remove('bg-orange-300')
                                    item.classList.remove('border-orange-300', 'bg-slate-300', 'bg-white')
                                    if(subjSelected != element.code) {
                                        item.classList.add('bg-slate-300')
                                    }
                                }
                            }
                        }
                        if(foundNext != undefined && foundNext != '') {
                            item.classList.remove('bg-slate-300')
                            item.classList.add('border-t-8' ,'border-teal-500', 'bg-white')
                            icon.classList.add('bg-teal-500' ,'text-white')
                        } else {
                            if(item != null) {
                                if(item.classList.contains('border-teal-500')) {
                                    item.classList.remove('border-teal-500', 'bg-slate-300', 'bg-white')
                                    item.classList.add('bg-slate-300')
                                    icon.classList.remove('bg-teal-500')
                                    if(subjSelected != element.code) {
                                        item.classList.add('bg-slate-300')
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

<!-- style="background-image: url('{bg}');  background-position: left; background-size: contain; backdrop-filter: blur(5px) -->
<div class="py-20 bg-slate-100">

    <h1 class="text-5xl text-gray-800 font-bold mb-2 text-center">Plan de Estudios</h1>
    <h2 class="text-xl font-semibold text-gray-800 text-center">Explora las clases correspondientes al plan de estudios de la carrera Ingeniería en Sistemas </h2>

    <div class="container m-auto">
        <div class="flex flex-col md:flex-row justify-center py-10 text-lg text-gray-800">
            <div class="flex flex-row mx-4 p-2 bg-gray-100 shadow rounded-md mb-4">
                <div class="rounded-md w-7 h-7 bg-blue-500 mr-3"></div>
                <h2>Seleccionada</h2>
            </div>
            <div class="flex flex-row mx-4 p-2 bg-gray-100 shadow rounded-md mb-4">
                <div class="rounded-md w-7 h-7 bg-orange-300 mr-3"></div>
                <h2>Requerida</h2>
            </div>  
            <div class="flex flex-row mx-4 p-2 bg-gray-100 shadow rounded-md mb-4">
                <div class="rounded-md w-7 h-7 bg-teal-500 mr-3"></div>
                <h2>Apertura</h2>
            </div>     
        </div>
    </div>
    <div class="container m-auto pt-10">        
        {#each $treeSubjects as slot}
        <div class="flex flex-row justify-center md:mt-24 lg:mt-32 container-pills">
            {#each slot as subject}
            {#if subject && subject.code != undefined && subject.name != undefined}
            <div id={subject.code} 
            on:click={changeSubject(subject)} 
            on:keypress={changeSubject} 
            class="transition-all bg-slate-300 duration-500 shadow-md border-t-8 border-b-8 border-transparent mx-7 rounded p-5 text-md cursor-pointer hover:shadow-lg card 
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
                <h3 class="text-center font-semibold text-sm {subjSelected == subject.code ? cssClassActive.subtitle : cssClass.subtitle} {'subtitle-'+subject.code} ">{subject.uv} UV</h3>
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
    .card h1 {
        /* white-space: nowrap; */
        overflow: hidden;
        text-overflow: ellipsis;
    }
    @media (max-width: 1300px) {
        .card {
            width: 150px;
            min-width: 150px;
            margin: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .card h1 {
            margin-bottom: 0;
        }
        .card h3 {
            display: none;
        }
    }
    @media (max-width: 900px) {
        .card {
            width: 125px;
            min-width: 125px;
        }
        .card h1 {
            font-size: 12px;
        }
        .card div {
            display: none;
        }
    }

    @media (max-width: 750px) {
        .container-pills {
            flex-wrap: wrap;
        }
        .card {
            margin-bottom: 25px;
        }
    }

</style>