import { addEntry, getNextEntry } from "../pages/api/firebase.functions";

// run node ./firebase.scripts.js to test 
(async() => {
    // await serviceFunctions.addEntry(1, 'byron needs some help again');
    await getNextEntry();
})();