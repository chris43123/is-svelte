import { c as create_ssr_component, e as escape, v as validate_component, d as add_attribute } from "../../chunks/index.js";
import { I as Icon } from "../../chunks/Icon.js";
import "animejs";
const bg = "/_app/immutable/assets/head_shape_r-6d73d379.png";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section style="${"background-image: url('" + escape(bg, true) + "'); background-position: left;"}"><div class="${"bg-white/30"}"><div class="${"mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"}"><div class="${"grid grid-cols-1 md:grid-cols-2 md:gap-28"}"><div class="${"py-56"}"><p class="${"text-2xl text-blue-700 font-semibold"}">Somos</p>
                    <h1 class="${"mb-6 text-6xl text-gray-800 font-semibold"}">Ingenier\xEDa en Sistemas</h1>
                    <h2 class="${"text-lg font-semibold text-gray-600"}">Bienvenidos a la p\xE1gina de Ingenier\xEDa en Sistemas de la UNAH, donde podr\xE1 encontrar informaci\xF3n sobre tr\xE1mites acad\xE9micos,actividades, eventos, noticias y dem\xE1s asuntos de inter\xE9s. </h2>
                    <div class="${"mt-8"}"><a href="${"/informacion"}" class="${"border-2 border-blue-700 bg-blue-700 text-white text-lg rounded px-6 py-2 mt-4 mr-2"}">Ver M\xE1s</a>
                        <a href="${"https://firebasestorage.googleapis.com/v0/b/proyecto-svelte.appspot.com/o/Ingenieria-en-sistemas-2022.pdf?alt=media&token=b54cb1b7-4cc8-4b9c-b50d-6a891490a0d4"}" target="${"_blank"}" rel="${"noopener noreferrer"}" class="${"border-2 border-blue-700 text-blue-700 hover:border-blue-700 hover:bg-blue-700 hover:text-white text-lg rounded px-8 py-2 mt-4 mr-2"}">Plan de Estudios</a></div></div>
                <div class="${"items-center hidden md:flex"}"><div class="${"grid grid-cols-12 gap-7 items-center"}"><div class="${"col-span-5"}"><div class="${"grid grid-cols-1 gap-4"}"><img class="${"w-full shadow rounded-lg"}" src="${"https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}" alt="${""}">
                                
                                <div class="${"ml-auto"}"><div class="${"w-28 h-28 bg-blue-700 rounded-lg"}"></div></div></div></div>
                        <div class="${"col-span-7"}"><div class="${"grid grid-cols-1 gap-4"}"><img class="${"w-full shadow rounded-lg"}" src="${"https://images.unsplash.com/photo-1596496050756-93ba991aae15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80"}" alt="${""}"></div></div></div></div></div></div></div></section>`;
});
const cisco = "/_app/immutable/assets/Cisco-Fuente-e09c7724.png";
const java = "/_app/immutable/assets/java-6825342e.png";
const sql = "/_app/immutable/assets/sql-197c3ad9.png";
const raspberry = "/_app/immutable/assets/raspberry-bf144386.png";
const ubuntu = "data:image/png;base64,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";
const shap = "/_app/immutable/assets/num_shap-63bebc54.png";
const ingRoberto = "/_app/immutable/assets/roberto-8d95347d.png";
const ingNazarena = "/_app/immutable/assets/nazarena-711c5eaa.png";
const ingGerardo = "/_app/immutable/assets/gerardo-4aeccd17.png";
const ingVargas = "/_app/immutable/assets/vargas-77e63a82.png";
const ingBrand = "/_app/immutable/assets/brand-93f12d7e.png";
const ingJuan = "/_app/immutable/assets/alvarenga-2c55e337.png";
const ingChacon = "/_app/immutable/assets/chacon-df2624c9.png";
const ingLara = "/_app/immutable/assets/lara-b5331568.png";
const ingBorjas = "/_app/immutable/assets/borjas-24eb6bcb.png";
const ingCubilla = "/_app/immutable/assets/cubilla-5f709fc5.png";
const ingLiliana = "/_app/immutable/assets/liliana-c52d7676.png";
const ingDavid = "/_app/immutable/assets/david-a008a501.png";
const ingJulio = "/_app/immutable/assets/julio-116cdc04.png";
const ingAlba = "/_app/immutable/assets/alba-b4ec5b21.png";
const code = "/_app/immutable/assets/browser-47dc56a5.png";
const cpu = "/_app/immutable/assets/cpu-5aa2a454.png";
const data = "/_app/immutable/assets/data-storage-a02b941b.png";
const network = "/_app/immutable/assets/network-005edb80.png";
const networkOne = "/_app/immutable/assets/network-1-4c95184c.png";
const component = "/_app/immutable/assets/video-card-635fede3.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Header, "Header").$$render($$result, {}, {}, {})}

