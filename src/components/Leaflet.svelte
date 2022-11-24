<script>
    import { onMount, onDestroy } from 'svelte';
    import { browser } from '$app/environment';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    let mapElement;
    let map;
    let leaflet;
    export let sm, lg
    export let lat = 15.529926982165401
    export let lng = -88.03643405442018
    export let zoom = 16
    export let view = false
    export let popup = ''

    onMount(async () => {
        if(browser) {
            leaflet = await import('leaflet');

            map = leaflet.map(mapElement).setView([lat, lng], zoom);
            
            leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

            }).addTo(map);
            let marker = leaflet.marker([lat, lat]).addTo(map)

            console.log(view)

            if(view == true) {
                console.log('test')
                console.log(lat)
                if(popup != '') {
                    console.log(popup)
                    marker = leaflet.marker([lat, lng]).addTo(map)
                    .bindPopup(popup)
                    .openPopup();
                } else {
                    marker = leaflet.marker([lat, lng]).addTo(map)
                }
            } else {
                map.on('click', function(e) {
                    if(marker) {
                        map.removeLayer(marker)
                    }
                    marker = leaflet.marker([e.latlng.lat, e.latlng.lng]).addTo(map)
                    sendLatLng(e.latlng)
                })
            }
                
        }
    });

    function sendLatLng(latLng) {
		dispatch('getLatLng', latLng);
	}

    onDestroy(async () => {
        if(map) {
            map.remove();
        }
    });
</script>


<main>
    <div class:sm={sm} class:lg={lg}  bind:this={mapElement}></div>
</main>

<style>
    @import 'leaflet/dist/leaflet.css';
    main div {
        height: 300px;
    }
    main .lg {
        height: 500px;
    }
</style>