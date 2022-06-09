import React, { useContext } from "react";
import { MultiStepContext } from "../Context";

function DisplayData() {
  const { finalData } = useContext(MultiStepContext);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Contact</th>
            <th scope="col">Email</th>
            <th scope="col">Country</th>
            <th scope="col">District</th>
            <th scope="col">City</th>
            <th scope="col">Landmark</th>
            <th scope="col">Postal Code</th>
          </tr>
        </thead>
        <tbody>
            {finalData.map((data) =>(
                <tr>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.contact}</td>
                <td>{data.email}</td>
                <td>{data.country}</td>
                <td>{data.district}</td>
                <td>{data.city}</td>
                <td>{data.landmark}</td>
                <td>{data.postalcode}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default DisplayData;