<div class="${""}"><section><div class="${"relative bg-gradient-to-r rounded-lg from-blue-700 to-blue-500 mx-auto max-w-screen-xl px-8 py-16 md:px-36 md:pb-24 md:pt-20 lg:pt-0"}"><img class="${"absolute left-0 top-0 w-full h-full flex items-stretch px-8 py-4 opacity-30"}"${add_attribute("src", shap, 0)} alt="${""}">
			<div class="${"hidden flex-row justify-between pt-12 pb-1 mb-10 border-b border-white lg:flex"}"><div class="${"flex items-center"}"><img class="${"w-32"}"${add_attribute("src", cisco, 0)} alt="${""}"></div>
				<div class="${"flex items-center"}"><img class="${"w-24"}"${add_attribute("src", java, 0)} alt="${""}"></div>
				<div class="${"flex items-center"}"><img class="${"w-44"}"${add_attribute("src", sql, 0)} alt="${""}"></div>
				<div class="${"flex items-center"}"><img class="${"w-48"}"${add_attribute("src", raspberry, 0)} alt="${""}"></div>
				<div class="${"flex items-center"}"><img class="${"w-36"}"${add_attribute("src", ubuntu, 0)} alt="${""}"></div></div>
			<div class="${"grid lg:grid-cols-2 md:grid-cols-1"}"><div class="${"flex items-center"}"><h2 class="${"text-white text-bold text-4xl md:mb-3"}">Creamos, Transformamos y Simplificamos</h2></div>
				<div><p class="${"text-lg text-white"}">Nuestras \xE1reas de ense\xF1anza corresponden a Circuitos y Electr\xF3nica, Desarrollo de Software, Base de Datos y Redes de Datos, permitiendo al estudiante al culminar su carrera poder desempe\xF1arse en cualquiera de estas \xE1reas y as\xED mismo poder realizar una perfecta integraci\xF3n de todas ellas, posibilitando el desarrollo de proyecto de alta calidad y cumpliendo con todos los requisitos que el cliente desea.</p></div></div>
			<div class="${"grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 pt-16"}"><div class="${"text-white font-medium text-center pb-8 md:pb-0"}"><input class="${"w-full text-center inline-block p-0 bg-transparent text-5xl"}" id="${"countOne"}">
					<p class="${"text-2xl mt-3"}">Estudiantes</p></div>
				<div class="${"text-white font-medium text-center pb-8 md:pb-0"}"><input class="${"w-full text-center inline-block p-0 bg-transparent text-5xl"}" id="${"countTwo"}">
					<p class="${"text-2xl mt-3"}">Catedr\xE1ticos</p></div>
				<div class="${"text-white font-medium text-center pb-8 md:pb-0"}"><input class="${"w-full text-center inline-block p-0 bg-transparent text-5xl"}" id="${"countThree"}">
					<p class="${"text-2xl mt-3"}">Clases</p></div>
				<div class="${"text-white font-medium text-center pb-8 md:pb-0"}"><input class="${"w-full text-center inline-block p-0 bg-transparent text-5xl"}" id="${"countFour"}">
					<p class="${"text-2xl mt-3"}">UV</p></div></div></div></section>


	
	<section class="${"py-4"}"><div class="${"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"}"><div class="${"mx-auto max-w-2xl text-center"}"><h4 class="${"font-bold text-lg text-gray-600"}">Conoce</h4>
			<h3 class="${"text-blue-700 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"}">\xC1reas de Conocimiento</h3>
	  
			<p class="${"mt-4 text-slate-500 max-w-xl mx-auto"}">Es una rama de la Ingenier\xEDa que implica la planificaci\xF3n, dise\xF1o, desarrollo, implementaci\xF3n y mantenimiento de 
				los sistemas de informaci\xF3n, que usan las diferentes empresas u organizaciones para procesar datos y producir informaci\xF3n, que ayude 
				en la toma de decisiones.</p></div>
	  
		  <div class="${"mt-8 grid xs:grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-3"}"><div class="${"block p-8 rounded-md shadow-md"}"><h2 class="${"mt-4 text-xl font-medium text-gray-800 mb-5 text-center"}">Bases de Datos</h2>
				<div class="${"mb-5 p-3 rounded-md"}"><img${add_attribute("src", cpu, 0)} alt="${""}" class="${"w-1/3 m-auto"}"></div>
			  	<p class="${"text-md text-gray-500"}">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p></div>

			<div class="${"block p-8 rounded-md shadow-md"}"><h2 class="${"mt-4 text-xl font-medium text-gray-800 mb-5 text-center"}">Redes de Datos</h2>
				<div class="${"mb-5 p-3 rounded-md"}"><img${add_attribute("src", network, 0)} alt="${""}" class="${"w-1/3 m-auto"}"></div>
			  	<p class="${"text-md text-gray-500"}">Son redes de comunicaci\xF3n en las que se han dise\xF1ado para transmitir datos y es un m\xE9todo eficaz de compartir la informaci\xF3n a los usuarios aumentando la productividad, evitar la duplicaci\xF3n del equipo y de los recursos.</p></div>

			<div class="${"block p-8 rounded-md shadow-md"}"><h2 class="${"mt-4 text-xl font-medium text-gray-800 mb-5 text-center"}">Programaci\xF3n</h2>
				<div class="${"mb-5 p-3 rounded-md"}"><img${add_attribute("src", code, 0)} alt="${""}" class="${"w-1/3 m-auto"}"></div>
			  	<p class="${"text-md text-gray-500"}">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p></div>

			<div class="${"block p-8 rounded-md shadow-md"}"><h2 class="${"mt-4 text-xl font-medium text-gray-800 mb-5 text-center"}">Electr\xF3nica</h2>
				<div class="${"mb-5 p-3 rounded-md"}"><img${add_attribute("src", component, 0)} alt="${""}" class="${"w-1/3 m-auto"}"></div>
			  	<p class="${"text-md text-gray-500"}">Es una disciplina considerada como rama de la f\xEDsica aplicada, y una especializaci\xF3n de la ingenier\xEDa. Trata con los circuitos electr\xF3nicos que forman parte de los dispositivos que utilizamos a diario.</p></div>

			<div class="${"block p-8 rounded-md shadow-md"}"><h2 class="${"mt-4 text-xl font-medium text-gray-800 mb-5 text-center"}">Seguridad Inform\xE1tica</h2>
				<div class="${"mb-5 p-3 rounded-md"}"><img${add_attribute("src", networkOne, 0)} alt="${""}" class="${"w-1/3 m-auto"}"></div>
			  	<p class="${"text-md text-gray-500"}">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p></div>

			<div class="${"block p-8 rounded-md shadow-md"}"><h2 class="${"mt-4 text-xl font-medium text-gray-800 mb-5 text-center"}">Inteligencia Artifical</h2>
				<div class="${"mb-5 p-3 rounded-md"}"><img${add_attribute("src", data, 0)} alt="${""}" class="${"w-1/3 m-auto"}"></div>
			  	<p class="${"text-md text-gray-500"}">Ser capaz de gestionar sistemas de almacenamiento distribuido. Crear sistemas de reportes de forma que sea posible ver los datos de forma sencilla.</p></div></div></div></section>	
	  
	  <section class="${"py-4"}"><div class="${"mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"}"><div class="${"container md:mt-24 mt-16"}"><div class="${"mx-auto max-w-2xl text-center mb-16"}"><h4 class="${"font-bold text-lg text-gray-600"}">Conoce</h4>
					<h3 class="${"text-blue-700 mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold"}">A Nuestros Catedr\xE1ticos</h3>
			  
					<p class="${"mt-4 text-slate-400 max-w-xl mx-auto"}">A continuaci\xF3n, te invitamos a conocer a algunos de los miembros de nuestro equipo de docentes en Ingenier\xEDa en Sistemas, quienes est\xE1n compuesto por expertos en la materia, profesionales apasionados cuya motivaci\xF3n y dedicaci\xF3n a su trabajo es vital para el \xE9xito de los estudiantes de la carrera.</p></div>

                <div class="${"flex items-center flex-wrap justify-center mt-8"}"><div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-slate-300/10 dark:bg-slate-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingRoberto, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Roberto Hern\xE1ndez</span>
                                <span class="${"text-slate-400 block mb-2"}">Programaci\xF3n</span>
                                <a href="${"mailto:roberto.hernandez@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )}
									<span>roberto.hernandez@unah.edu.hn</span></a></div></div></div>
                    
                    <div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-emerald-300/10 dark:bg-emerald-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingNazarena, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Nazarena Idi\xE1quez</span>
                                <span class="${"text-slate-400 block mb-2"}">Administraci\xF3n</span>
                                <a href="${"mailto:nazarena.idiaquez@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>nazarena.idiaquez@unah.edu.hn</span></a></div></div></div>
                    
                    <div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-red-300/10 dark:bg-red-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingGerardo, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Gerardo Portillo</span>
                                <span class="${"text-slate-400 block mb-2"}">Programaci\xF3n</span>

                                <a href="${"mailto:gerardo.portillo@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>gerardo.portillo@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-blue-300/10 dark:bg-blue-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingVargas, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Jorge Vargas</span>
                                <span class="${"text-slate-400 block mb-2"}">Electr\xF3nica</span>

                                <a href="${"mailto:jorge.vargas@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>jorge.vargas@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-slate-300/10 dark:bg-slate-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingBrand, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Guillermo Brand</span>
                                <span class="${"text-slate-400 block mb-2"}">Seguridad Inform\xE1tica</span>
                                <a href="${"mailto:guillermo.brand@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>guillermo.brand@unah.edu.hn</span></a></div></div></div>
                    
                    <div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-emerald-300/10 dark:bg-emerald-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingChacon, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Mar\xEDa Chac\xF3n</span>
                                <span class="${"text-slate-400 block mb-2"}">Administraci\xF3n</span>
                                <a href="${"mailto:maria.chacon@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>maria.chacon@unah.edu.hn</span></a></div></div></div>
                    
                    <div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-red-300/10 dark:bg-red-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingJuan, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Juan Alvarenga</span>
                                <span class="${"text-slate-400 block mb-2"}">Programaci\xF3n Web</span>

                                <a href="${"mailto:jealvarengar@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>jealvarengar@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-blue-300/10 dark:bg-blue-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingLara, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Lara Norori</span>
                                <span class="${"text-slate-400 block mb-2"}">Administraci\xF3n</span>

                                <a href="${"mailto:lara.norori@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>lara.norori@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-slate-300/10 dark:bg-slate-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingBorjas, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Guillermo Borjas</span>
                                <span class="${"text-slate-400 block mb-2"}">Bases de Datos</span>
                                <a href="${"mailto:guillermo.borjas@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>guillermo.borjas@unah.edu.hn</span></a></div></div></div>
                    
                    <div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-emerald-300/10 dark:bg-emerald-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingCubilla, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Norman Cubilla</span>
                                <span class="${"text-slate-400 block mb-2"}">Arquitectura</span>
                                <a href="${"mailto:norman.cubilla@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>norman.cubilla@unah.edu.hn</span></a></div></div></div>
                    
                    <div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-red-300/10 dark:bg-red-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingLiliana, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Liliana Ir\xEDas</span>
                                <span class="${"text-slate-400 block mb-2"}">Administraci\xF3n</span>

                                <a href="${"mailto:liliana.irias@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>liliana.irias@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-blue-300/10 dark:bg-blue-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingDavid, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. David Rivera</span>
                                <span class="${"text-slate-400 block mb-2"}">Redes de Datos</span>
                                <a href="${"mailto:roberto.hernandez@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>roberto.hernandez@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-emerald-300/10 dark:bg-emerald-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingJulio, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Julio Hern\xE1ndez</span>
                                <span class="${"text-slate-400 block mb-2"}">Seminario</span>
                                <a href="${"mailto:jchernandez@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>jchernandez@unah.edu.hn</span></a></div></div></div>

					<div class="${"h-full flex items-stretch sm:w-full md:w-1/2 lg:w-1/3 px-8 py-4"}"><div class="${"w-full text-center team p-6 rounded-md shadow-md dark:shadow-gray-800 dark:border-gray-700 bg-white dark:bg-slate-900 relative"}"><div class="${"absolute inset-0 bg-red-300/10 dark:bg-red-300/30 rounded-md -mt-[10px] -ml-[10px] h-[98%] w-[98%] z-[-1]"}"></div>
                            <img${add_attribute("src", ingAlba, 0)} class="${"h-24 w-24 m-auto rounded-full shadow-md dark:shadow-gray-800 object-cover"}" alt="${""}">

                            <div class="${"content mt-4"}"><span class="${"text-lg font-medium block mb-2"}">Ing. Alba Arias</span>
                                <span class="${"text-slate-400 block mb-2"}">Contabilidad</span>
                                <a href="${"mailto:alba.arias@unah.edu.hn"}" class="${"pt-4 text-slate-500 flex flex-row items-center justify-center"}">${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:envelope-simple-light",
      class: "text-xl mr-2"
    },
    {},
    {}
  )} <span>alba.arias@unah.edu.hn</span></a></div></div></div></div>
            </div></div></section></div>`;
});
export {
  Page as default
};
