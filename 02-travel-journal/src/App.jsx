// import { useState } from "react";
import "./App.css";
import JournalData from "./data";
import Header from "./components/Header";
import Entry from "./components/Entry";

function App() {
  // const [count, setCount] = useState(0);
  const JournalEntries = JournalData.map(function (entry) {
    return (
      <Entry
        key={entry.id}
        entry={entry}
        img={entry.img}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        title={entry.title}
        dates={entry.dates}
        description={entry.description}
      />
    );
  });

  return (
    <>
      <Header />
      {JournalEntries}
    </>
  );
}

export default App;
