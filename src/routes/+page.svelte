<script>
	import Icon from '@iconify/svelte';
    import Header from '../components/Header.svelte'

	import cisco from '../public/Cisco-Fuente.png'
	import java from '../public/java.png'
	import sql from '../public/sql.png'
	import raspberry from '../public/raspberry.png'
	import ubuntu from '../public/ubuntu.png'
	import shap from '../public/num_shap.png'

	import { onMount } from 'svelte'
  	import anime from "animejs";

	onMount(async () => {
    });

	function visibleContent() {
		console.log('test')
		anime({
			targets: '#countOne',
			value: [0, 1000],
			round: 1,
			easing: 'easeInOutExpo'
		});
	}


</script>


<Header/>

<div class="">
	<section>
		<div class="relative bg-gradient-to-r rounded-lg px-36 from-blue-700 to-blue-500 mx-auto max-w-screen-xl pb-24 ">
			<img class="absolute left-0 top-0 w-full h-full opacity-30" src={shap} alt="">
			<div class="flex flex-row justify-between pt-12 pb-1 mb-10 border-b border-white">
				<div class="flex items-center">
					<img class="w-32" src={cisco} alt="">
				</div>
				<div class="flex items-center">
					<img class="w-24" src={java} alt="">
				</div>
				<div class="flex items-center">
					<img class="w-44" src={sql} alt="">
				</div>
				<div class="flex items-center">
					<img class="w-48" src={raspberry} alt="">
				</div>
				<div class="flex items-center">
					<img class="w-36" src={ubuntu} alt="">
				</div>
			</div>
			<div class="grid grid-cols-2">
				<div class="flex items-center">
					<h2 class="text-white text-semibold text-5xl">Creamos, Transformamos y Simplificamos</h2>
				</div>
				<div>
					<p class="text-lg text-white">Nuestras áreas de enseñanza corresponden a Circuitos y Electrónica, Desarrollo de Software, Base de Datos y Redes de Datos, permitiendo al estudiante al culminar su carrera poder desempeñarse en cualquiera de estas áreas y así mismo poder realizar una perfecta integración de todas ellas, posibilitando el desarrollo de proyecto de alta calidad y cumpliendo con todos los requisitos que el cliente desea.</p>
				</div>
			</div>
			<div class="grid grid-cols-4 pt-16" on:visibilitychange={visibleContent}>
				<div class="text-white font-medium text-center">
					<input class="w-full text-center inline-block p-0 bg-transparent text-5xl" id="countOne">
					<p class="text-2xl mt-3">Estudiantes</p>
				</div>
				<div class="text-white font-medium text-center">
					<input class="w-full text-center inline-block p-0 bg-transparent text-5xl" id="countTwo">
					<p class="text-2xl mt-3">Catedrático</p>
				</div>
				<div class="text-white font-medium text-center">
					<input class="w-full text-center inline-block p-0 bg-transparent text-5xl" id="countThree">
					<p class="text-2xl mt-3">Clases</p>
				</div>
				<div class="text-white font-medium text-center">
					<input class="w-full text-center inline-block p-0 bg-transparent text-5xl" id="countFour">
					<p class="text-2xl mt-3">UV</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Conocimientos -->
	<section class="py-4">
		<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
		  <div class="mx-auto max-w-2xl text-center">
			<h4 class="font-bold text-lg text-gray-600">Conoce</h4>
			<h2 class="text-3xl font-bold text-blue-700 sm:text-4xl">Areas de Conocimiento</h2>
	  
			<p class="mt-4 text-gray-900">Es una rama de la Ingeniería que implica la planificación, diseño, desarrollo, implementación y mantenimiento de 
				los sistemas de información, que usan las diferentes empresas u organizaciones para procesar datos y producir información, que ayude 
				en la toma de decisiones.</p>
		  </div>
	  
		  <div class="mt-8 grid xs:grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3">
			<div class="block p-8 rounded-md shadow-md">
				<div class="flex flex-row  items-center justify-between">
					<h2 class="mt-4 text-xl font-medium text-gray-800 mb-5">Bases de Datos</h2>
					<h2 class="text-blue-700 font-semibold">01</h2>
				</div>
				<div class="inline-block mb-5 p-3 rounded-md bg-blue-50">
					<Icon icon="ph:database-thin" class="text-blue-700 text-7xl" />
				</div>
			  	<p class="text-md text-gray-500">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p>
			</div>

			<div class="block p-8 rounded-md shadow-md">
				<div class="flex flex-row items-center justify-between">
					<h2 class="mt-4 text-xl font-medium text-gray-800 mb-5">Redes de Datos</h2>
					<h2 class="text-blue-700 font-semibold">02</h2>
				</div>
				<div class="inline-block mb-5 p-3 rounded-md bg-blue-50">
					<Icon icon="ph:globe-simple-thin" class="text-blue-700 text-7xl"/>
				</div>
			  	<p class="text-md text-gray-500">Son redes de comunicación en las que se han diseñado para transmitir datos y es un método eficaz de compartir la información a los usuarios aumentando la productividad, evitar la duplicación del equipo y de los recursos.</p>
			</div>

			<div class="block p-8 rounded-md shadow-md">
				<div class="flex flex-row items-center justify-between">
					<h2 class="mt-4 text-xl font-medium text-gray-800 mb-5">Programación</h2>
					<h2 class="text-blue-700 font-semibold">03</h2>
				</div>
				<div class="inline-block mb-5 p-3 rounded-md bg-blue-50">
					<Icon icon="ph:file-code-thin" class="text-blue-700 text-7xl"/>
				</div>
			  	<p class="text-md text-gray-500">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p>
			</div>

			<div class="block p-8 rounded-md shadow-md">
				<div class="flex flex-row items-center justify-between">
					<h2 class="mt-4 text-xl font-medium text-gray-800 mb-5">Electrónica</h2>
					<h2 class="text-blue-700 font-semibold">04</h2>
				</div>
				<div class="inline-block mb-5 p-3 rounded-md bg-blue-50">
					<Icon icon="ph:activity-thin" class="text-blue-700 text-7xl"/>
				</div>
			  	<p class="text-md text-gray-500">La electrónica es una rama de la física aplicada que comprende la física, la ingeniería, la tecnología, trata con circuitos eléctricos que involucran componentes eléctricos activos como tubos de vacío, transistores, diodos, circuitos integrados, optoelectrónica y sensores, asociados con componentes eléctricos pasivos y tecnologías de interconexión.</p>
			</div>

			<div class="block p-8 rounded-md shadow-md">
				<div class="flex flex-row items-center justify-between">
					<h2 class="mt-4 text-xl font-medium text-gray-800 mb-5">Seguridad Informática</h2>
					<h2 class="text-blue-700 font-semibold">05</h2>
				</div>
				<div class="inline-block mb-5 p-3 rounded-md bg-blue-50">
					<Icon icon="ph:shield-check-thin" class="text-blue-700 text-7xl"/>
				</div>
			  	<p class="text-md text-gray-500">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p>
			</div>

			<div class="block p-8 rounded-md shadow-md">
				<div class="flex flex-row items-center justify-between">
					<h2 class="mt-4 text-xl font-medium text-gray-800 mb-5">Inteligencia Artifical</h2>
					<h2 class="text-blue-700 font-semibold">06</h2>
				</div>
				<div class="inline-block mb-5 p-3 rounded-md bg-blue-50">
					<Icon icon="ph:git-branch-thin" class="text-blue-700 text-7xl"/>
				</div>
			  	<p class="text-md text-gray-500">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p>
			</div>
	  
		  </div>
		</div>
	  </section>	  
</div>