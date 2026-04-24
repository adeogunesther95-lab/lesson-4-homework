import react from "react";

export default function FormattedDate(props) {
  // Calculate local time for the city using timezone offset
  let utcTime = props.date.getTime();
  let cityTime = new Date(utcTime + props.timezone * 1000);

  let hours = cityTime.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = cityTime.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[new Date(utcTime + props.timezone * 1000).getUTCDay()];

  return (
    <span>
      {day} {hours}:{minutes}
    </span>
  );
}
