import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export default function DayList() {
  // const [days, setDays] = useState([]);
  // const [count, setCount] = useState(0);

  // function onclick() {
  //   setCount(count + 1);
  // }

  // function onclick2() {
  //   setDays([
  //     ...days,
  //     {
  //       id: Math.random(),
  //       day: 1,
  //     },
  //   ]);
  // }

  // useEffect(() => {
  //   fetch("http://localhost:3001/days")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setDays(data);
  //     });
  // }, []);

  const days = useFetch("http://localhost:3001/days");
  console.log(days);

  if (days.length === 0) {
    return <span>Loading...</span>;
  }
  return (
    <>
      <ul className="list_day">
        {days.map((day) => (
          <li key={day.id}>
            <Link to={`/day/${day.day}`}>Day {day.day}</Link>
          </li>
        ))}
      </ul>
      {/* <button onClick={onclick}>{count}</button>
      <button onClick={onclick2}>Day Chcnge</button> */}
    </>
  );
}
