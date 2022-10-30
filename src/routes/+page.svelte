<script>
    import {db} from '../firebase'
    import { collection, getDocs } from "firebase/firestore"; 
    import { onMount } from 'svelte';


    // Components
    import Card from '../components/Card.svelte'

    onMount(async () => {
        const querySnapshot = await getDocs(collection(db, "clases"));
            querySnapshot.forEach((doc) => {
            console.log(doc.data())
        });

    });
    

   
</script>

<div>
    <Card/>
</div>
