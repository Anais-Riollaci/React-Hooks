import React from "react";

const Client = ({ details, onDelete }) => (
  <tbody>
  <tr>
    <td key={details.id}>
      {details.nom}
      {""}
    </td>
    <td>
      <button onClick={() => onDelete(details.id)}>X</button>
    </td>
  </tr>
  </tbody>
);

export default Client;
