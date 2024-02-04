import { useEffect, useState } from "react";
import axiosPublic from "../../api/axiosPublic";
import Loading from "../Loading";

const WhetherSection = () => {
  const lat = 12.971599;
  const lon = 77.594566;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${
    import.meta.env.VITE_whetherapiKey
  }`;

  const [weather, setWhether] = useState([]);

  useEffect(() => {
    axiosPublic.get(url).then((res) => {
      console.log(res.data.main);
      setWhether(res.data);
    });
  }, [url]);

  console.log(weather);

  if (weather.length <= 0) {
    return <Loading></Loading>;
  } else {
    return (
      <div className="mx-auto p-10 bg-[#1B2452] text-white flex justify-between items-center rounded-xl">
        <div className="">
          <p className="text-4xl mb-4">{weather.name}</p>
          <p className="text-xl leading-10">
            {weather.main.temp} <sup>o</sup>C
          </p>
        </div>
        <div>
          <p className="text-xl leading-10">
            {weather.main.humidity}% Humidity
          </p>
          <p className="text-xl leading-10">{weather.wind.speed} km/h</p>
        </div>
      </div>
    );
  }
};

export default WhetherSection;
