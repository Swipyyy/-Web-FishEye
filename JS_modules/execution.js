// INDEX MAIN FILE - EXECUTED AT OPENING

import { listOfPhotographers, myRequest } from "./constante.js";
import { loadData } from "./import.js";
import { utilisateur } from "./userClass.js";

loadData(myRequest, listOfPhotographers, utilisateur);
