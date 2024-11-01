import { useState } from "react";
import Header from "./components/Header";


function App() {
  const students = ["andi", "dika", "parno"];
  const [likes, setLikes] = useState(0);
  // console.log(React.useState(0));
  function handleClick() {
    setLikes(likes + 1);
  }
  return (
    <>
      <Header />
      <Header name="Andi" />
      <ul>
        {students.map((student) => (
          <li key={student}>{student}</li>
        ))}
      </ul>

      <button onClick={handleClick}>Like ({likes})</button>
    </>
  );
}

export default App;
