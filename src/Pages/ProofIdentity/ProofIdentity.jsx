import { useState } from "react";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";

import "./ProofIdentity.css";

const ProofIdentity = () => {
  const [documentType, setDocumentType] = useState("");
  const handleChange = (e) => {
    setDocumentType(e.target.value);
  };
  console.log(documentType);
  return (
    <div className="proofIdentity">
      <div className="proofIdentity__header">
        <Title color="text-light-purple" title="Proof Of Identity" />
        <p className="text-center mt-20 font-400">
          In order to complete your registration please upload a copy of your
          document.
        </p>
      </div>
      <div className="proofIdentity__body w-80 align-auto">
        <form>
          <label className="block text-center font-600">
            Choose your document type
          </label>
          <div className="select bg-grey">
            <select
              value={documentType}
              onChange={handleChange}
              className="w-100 "
            >
              <option value="driverLisence">Driver Lisence</option>
              <option value="Passport">Passport</option>
              <option value="idCard">ID card</option>
            </select>
          </div>

          <p className="font-500 ">
            <span className="text-light-purple font-700">Note: </span> Please
            make sure every details of the identity is clearly visible
          </p>
          <div className="upload__id bg-grey w-80 align-auto mt-10">
            <p className="text-light-purple font-600">Upload Proof Identity</p>
            <p className="mt-10">
              <span className="block font-700">We accept Only </span> ID Card,
              Passpord and Driver’s license
            </p>
          </div>
          <Button text="proceed" />
        </form>
        <p className="text-center mt-10 text-light-purple pointer font-600">
          Skip
        </p>
      </div>
    </div>
  );
};

export default ProofIdentity;
