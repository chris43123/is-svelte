<script>
    import {db} from '../firebase'
    import { collection, getDocs } from "firebase/firestore"; 
    import { onMount } from 'svelte';

    
    // Components
    import Period from '../components/Period.svelte'
    import Card from '../components/Card.svelte';

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, "clases"));
            querySnapshot.forEach((doc) => {
            console.log(doc.data())
        });

    });
    

   
</script>

<div class="container m-auto">
    <Period/>
    <Period/>

    <section>
        <div class="grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
            <Card disabled/>
            <Card disabled/>
    
        </div>
    </section>
</div>
