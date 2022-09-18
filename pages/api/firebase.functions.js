import { firestore } from '../../persistence/firebase.config.js';
import { addDoc, getDoc, deleteDoc, getDocs, updateDoc, doc, collection } from '@firebase/firestore';

const entriesRef = collection(firestore, 'entries');

const addEntry = async (summary, remedies) => {
    let data = {
        summary: summary,
        remedies: remedies
    }

    try {
        await addDoc(entriesRef, data);
    } catch (e) {
        console.log('Unable to add recent route.', e);
        alert('Sorry, unable to add recent route! Please try again!');
    }
}

const getNextEntry = async () => {
    try {
        const getSnapshot = await getDocs(entriesRef);

        let data = {};
        getSnapshot.forEach((doc) => {
            data[doc.id] = doc.data();
        });

        return data[Object.keys(data)[Object.keys(data).length - 1]];
    } catch (e) {
        console.log('Unable to get recent entries.', e);
        alert('Sorry, unable to get recent entries! Please try again!');
    }
}

export { addEntry, getNextEntry }