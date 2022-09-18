import { firestore } from "./firebase";

const getEntries = async () => {
  const snapshot = await firestore.collection("entries").get();
  snapshot.docs.forEach((doc) => console.log(doc.data()));
};

const addEntries = async (content, entryId) => {
  const data = {
    content: `${content}`,
    entryId: `${entryId}`,
  };
  await firestore.collection("entries").add(data);
};

export { getEntries, addEntries };
