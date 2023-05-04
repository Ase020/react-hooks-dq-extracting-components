import React from "react";
import { messages, contacts } from "../data";
import Navbar from "./Navbar";
import Message from "./Message";

console.log("Messages:", messages);
console.log("Contacts:", contacts);

function App() {
   return (
      <div className="app">
         <Navbar contacts={contacts} />
         <Message messages={messages} />
      </div>
   );
}

export default App;
