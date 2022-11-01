<script>
	import Icon from '@iconify/svelte';
    import Header from '../components/Header.svelte'
</script>


<Header/>

<div class="mx-auto max-w-screen-2xl px-4 py-8 sm:px-6 lg:px-8">

	<!-- Sobre Nosotros -->
	<section class="py-4">
		<div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
			<div class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
				<img
					alt="Party"
					src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
					class="absolute inset-0 h-full w-full object-cover"
				/>
			</div>

			<div class="lg:py-24">
				<h4 class="text-1xl font-semibold text-slate-600">Nuestra Carrera</h4>
				<h2 class="text-3xl font-bold text-blue-900 sm:text-4xl">Ingeniería en Sistemas</h2>

				<p class="mt-4 text-gray-600">
					Bienvenidos a la página de Ingeniería en Sistemas de la UNAH, donde podrá encontrar
					información sobre trámites académicos,actividades, eventos, noticias y demás asuntos de
					interés. Nuestras áreas de enseñanza corresponden a Circuitos y Electrónica, Desarrollo de
					Software, Base de Datos y Redes de Datos, permitiendo al estudiante al culminar su carrera
					poder desempeñarse en cualquiera de estas áreas y así mismo poder realizar una perfecta
					integración de todas ellas, posibilitando el desarrollo de proyecto de alta calidad y
					cumpliendo con todos los requisitos que el cliente desea.
				</p>

				<a
					href="#"
					class="mt-8 inline-flex items-center rounded border border-slate-900 px-8 py-3 text-slate-900 hover:bg-transparent hover:bg-slate-900 hover:text-slate-50 focus:outline-none active:text-slate-500"
				>
					<span class="text-sm font-medium"> Comparte </span>

					<svg
						class="ml-3 h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M17 8l4 4m0 0l-4 4m4-4H3"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>


	<!-- Conocimientos -->
	<section class="py-4">
		<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
		  <div class="mx-auto max-w-lg text-center">
			<h4 class="font-bold text-lg text-gray-700">Conoce</h4>
			<h2 class="text-3xl font-bold text-blue-900 sm:text-4xl">Areas de Conocimiento</h2>
	  
			<p class="mt-4 text-gray-900">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam fugit consequuntur saepe laborum.</p>
		  </div>
	  
		  <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
			<div class="block p-8 bg-gray-50 rounded-lg">
			  <div class="flex justify-center text-6xl">
				<Icon icon="mdi:database-cog" />
			  </div>
	  
			  <h2 class="mt-4 text-center text-xl font-bold text-blue-900">Bases de Datos</h2>
	  
			  <p class="mt-1 text-center text-sm text-gray-900">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p>
			</div>
	  
			<div class="block p-8 bg-gray-50 rounded-lg">
				<div class="flex justify-center text-6xl">
					<Icon icon="el:network" />
				</div>
	  
			  <h2 class="mt-4 text-center text-xl font-bold text-blue-900">Redes de Datos</h2>
	  
			  <p class="mt-1 text-center text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
			</div>
	  
			<div class="block p-8 bg-gray-50 rounded-lg">
			  <div class="flex justify-center text-6xl">
				<Icon icon="fa-solid:file-code" />
			  </div>
	  
			  <h2 class="mt-4 text-center text-xl font-bold text-blue-900">Programación</h2>
	  
			  <p class="mt-1 text-center text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
			</div>
	  
			<div class="block p-8 bg-gray-50 rounded-lg">
			  <div class="flex justify-center text-6xl">
				<Icon icon="tabler:circuit-resistor" />
			  </div>
	  
			  <h2 class="mt-4 text-center text-xl font-bold text-blue-900">Electrónica</h2>
	  
			  <p class="mt-1 text-center text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
			</div>
	  
			<div class="block p-8 bg-gray-50 rounded-lg">
			  <div class="flex justify-center text-6xl">
				<Icon icon="wpf:security-checked" />
			  </div>
	  
			  <h2 class="mt-4 text-center text-xl font-bold text-blue-900">Seguridad Informática</h2>
	  
			  <p class="mt-1 text-center text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
			</div>
	  
			<div class="block p-8 bg-gray-50 rounded-lg">
			  <div class="flex justify-center text-6xl">
				<Icon icon="fluent:brain-circuit-24-filled" />
			  </div>
	  
			  <h2 class="mt-4 text-center text-xl font-bold text-blue-900">Inteligencia Artifical</h2>
	  
			  <p class="mt-1 text-center text-sm text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex ut quo possimus adipisci distinctio alias voluptatum blanditiis laudantium.</p>
			</div>
		  </div>
		</div>
	  </section>	  
</div>