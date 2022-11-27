import { c as create_ssr_component, v as validate_component, e as escape, k as each } from "../../../chunks/index.js";
import "../../../chunks/functions.js";
import { v4 } from "uuid";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
import { A as Alert, M as Modal } from "../../../chunks/Leaflet.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activities = [];
  let showFormActivity = false;
  v4();
  v4();
  let alert = {};
  let headers = ["Actividad", "Descripci\xF3n", "Tipo", "Inicio", "Final", "Fecha"];
  let errorsAct = {};
  return `<div class="${"container m-auto py-5"}">${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      show: alert.show,
      title: alert.title,
      text: alert.text,
      success: true
    },
    {},
    {}
  )}

    ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: showFormActivity,
      title: "Nueva Actividad",
      subtitle: "Ingrese la informaci\xF3n"
    },
    {},
    {
      body: () => {
        return `<div class="${""}" slot="${"body"}"><form class="${"pb-3"}"><div class="${"grid grid-cols-2 gap-2"}"><div class="${"py-2"}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"actName"}">Nombre de la actividad *
                        </label>
                        <input id="${"actName"}" name="${"actName"}" class="${"appearance-none block w-full border-gray-200 text-gray-700 border rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border " + escape(
          errorsAct.actName ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"Ej. Caminata"}">
                        ${errorsAct.actName ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actName)}*</span>` : ``}</div>
                    <div class="${"py-2"}"><label for="${"actCareer"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Carrera *
                        </label>
                        <input id="${"actCareer"}" name="${"actCareer"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actCareer ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"Carrera organizadora"}">
                        ${errorsAct.actCareer ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actCareer)}*</span>` : ``}</div></div>
                <div class="${"grid grid-cols-2 gap-2"}"><div class="${"py-2"}"><label for="${"actOwner"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Encargado *
                        </label>
                        <input id="${"actOwner"}" name="${"actOwner"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actOwner ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"Encargado de la actividad"}">
                        ${errorsAct.actOwner ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actOwner)}*</span>` : ``}</div>
                    <div class="${"py-2"}"><label for="${"actEmailOwner"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Correo*
                        </label>
                        <input id="${"actEmailOwner"}" name="${"actEmailOwner"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actEmailOwner ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"email"}" placeholder="${"Correo del encargado"}">
                        ${errorsAct.actEmailOwner ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actEmailOwner)}*</span>` : ``}</div></div>
                <div class="${"grid grid-cols-2 gap-2"}"><div class="${"py-2"}"><label for="${"actStart"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Hora Inicio *
                        </label>
                        <input id="${"actStart"}" name="${"actStart"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actStart ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"time"}" placeholder="${"Hora inicio de la act."}">
                        ${errorsAct.actStart ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actStart)}*</span>` : ``}</div>
                    <div class="${"py-2"}"><label for="${"actEnd"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Hora Fin*
                        </label>
                        <input id="${"actEnd"}" name="${"actEnd"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actEnd ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"time"}" placeholder="${"Hora final de la act."}">
                        ${errorsAct.actEnd ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actEnd)}*</span>` : ``}</div></div>
                <div class="${"grid grid-cols-2 gap-2"}"><div class="${"py-2"}"><label for="${"actHours"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Horas *
                        </label>
                        <input id="${"actHours"}" name="${"actHours"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actHours ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"number"}" placeholder="${"Horas vinculantes"}">
                        ${errorsAct.actHours ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actHours)}*</span>` : ``}</div>
                    <div class="${"py-2"}"><label for="${"actDate"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Fecha *
                        </label>
                        <input id="${"actDate"}" name="${"actDate"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actDate ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"date"}">
                        ${errorsAct.actDate ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actDate)}*</span>` : ``}</div></div>
                
                
                <div class="${"py-2"}"><label for="${"actDesc"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Descripci\xF3n *
                    </label>
                    <textarea id="${"actDesc"}" name="${"actDesc"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errorsAct.actDesc ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"Breve descripci\xF3n de la actividad"}"></textarea>
                    ${errorsAct.actDesc ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actDesc)}*</span>` : ``}</div>

                <div class="${""}"><div class="${"py-2"}"><span class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Subir Imagen *
                        </span>
                        
                        <input id="${"actImage"}" name="${"actImage"}" class="${"hidden " + escape(
          errorsAct.actOwner ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"file"}" placeholder="${"Formato JPG, PNG, JPEG"}">
                        <div class="${"flex items-center"}"><label for="${"actImage"}" class="${"p-2 border bg-gray-100 border-gray-300 rounded cursor-pointer mr-2"}">${escape("Agregar Imagen *")}</label>
                            ${``}</div>
                        ${errorsAct.actImage ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actImage)}*</span>` : ``}</div></div>

                <div class="${"w-full md:w-1/2 py-2"}"><label for="${"actOwner"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">\xCDndole *
                    </label>
                    <div class="${"flex flex-row"}"><div class="${"mr-2"}"><input class="${"appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"checkbox"}" id="${"cientifico"}" value="${"Cientifico"}">
                            <label class="${"inline-block text-gray-800"}" for="${"cientifico"}">Cient\xEDfico
                            </label></div>
                        <div class="${"mr-2"}"><input class="${"appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"checkbox"}" id="${"social"}" value="${"Social"}">
                            <label class="${"finline-block text-gray-800"}" for="${"social"}">Social
                            </label></div>
                        <div class="${"mr-2"}"><input class="${"appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 focus:ring-0 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"checkbox"}" id="${"deporte"}" value="${"Deporte"}">
                            <label class="${"finline-block text-gray-800"}" for="${"deporte"}">Deporte
                            </label></div>
                        <div class="${"mr-2"}"><input class="${"appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-60 focus:ring-0 focus:outline-0 transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"checkbox"}" id="${"cultural"}" value="${"cultural"}">
                            <label class="${"finline-block text-gray-800"}" for="${"cultural"}">Cultural
                            </label></div></div>
                    ${errorsAct.actAreas ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actAreas)}*</span>` : ``}</div>
                <div class="${"w-full md:w-1/2 py-2"}"><label for="${"actOwner"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Tipo de actividad *
                    </label>
                    <div class="${"flex flex-row"}"><div class="${"mr-2"}"><input class="${"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"radio"}" name="${"flexRadioDefault"}" id="${"actPres"}" value="${"Presencial"}">
                            <label class="${"form-check-label inline-block text-gray-800"}" for="${"actPres"}">Presencial
                            </label></div>
                        <div class="${"mr-2"}"><input class="${"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"radio"}" name="${"flexRadioDefault"}" id="${"actVirtual"}" value="${"Virtual"}">
                            <label class="${"form-check-label inline-block text-gray-800"}" for="${"actVirtual"}">Virtual
                            </label></div>
                        <div class="${"mr-2"}"><input class="${"form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"}" type="${"radio"}" name="${"flexRadioDefault"}" id="${"actExterior"}" value="${"Exterior"}">
                            <label class="${"form-check-label inline-block text-gray-800"}" for="${"actExterior"}">Exterior
                            </label></div></div>
                    ${errorsAct.actType ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errorsAct.actAreas)}*</span>` : ``}</div>
                ${``}

                ${``}

                ${``}

                <button type="${"submit"}" class="${"mt-3 text-sm block w-full p-3 bg-teal-500 text-white font-bold uppercase"}">Enviar</button></form></div>`;
      }
    }
  )}


    <div class="${"flex flex-row justify-between items-start pb-4 mb-4 border-b border-gray-200"}"><button class="${"p-2 bg-teal-600 text-white rounded"}">Nueva Actividad</button></div>

    <div class="${"py-4 font-semibold"}"><h2 class="${"text-slate-800 text-xl"}">Actividades</h2>

        
        <link rel="${"stylesheet"}" href="${"https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"}">
        <link rel="${"stylesheet"}" href="${"https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"}">


        <section class="${"py-1"}"><div class="${"mx-auto mt-4"}"><div class="${"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded "}"><div class="${"rounded-t mb-0 px-4 py-3 border-0"}"><div class="${"flex flex-wrap items-center"}"><div class="${"relative w-full px-4 max-w-full flex-grow flex-1"}"><h3 class="${"font-semibold text-base text-blueGray-700"}">Actividades</h3></div></div></div>

                    <div class="${"block w-full overflow-x-auto"}"><table class="${"items-center bg-transparent w-full border-collapse "}"><thead><tr>${each(headers, (header) => {
    return `<th class="${"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}">${escape(header)}
                            </th>`;
  })}</tr></thead>

                        <tbody>${each(activities, ({ name, description, type, date, start, end, id }) => {
    return `<tr class="${"hover:bg-slate-100 hover:cursor-pointer"}"><th class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 "}">${escape(name)}</th>
                                <td class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "}">${escape(description)}</td>
                                <td class="${"border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}">${escape(type)}</td>
                                <td class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}">${escape(date)}</td>
                                <td class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}">${escape(start)}</td>
                                <td class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}">${escape(end)}</td>
                            </tr>`;
  })}</tbody></table></div></div></div></section></div></div>`;
});
export {
  Page as default
};
