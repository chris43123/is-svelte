import { c as create_ssr_component, e as escape, k as each, v as validate_component, m as missing_component } from "../../../chunks/index.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
import { I as Icon } from "../../../chunks/Icon.js";
import "../../../chunks/functions.js";
const Period = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name, year, subjects, component } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  if ($$props.year === void 0 && $$bindings.year && year !== void 0)
    $$bindings.year(year);
  if ($$props.subjects === void 0 && $$bindings.subjects && subjects !== void 0)
    $$bindings.subjects(subjects);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  return `<div class="${"flex flex-row p-4 mb-5 bg-gray-50 border-l-4 border-slate-300 font-medium"}"><div class="${"w-1/4 p-4 "}"><h2 class="${"text-xl font-bold text-gray-600"}">Periodo ${escape(name)}</h2>
        <p class="${"py-1"}">${escape(year)}</p>
        <p class="${"py-1"}">12 UV</p>
        <p class="${"py-1"}">85%</p>
        <div class="${"text-green-400 flex flex-row py-1"}">${each([1, 2, 3, 4], (n) => {
    return `<span>${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:circle-fill" }, {}, {})}
                </span>`;
  })}
            <span class="${"text-gray-300"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:circle-fill" }, {}, {})}</span></div></div>
    <div class="${"w-3/4"}"><div class="${"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"}">${each(subjects, (subject) => {
    return `${validate_component(component.component || missing_component, "svelte:component").$$render($$result, { subject }, {}, {})}`;
  })}</div></div></div>`;
});
let classDisabled = "grayscale bg-gray-100 cursor-not-allowed";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { disabled = false } = $$props;
  let { subject } = $$props;
  let subj = {};
  let subjName = "";
  let classStatus = "", textStatus = "Pendiente";
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.subject === void 0 && $$bindings.subject && subject !== void 0)
    $$bindings.subject(subject);
  return `<div class="${"shadow max-w-5 filter rounded-md p-5 text-md flex flex-row justify-between cursor-pointer hover:shadow-md " + escape(disabled ? classDisabled : "", true)}"><div class="${"content-between"}"><div class="${"flex flex-row items-center"}"><span class="${"text-4xl mr-3 font-light bg-slate-900 rounded text-white"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:atom-light" }, {}, {})}</span>
            <div class="${"flex-col max-w-2 overflow-hidden"}"><h2 class="${"text-md font-bold"}">${escape(subjName)}</h2>
                <h5 class="${"text-sm text-gray-700 font-bold"}">${escape(subj.code)} - 5UV</h5></div></div>
        <div class="${"mt-2"}"><span class="${"text-md font-medium rounded-sm bg-gray-300 py-1 px-3 text-slate-900 mb-0.5 inline-block"}">Fisica</span>
            <span class="${"text-md font-medium rounded-sm bg-green-300 py-1 px-3 text-slate-900 mb-0.5 inline-block"}">Matem\xE1tica</span></div>
        
        <div class="${"flex justify-between items-center mt-4"}"><div class="${"flex flex-row items-center text-md"}"><span class="${"text-xl mr-1 " + escape(classStatus, true)}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:check-circle-fill" }, {}, {})}</span>
                <p class="${"font-medium"}">${escape(textStatus)}</p></div>
            <h4 class="${"text-end font-medium"}">${escape(subj.note)}%</h4></div></div>
    <div class="${"flex items-start text-gray-600 text-2xl cursor-pointer font-extrabold"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:dots-three-bold", rotate: 1 }, {}, {})}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let component = { component: Card };
  let timeline = [];
  return `<div class="${"container m-auto"}"><div class="${"flex flex-row justify-between items-start py-4 mb-4 border-b border-gray-200"}"><div><h1 class="${"text-2xl text-slate-800 font-bold mb-2"}">Historial de Clases</h1></div></div>


    ${each(timeline, (period) => {
    return `${validate_component(Period, "Period").$$render(
      $$result,
      {
        name: period.period,
        year: period.year,
        subjects: period.subjects,
        component
      },
      {},
      {}
    )}`;
  })}

    <section><div class="${"grid grid-cols-1 gap-5 py-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"}"></div></section></div>`;
});
export {
  Page as default
};
