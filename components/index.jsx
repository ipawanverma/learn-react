import ReactDOM from "react-dom/client";                //  main library of react and which is responsible for the rendering the app.

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");     // this "root" is from the index.html file
ReactDOM.createRoot(entryPoint).render(<App />);        // this ReactDOM includes two func in it first createRoot which takes an existing html
                                                        // element as an input that the element which is not created by react, so we are 
                                                        // passing the root from the index.html file and then when the element is selected then 
                                                        // set as root for the react project and then react goes ahead and injects our react component
                                                        // which is <App /> in our case and render it.
                                                        
