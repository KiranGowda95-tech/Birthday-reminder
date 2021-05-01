import "./styles.css";
import { useState } from "react";
import data from "./data";
import List from "./List";

export default function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
      </section>
      <button className="container-btn" onClick={() => setPeople([])}>
        Clear All
      </button>
    </main>
  );
}
