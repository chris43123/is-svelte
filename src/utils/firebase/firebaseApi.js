import {converterDocuments} from './firebaseMap'
import {db} from './firebase'
import { doc, setDoc, getDoc, getDocs, query, collection, updateDoc, arrayUnion, arrayRemove } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

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

export async function createDocument (coll, data , id) {
    const res = await setDoc(doc(db, coll, id), data);
    console.log(res)
    return true
}

export async function updateDocument(coll, data , id, prop) {
    if(prop == 'users') {
        const res = await updateDoc(doc(db, coll, id), {
            users: arrayUnion(data)
        });
        return true
    }
}

export async  function uploadFile(file) {
    console.log(file)
    console.log(file.name)
    const storage = getStorage();
    const storageRef = ref(storage, file.name);

    const snapshot = await uploadBytes(storageRef, file)
    const url = await getDownloadURL(ref(storage, snapshot.metadata.fullPath))
    let res = {success: true, url}
    console.log(res)
    return res
}

