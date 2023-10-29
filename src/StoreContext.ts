import {createContext} from "react";
import {store} from "./redux/redux-store";

export  const StoreContext = createContext(store);