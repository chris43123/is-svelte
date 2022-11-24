import {getSingleData} from '../../../utils/firebase/firebaseApi'

/** @type {import('./$types').PageLoad} */
export const load = async ({ params }) => {
    const res = await getSingleData('activitiesRegister' , params.id)
    return {
        register: res
    }  
}