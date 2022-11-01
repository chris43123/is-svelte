<script>
    import {studentConverter} from '../utils/firebaseMap'
    import {getData} from '../utils/firebaseApi'
    import { onMount } from 'svelte';

    // Components
    import Period from '../components/Period.svelte'
    import Card from '../components/Card.svelte';
    import Modal from '../components/Modal.svelte';

    let component = {
        component: Card
    }

    //Variables
    let student = {}
    let timeline = []

    onMount(async () => {
        student = await getData('students', 'eYsc5rON7R6yOw4uaCyr', studentConverter);
        if (student) {
            timeline = student.timeline
        }
    });
    
    let show = false;
    function closeModal() {
        console.log(true)
        show = false
    }
   
</script>

<div class="container m-auto">
    <button on:click={() => show = true}>Click</button>

    <Modal on:close={closeModal} show={show}>
    </Modal>

    {#each timeline as period}
        <Period name={period.period} year={period.year} subjects={period.subjects} component={component}/>
    {/each}

    <section>
        <div class="grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <!-- <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/>
            <Card disabled/> -->
    
        </div>
    </section>
</div>
