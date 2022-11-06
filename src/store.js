import { writable, derived } from 'svelte/store';

export const tree = writable([]);
export const subjects = writable([]);

export const treeSubjects = derived([tree, subjects], ([$tree, $subjects]) => {
    if ($tree){
        const slots = []
        for (let i = 0; i < $tree.length; i++) {
            const element = $tree[i];
            const slot = []
            element.classes.forEach(element => {
                const subj = $subjects.find(el => el.code == element)
                slot.push(subj)
            });
            slots.push(slot)
        }
        return slots
    }
    return false;
});
