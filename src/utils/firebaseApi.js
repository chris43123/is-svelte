import {converterDocuments} from './firebaseMap'
import {db} from '../firebase'
import { doc, getDoc, getDocs, query, collection } from "firebase/firestore"; 

export async function getData (documents, value, converter = Function) {
    const ref = query(doc(db, documents, value).withConverter(converter));
    const docSnap = await getDoc(ref)

    if (docSnap.exists()) {
        return docSnap.data()
    } else {
        return false
    }
}

export async function getAllData (documents, value='' , q ='', sign) {
    let ref = ''
    if(value != '' && query != '') {
        ref = query(collection(db, documents), where(value, sign, q));
    } else {
        ref = query(collection(db, documents));
    }
    const docSnap = await getDocs(ref)
    
    return converterDocuments(docSnap)
}