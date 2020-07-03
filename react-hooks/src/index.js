import React, {useState} from "react";
import ReactDOM from "react-dom";
import Client from "./Client";
import ClientForm from "./ClientForm";
// import Counter from "./Counter";

import "./styles.css";

const App = () => {
const [clients, setClients] = useState([
  { id: 1, nom: "Anaïs Riollaci" },
  { id: 2, nom: "Olivier De Cacqueray" },
  { id: 3, nom: "Thomas Cabili" },
  { id: 4, nom: "Marguerite Talmite" }
]);


  const handleDelete = id => {
    const updatedClients = [...clients];
    const index = updatedClients.findIndex(client => client.id === id);

    updatedClients.splice(index, 1);

    setClients( updatedClients );
  };

  const handleAdd = client => {
    const updatedClients = [...clients];
    updatedClients.push(client);

    setClients(updatedClients);
  };


    const title = "Liste des clients";
    return (
      <div>
        <h1>{title}</h1>
         {/* <Counter/>  */}
        <table>
          {clients.map(client => (
            <Client key={client.id} details={client} onDelete={handleDelete} />
          ))}
        </table>
        <ClientForm onClientAdd={handleAdd} />
      </div>
    );
  }


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
