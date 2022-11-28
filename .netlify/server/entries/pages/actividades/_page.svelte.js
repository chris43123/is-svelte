import { c as create_ssr_component, j as createEventDispatcher, o as onDestroy, d as add_attribute, v as validate_component, e as escape, k as each } from "../../../chunks/index.js";
import { I as Icon } from "../../../chunks/Icon.js";
import { v4 } from "uuid";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
import { A as Alert, M as Modal } from "../../../chunks/Leaflet.svelte_svelte_type_style_lang.js";
const css = {
  code: "@import 'leaflet/dist/leaflet.css';main.svelte-1e2hq5m div.svelte-1e2hq5m{height:300px}main.svelte-1e2hq5m .lg.svelte-1e2hq5m{height:500px}",
  map: null
};
const Leaflet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let mapElement;
  let { sm, lg } = $$props;
  let { lat = 15.529926982165401 } = $$props;
  let { lng = -88.03643405442018 } = $$props;
  let { zoom = 16 } = $$props;
  let { view = false } = $$props;
  let { popup = "" } = $$props;
  onDestroy(async () => {
  });
  if ($$props.sm === void 0 && $$bindings.sm && sm !== void 0)
    $$bindings.sm(sm);
  if ($$props.lg === void 0 && $$bindings.lg && lg !== void 0)
    $$bindings.lg(lg);
  if ($$props.lat === void 0 && $$bindings.lat && lat !== void 0)
    $$bindings.lat(lat);
  if ($$props.lng === void 0 && $$bindings.lng && lng !== void 0)
    $$bindings.lng(lng);
  if ($$props.zoom === void 0 && $$bindings.zoom && zoom !== void 0)
    $$bindings.zoom(zoom);
  if ($$props.view === void 0 && $$bindings.view && view !== void 0)
    $$bindings.view(view);
  if ($$props.popup === void 0 && $$bindings.popup && popup !== void 0)
    $$bindings.popup(popup);
  $$result.css.add(css);
  return `<main class="${"svelte-1e2hq5m"}"><div class="${["svelte-1e2hq5m", (sm ? "sm" : "") + " " + (lg ? "lg" : "")].join(" ").trim()}"${add_attribute("this", mapElement, 0)}></div>
</main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let activities = [];
  let showFormRegister = false;
  let showFormActivity = false;
  v4();
  v4();
  let alert = {};
  let selectedLat = "";
  let selectedLng = "";
  let popup = "";
  let actSelected;
  let errors = {};
  return `<div class="${"container m-auto py-5"}">${validate_component(Alert, "Alert").$$render(
    $$result,
    {
      show: alert.show,
      title: alert.title,
      text: alert.text,
      status: alert.status
    },
    {},
    {}
  )}

    ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: showFormActivity,
      title: "Ubicaci\xF3n",
      subtitle: "Consulte la ubicaci\xF3n exacta"
    },
    {},
    {
      body: () => {
        return `<div slot="${"body"}">${validate_component(Leaflet, "LeafletMap").$$render(
          $$result,
          {
            lat: selectedLat,
            lng: selectedLng,
            lg: true,
            view: true,
            popup
          },
          {},
          {}
        )}</div>`;
      }
    }
  )}


    ${validate_component(Modal, "Modal").$$render(
    $$result,
    {
      show: showFormRegister,
      title: "Nuevo Registro",
      subtitle: "Ingrese la informaci\xF3n requerida"
    },
    {},
    {
      body: () => {
        return `<div class="${""}" slot="${"body"}"><h2 class="${"text-slate-800 text-lg font-semibold"}">${escape(actSelected.name)}</h2>
            <p>${escape(actSelected.description)}</p>

            <form class="${"py-3"}"><div class="${"w-full md:w-1/2 py-2"}"><label class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}" for="${"grid-last-name"}">Nombre *
                    </label>
                    <input id="${"name"}" name="${"name"}" class="${"appearance-none block w-full border-gray-200 text-gray-700 border rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border " + escape(
          errors.name ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"Nombre completo"}">
                    ${errors.name ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errors.name)}*</span>` : ``}</div>
                <div class="${"w-full md:w-1/2 py-2"}"><label for="${"account"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Cuenta *
                    </label>
                    <input id="${"account"}" name="${"account"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errors.account ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"number"}" placeholder="${"N\xFAmero de cuenta"}">
                    ${errors.account ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errors.account)}*</span>` : ``}</div>
                <div class="${"w-full md:w-1/2 py-2"}"><label for="${"email"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Correo Institucional *
                    </label>
                    <input id="${"email"}" name="${"email"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errors.email ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"correo@unah.hn"}">
                    ${errors.email ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errors.email)}*</span>` : ``}</div>
                <div class="${"w-full md:w-1/2 py-2"}"><label for="${"career"}" class="${"block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"}">Carrera *
                    </label>
                    <input id="${"career"}" name="${"career"}" class="${"appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded outline-0 focus:outline-0 focus:ring-0 focus:bg-white focus:border focus:border-slate-500 " + escape(
          errors.career ? "bg-red-50 ring-1 ring-red-500" : "bg-gray-100",
          true
        )}" type="${"text"}" placeholder="${"Carrera"}">
                    ${errors.career ? `<span class="${"inline-block text-red-600 bg-red-100 rounded p-1 text-xs font-medium mt-2"}">${escape(errors.career)}*</span>` : ``}</div>
                <button type="${"submit"}" class="${"mt-3 text-sm block w-full p-3 bg-teal-500 text-white font-bold uppercase"}">Enviar</button></form></div>`;
      }
    }
  )}


    <div class="${"flex flex-row justify-between items-start pb-4 mb-4 border-b border-gray-200"}"><div><h1 class="${"text-2xl text-slate-800 font-bold mb-2"}">Explora las principales actividades</h1>
            <h2 class="${"text-md font-semibold text-gray-700"}">Vinculantes a horas del art\xEDculo 140</h2></div>
        <a${add_attribute("href", "/panel", 0)} class="${"p-2 bg-teal-600 text-white rounded"}">Panel de actividades</a></div>

    <div class="${"py-4 font-semibold"}"><h2 class="${"text-slate-800 text-xl"}">Este Mes</h2>
        <p class="${"text-md text-gray-700"}">Noviembre - 2022</p>

        ${`<div class="${"grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 my-4"}">${each(activities, (item) => {
    return `<div class="${"text-medium mr-2 my-2 border border-gray-200 rounded shadow-sm"}"><div class="${"relative"}"><div class="${"bg-gradient-to-r from-cyan-500 to-blue-500 mt-0 h-56 max-h-56 w-full"}"></div>
                    <div class="${"absolute top-0 w-full rounded"}">${item.image ? `<a${add_attribute("href", item.image, 0)} target="${"_blank"}" rel="${"noopener noreferrer"}"><img class="${"mt-0 w-full h-56 max-h-56 object-scale-down rounded"}"${add_attribute("src", item.image, 0)} alt="${""}">
                        </a>` : `<img class="${"w-full h-56 max-h-56 object-cover rounded"}" src="${"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"}" alt="${""}">`}
                    </div></div>
                <div class="${"p-3 pb-0"}"><div class="${"grid grid-cols-2"}"><h2 class="${"text-slate-700 text-lg mb-2 whitespace-nowrap text-ellipsis overflow-hidden"}"${add_attribute("title", item.name, 0)}>${escape(item.name)}</h2>
                        <h2 class="${"text-gray-500 text-md mb-2 font-semibold text-end"}">${escape(item.date)}</h2></div>
                    <div class="${"flex flex-row text-xs mb-2"}">${each(item.area, (el) => {
      return `<span class="${"p-1 bg-orange-100 rounded mr-1 mb-1"}">${escape(el)}</span>`;
    })}</div>
                    <p class="${"text-sm mb-2 font-normal"}">${escape(item.description)}</p>
                    ${item.type == "Exterior" ? `<button class="${"mb-2 flex flex-row items-center"}"><span class="${"pr-2 cursor-pointer"}">Ubicaci\xF3n</span>
                        ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ph:map-pin-fill",
        class: "text-lg cursor-pointer"
      },
      {},
      {}
    )}
                    </button>` : ``}
                    ${item.type == "Virtual" ? `<a${add_attribute("href", item.link, 0)} target="${"blank"}" class="${"mb-2 flex flex-row items-center"}"><span class="${"pr-2 cursor-pointer"}">Enlace a la reuni\xF3n</span>
                        ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ph:link-bold",
        class: "cursor-pointer"
      },
      {},
      {}
    )}
                    </a>` : ``}
                    ${item.type == "Presencial" ? `<div class="${"mb-2 flex flex-row items-center"}"><span class="${"pr-2"}">${escape(item.place)}</span>
                        ${validate_component(Icon, "Icon").$$render(
      $$result,
      {
        icon: "ph:map-trifold-bold",
        class: "text-lg"
      },
      {},
      {}
    )}
                    </div>` : ``}
                    <div><a class="${"flex items-center mb-3"}" href="${"mailto:" + escape(item.email, true)}"><img class="${"w-7 h-7 rounded-full mr-2 cursor-pointer"}" src="${"https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"}" alt="${"Rounded avatar"}">
                            <p class="${"text-sm text-slate-800 cursor-pointer"}">${escape(item.owner)}</p>
                        </a></div>
                    <div class="${"flex flex-row justify-between border-b border-gray-200 pb-4"}"><div class="${"flex flex-row justify-end text-sm"}"><p class="${"mr-2 text-slate-700"}">Horas VOAE</p>
                            <p class="${"text-gray-400 text-sm"}">${escape(item.hours)}hrs</p></div>
                        <div class="${"flex flex-row justify-end text-sm"}"><p class="${"mr-2 text-slate-700"}">Horario</p>
                            <p class="${"text-gray-400"}">${escape(item.start)} - ${escape(item.end)}</p>
                        </div></div>
                    <button class="${"p-3 text-center text-slate-600 block w-full hover:text-blue-800 focus:outline-0"}">Inscribirse</button></div>
            </div>`;
  })}</div>`}</div></div>`;
});
export {
  Page as default
};
