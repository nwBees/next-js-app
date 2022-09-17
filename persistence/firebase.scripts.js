import { serviceFunctions } from "./firebaseServices.js";

// run node ./firebase.scripts.js to test 
(async() => {
    await serviceFunctions.addEntry(1, 'byron needs some help again');
    await serviceFunctions.getNextEntry();
})();