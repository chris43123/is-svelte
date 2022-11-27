import { c as create_ssr_component, e as escape, k as each } from "../../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const { register } = data;
  console.log(data);
  let headers = ["Nombre", "Cuenta", "Carrera", "Correo"];
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="${"container m-auto py-5"}"><section class="${"py-1"}"><div class="${"mx-auto"}"><h3 class="${"font-semibold text-2xl text-blueGray-700 mb-3"}">Usuarios Registrados</h3>

        <div class="${"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded "}"><div class="${"rounded-t mb-0 px-4 py-3 border-0"}"><div class="${"flex flex-wrap items-center"}"><div class="${"relative w-full px-4 max-w-full flex-grow flex-1"}"><h3 class="${"font-semibold text-base text-blueGray-500"}">${escape(register.name)}</h3></div></div></div>
  
            <div class="${"block w-full overflow-x-auto"}"><table class="${"items-center bg-transparent w-full border-collapse "}"><thead><tr>${each(headers, (header) => {
    return `<th class="${"px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"}">${escape(header)}
                    </th>`;
  })}</tr></thead>
                ${register.users ? `<tbody>${each(register.users, ({ name, email, account, career }) => {
    return `<tr class="${"hover:bg-slate-100"}"><th class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-blueGray-700 "}">${escape(name)}</th>
                        <td class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 "}">${escape(account)}</td>
                        <td class="${"border-t-0 px-6 align-center border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}">${escape(career)}</td>
                        <td class="${"border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4"}">${escape(email)}</td>
                    </tr>`;
  })}</tbody>` : ``}</table></div></div></div></section></div>`;
});
export {
  Page as default
};
