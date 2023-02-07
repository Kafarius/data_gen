import "./App.css";
import ControlPanel from "./components/ControlPanel";
import Form from "./components/Form";
import TextOutput from "./components/TextOutput";
import React, { useEffect, useState } from "react";
import { logDOM } from "@testing-library/react";

function App() {
  // Dummy Users Data -------
  const data = [
    [
      "Rowan",
      "Joel",
      "Patrick",
      "Adam ",
      "Benjamin",
      "Danny",
      "Shaun",
      "Jay",
      "John",
      "Oliver",
      "Ronald",
      "Alfred",
      "Francis",
      "Liam",
      "Archibald",
      "Brandon",
      "Leon",
      "Robbie",
    ],
    [
      "Stansfield",
      "Emsworth",
      "Blake",
      "Armstrong",
      "Colton",
      "Kimberley",
      "Colgate",
      "Booth",
      "Newman",
      "Hunter",
      "Royal",
      "Taylor",
      "Yates",
      "Hunt",
      "Fletcher",
      "Griffin",
      "Burgess",
      "Harlow",
    ],
    [
      "DiddySpecials",
      "GotReptile",
      "Olympicry",
      "Bluebanx",
      "PreciseTheborg",
      "Goofyrd",
      "FirstPanet",
      "Molagerm",
      "XboxCart",
      "Hannahoy",
      "ChosenRocker",
      "Tonyonst",
      "RapBroadway",
      "LikeMedia",
      "Number1Jewel",
      "Fluentie",
      "Halicket",
      "Hopwator",
    ],
    [
      "crowemojo@msn.com",
      "mstrout@gmail.com",
      "jbryan@msn.com",
      "mxiao@msn.com",
      "temmink@mac.com",
      "chunzi@me.com",
      "bachmann@gmail.com",
      "mschilli@gmail.com",
      "sthomas@live.com",
      "csilvers@att.net",
      "campbell@hotmail.c,om",
      "dhwon@me.com",
      "jbuchana@verizon.net",
      "yumpy@optonline.net",
      "barjam@msn.com",
      "danzigism@hotmail.com",
      "hillct@att.net",
      "duncand@icloud.com",
    ],
    [
      "21",
      "18",
      "26",
      "56",
      "32",
      "87",
      "38",
      "91",
      "25",
      "43",
      "36",
      "35",
      "64",
      "43",
      "52",
      "28",
      "76",
      "93",
    ],
    ["Male", "Female", "Non-binary"],
    [
      "Meditation",
      "Ax throwing",
      "Bingo",
      "Drone flying",
      "Table tennis",
      "VHS collecting",
      "Chess",
      "Stamp collecting",
      "Aluminum can collecting",
      "Marathon",
      "Whittling",
      "Fly fishing",
      "Kayaking",
      "Trail maintenance volunteer",
      "Cryptography",
      "Tombstone rubbing",
      "Arrowhead collecting",
      "Spelunking",
    ],
  ];
  //-------------------------

  const [checkboxes, setCheckboxes] = useState([
    { name: "Name", value: false },
    { name: "Secondname", value: false },
    { name: "Username", value: false },
    { name: "Email", value: false },
    { name: "Age", value: false },
    { name: "Gender", value: false },
    { name: "Hobby", value: false },
  ]);
  const [howManyUsers, setHowManyUsers] = useState(1);
  const [usersToGenerate, setUsersToGenerate] = useState([]);

  const onUsersChangeHandler = (quant) => {
    setHowManyUsers(quant);
  };
  const onCheckboxChangeHandler = (id) => {
    checkboxes.map((checkbox) => {
      return checkbox.name === id
        ? (checkbox.value = !checkbox.value)
        : { ...checkbox };
    });
    // console.log(checkboxes);
  };

  const getRandomElement = (array) => {
    let randomElement = array[Math.floor(Math.random() * array.length)];
    return randomElement;
  };

  const generateUsers = () => {
    let usersArr = [];
    let userTemplate = {
      Name: "",
      Secondname: "",
      Username: "",
      Email: "",
      Age: "",
      Gender: "",
      Hobby: "",
    };
    for (let n = 0; n < howManyUsers; n++) {
      checkboxes.map((checkbox, index) => {
        for (let key of Object.keys(userTemplate)) {
          if (checkbox.value && checkbox.name === key) {
            userTemplate[`${key}`] = getRandomElement(data[index]);
          }
        }
      });
      usersArr.push(userTemplate);
      userTemplate = {
        Name: "",
        Secondname: "",
        Username: "",
        Email: "",
        Age: "",
        Gender: "",
        Hobby: "",
      };
    }
    setUsersToGenerate(usersArr);
    console.log(usersToGenerate);
  };

  //  [
  //     {name: 'John', secondname: 'Doe', username: 'kljfbkslfkb'},
  //     {}...
  //  ]

  return (
    <div className="App">
      <header>
        <h2>Random Users Generator</h2>
      </header>
      <ControlPanel
        checkboxes={checkboxes}
        onCheckboxChangeHandler={onCheckboxChangeHandler}
      />
      <Form onUsersChangeHandler={onUsersChangeHandler} />
      <button onClick={generateUsers}>GENERATE</button>
      <TextOutput usersToGenerate={usersToGenerate} />
    </div>
  );
}

export default App;
