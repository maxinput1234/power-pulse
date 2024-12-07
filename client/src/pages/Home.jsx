import React, { useState, useEffect } from "react";
import SpeedMeter from "./speedMeter";
import Graph from "./graph";

const Home = () => {
  const [voltage, setVoltage] = useState(230); // Initial voltage
  const [current, setCurrent] = useState(0.5); // Initial current
  const [power, setPower] = useState(0); // Initial power
  const [voltageData, setVoltageData] = useState([]); // Graph data for voltage
  const [currentData, setCurrentData] = useState([]); // Graph data for current
  const [powerData, setPowerData] = useState([]); // Graph data for power

  useEffect(() => {
    const interval = setInterval(() => {
      // Simulate random values
      const randomVoltage = (Math.random() * (240 - 220) + 220).toFixed(2);
      const randomCurrent = (Math.random() * (1 - 0.2) + 0.2).toFixed(2);
      const calculatedPower = (randomVoltage * randomCurrent).toFixed(2);

      // Update state
      setVoltage(randomVoltage);
      setCurrent(randomCurrent);
      setPower(calculatedPower);

      // Append data for graphs
      setVoltageData((prev) => [
        ...prev.slice(-19), // Keep the last 20 data points
        { x: new Date().getTime(), y: parseFloat(randomVoltage) },
      ]);
      setCurrentData((prev) => [
        ...prev.slice(-19),
        { x: new Date().getTime(), y: parseFloat(randomCurrent) },
      ]);
      setPowerData((prev) => [
        ...prev.slice(-19),
        { x: new Date().getTime(), y: parseFloat(calculatedPower) },
      ]);
    }, 500); // Update every 0.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex h-screen w-screen justify-start gap-4">
        {/* Voltage Meter and Graph */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg w-1/3 h-1/2">
          <h2 className="text-xl font-semibold mb-4">Voltage</h2>
          <SpeedMeter value={voltage} label="V" max={240} />
          <div className="mt-4">
            <Graph
              title="Voltage Over Time"
              xTitle="Time"
              yTitle="Voltage (V)"
              dataPoints={voltageData}
            />
          </div>
        </div>

        {/* Power Meter and Graph */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg w-1/3 h-1/2">
          <h2 className="text-xl font-semibold mb-4">Power</h2>
          <SpeedMeter value={power} label="W" max={500} />
          <div className="mt-4">
            <Graph
              title="Power Over Time"
              xTitle="Time"
              yTitle="Power (W)"
              dataPoints={powerData}
            />
          </div>
        </div>

        {/* Current Meter and Graph */}
        <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg w-1/3 h-1/2">
          <h2 className="text-xl font-semibold mb-4">Current</h2>
          <SpeedMeter value={current} label="A" max={10} />
          <div className="mt-4">
            <Graph
              title="Current Over Time"
              xTitle="Time"
              yTitle="Current (A)"
              dataPoints={currentData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
