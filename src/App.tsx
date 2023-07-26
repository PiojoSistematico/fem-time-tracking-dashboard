import { useState } from "react";
import data from "./assets/data/data.json";
import Card from "./components/Card";

function App() {
  const [period, setPeriod] = useState("daily");
  const routes = ["work", "play", "study", "exercise", "social", "self-care"];

  return (
    <main>
      <section className="profile-section">
        <img src={"./images/image-jeremy.png"} alt="user-avatar" />
        <div className="user">
          <span>Report for</span>
          <h1>Jeremy Robson</h1>
        </div>
        <div>
          <button name="daily" onClick={() => setPeriod("daily")}>
            Daily
          </button>
          <button name="weekly" onClick={() => setPeriod("weekly")}>
            Weekly
          </button>
          <button name="monthly" onClick={() => setPeriod("monthly")}>
            Monthly
          </button>
        </div>
      </section>
      <section className="card-section">
        {data.map((elem, index) => (
          <Card elem={elem} route={routes[index]} period={period}></Card>
        ))}
      </section>
    </main>
  );
}

export default App;
