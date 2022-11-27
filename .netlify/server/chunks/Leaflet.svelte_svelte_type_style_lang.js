import { c as create_ssr_component, j as createEventDispatcher, e as escape, v as validate_component } from "./index.js";
import { I as Icon } from "./Icon.js";
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { show = false, title = "Title", subtitle = "Subtitle" } = $$props;
  createEventDispatcher();
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.subtitle === void 0 && $$bindings.subtitle && subtitle !== void 0)
    $$bindings.subtitle(subtitle);
  return `${show ? `<div class="${"relative z-10"}" aria-labelledby="${"modal-title"}" role="${"dialog"}" aria-modal="${"true"}"><div class="${"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"}"></div>

  <div class="${"fixed inset-0 z-10 overflow-y-auto"}"><div class="${"flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"}"><div class="${"relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl"}">
        <div class="${"flex flex-row justify-between py-3 px-4 bg-slate-100"}"><div><h1 class="${"text-gray-800 text-xl font-semibold"}">${escape(title)}</h1>
                <h4 class="${"text-gray-600 font-medium"}">${escape(subtitle)}</h4></div>
            <div class="${"w-15 text-2xl"}">${validate_component(Icon, "Icon").$$render($$result, { icon: "ph:x", class: "cursor-pointer" }, {}, {})}</div></div>
        
        
        <div class="${"p-4"}">${slots.body ? slots.body({}) : ``}</div></div></div></div></div>` : ``}`;
});
const Alert = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { text = "", title, success = false, danger = false, info = false, warning = false, show = false } = $$props;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.success === void 0 && $$bindings.success && success !== void 0)
    $$bindings.success(success);
  if ($$props.danger === void 0 && $$bindings.danger && danger !== void 0)
    $$bindings.danger(danger);
  if ($$props.info === void 0 && $$bindings.info && info !== void 0)
    $$bindings.info(info);
  if ($$props.warning === void 0 && $$bindings.warning && warning !== void 0)
    $$bindings.warning(warning);
  if ($$props.show === void 0 && $$bindings.show && show !== void 0)
    $$bindings.show(show);
  return `${show ? `<div class="${"z-100 w-full fixed left-0 my-3 bottom-0"}"><div class="${"w-11/12 max-w-md p-4 text-slate-700 flex flex-row border-l-4 shadow-lg justify-between m-auto font-semibold text " + escape(success ? "border-green-600 bg-green-50" : "", true) + " " + escape(danger ? "border-rose-500 bg-rose-50" : "", true) + " " + escape(info ? "border-blue-500 bg-blue-50" : "", true) + " " + escape(warning ? "border-orange-500 bg-orange-50" : "", true)}"><div class="${"flex flex-row"}"><span class="${"text-4xl mr-4"}">${success ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:check-circle-bold",
      class: "text-green-600"
    },
    {},
    {}
  )}` : ``}
                ${warning ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:warning-bold",
      class: "text-orange-500"
    },
    {},
    {}
  )}` : ``}
                ${danger ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:x-circle-bold",
      class: "text-rose-500"
    },
    {},
    {}
  )}` : ``}
                ${info ? `${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:info-bold",
      class: "text-blue-500"
    },
    {},
    {}
  )}` : ``}</span>
            <span>${title != "" ? `<h3 class="${"font-bold"}">${escape(title)}</h3>` : ``}
                <p class="${""}">${escape(text)}</p></span></div>
        <span class="${"text-xl font-bold ml-4"}"><span>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "ph:x-bold",
      class: "cursor-pointer"
    },
    {},
    {}
  )}</span></span></div></div>` : ``}`;
});
const Leaflet_svelte_svelte_type_style_lang = "";
export {
  Alert as A,
  Modal as M
};
