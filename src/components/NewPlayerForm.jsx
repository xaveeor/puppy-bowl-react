import { useEffect } from "react";
import { useState } from "react";

export default function NewPlayerForm() {
  const [formValue, setFormValue] = useState({
    dogName: "",
    imageUrl: "",
    dogbreed: "",
    status: "bench",
    team: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const allInputvalue = {
      name: formValue.dogName,
      imageUrl: formValue.imageUrl,
      breed: formValue.dogbreed,
      status: formValue.status,
      teamId: formValue.team,
    };
    console.log(allInputvalue)
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT-A/players/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(allInputvalue),
      }
     
    );

    const result = await response.json();
    console.log(result);

    console.log(e);
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <label>Dog Name:</label>
      <input
        name="dogName"
        type="text"
        placeholder="Gary"
        value={formValue.dogName}
        onChange={handleInput}
      ></input>

      <label>Dog Breed:</label>
      <input
        name="dogbreed"
        type="text"
        placeholder="Boxer"
        value={formValue.dogbreed}
        onChange={handleInput}
      ></input>
      <label>Image URL:</label>
      <input
        name="imageUrl"
        type="text"
        placeholder="URL"
        value={formValue.imageUrl}
        onChange={handleInput}
      ></input>

      <label name="status">Status:</label>
      <select
        name="status"
        id="bench"
        value={formValue.status}
        onChange={handleInput}
      >
        <option value="bench">bench</option>
        <option value="field">field</option>
      </select>
      <label>Team:</label>
      <input
        name="team"
        type="text"
        placeholder="1"
        value={formValue.team}
        onChange={handleInput}
      ></input>

      <input type="submit" value="Submit" />
    </form>
  );
}
