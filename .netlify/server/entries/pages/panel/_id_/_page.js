import { d as db } from "../../../../chunks/firebase.js";
import { query, doc, getDoc } from "firebase/firestore";
import "firebase/storage";
async function getSingleData(documents, value) {
  const ref = query(doc(db, documents, value));
  const docSnap = await getDoc(ref);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return false;
  }
}
const load = async ({ params }) => {
  const res = await getSingleData("activitiesRegister", params.id);
  return {
    register: res
  };
};
export {
  load
};
