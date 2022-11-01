import {db} from '../firebase'
import { doc, getDoc, query } from "firebase/firestore"; 

export async function getData (collection, value, converter = Function) {
    const ref = query(doc(db, collection, value).withConverter(converter));
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }
}