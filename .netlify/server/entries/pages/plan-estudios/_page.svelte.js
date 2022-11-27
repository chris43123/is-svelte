import { c as create_ssr_component, a as subscribe, o as onDestroy } from "../../../chunks/index.js";
import "../../../chunks/functions.js";
import "../../../chunks/firebase.js";
import "firebase/firestore";
import "firebase/storage";
import { d as derived, w as writable } from "../../../chunks/index2.js";
const tree = writable([]);
const subjects = writable([]);
const treeSubjects = derived([tree, subjects], ([$tree, $subjects]) => {
  if ($tree) {
    const slots = [];
    for (let i = 0; i < $tree.length; i++) {
      const element = $tree[i];
      const slot = [];
      element.classes.forEach((element2) => {
        const subj = $subjects.find((el) => el.code == element2);
        slot.push(subj);
      });
      slots.push(slot);
    }
    return slots;
  }
  return false;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1lm31o3.svelte-1lm31o3{width:200px;min-width:200px;cursor:pointer!important}.card.svelte-1lm31o3 h1.svelte-1lm31o3{overflow:hidden;text-overflow:ellipsis}@media(max-width: 1300px){.card.svelte-1lm31o3.svelte-1lm31o3{width:150px;min-width:150px;margin:10px;display:flex;justify-content:center;align-items:center}.card.svelte-1lm31o3 h1.svelte-1lm31o3{margin-bottom:0}.card.svelte-1lm31o3 h3.svelte-1lm31o3{display:none}.card.svelte-1lm31o3 div.svelte-1lm31o3{display:none}}@media(max-width: 900px){.card.svelte-1lm31o3.svelte-1lm31o3{width:125px;min-width:125px}.card.svelte-1lm31o3 h1.svelte-1lm31o3{font-size:12px}}@media(max-width: 750px){.container-pills.svelte-1lm31o3.svelte-1lm31o3{flex-wrap:wrap}.card.svelte-1lm31o3.svelte-1lm31o3{margin-bottom:25px}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots$1) => {
  let $$unsubscribe_treeSubjects;
  $$unsubscribe_treeSubjects = subscribe(treeSubjects, (value) => value);
  let lineStart = [];
  let lineEnd = [];
  onDestroy(() => {
    lineStart.map((el) => {
      if (el) {
        el.remove();
      }
    });
    lineEnd.map((el) => {
      if (el) {
        el.remove();
      }
    });
    lineStart = [];
    lineEnd = [];
  });
  $$result.css.add(css);
  $$unsubscribe_treeSubjects();
  return `${``}`;
});
export {
  Page as default
};
