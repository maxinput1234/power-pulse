import React, { useState, useEffect } from 'react';
import SpeedMeter from './speedMeter';

const Home = () => {
  const [voltage, setVoltage] = useState(230); // Initial voltage
  const [current, setCurrent] = useState(0.5); // Initial current
  const [power, setPower] = useState(0); // Initial power
  const [totalPowerUnits, setTotalPowerUnits] = useState(0); // Total power in kWh

  const timeInterval = 5; // Simulated interval in seconds

  // Simulate random voltage and current values and calculate power
  useEffect(() => {
    const interval = setInterval(() => {
      const randomVoltage = Math.random() * (240 - 220)  // Voltage between 220 and 240
      const randomCurrent = Math.random() * (1 - 0.2) + 0.2; // Current between 0.2 and 1

      setVoltage(randomVoltage.toFixed(2)); // Update voltage
      setCurrent(randomCurrent.toFixed(2)); // Update current
      setPower((randomVoltage * randomCurrent).toFixed(2)); // Calculate power
    }, 3000); // Update values every 3 seconds

    return () => clearInterval(interval);
  }, []);

  // Update total power units every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const powerInKW = power / 1000; // Convert power to kW
      const timeInHours = timeInterval / 3600; // Convert seconds to hours
      const unitsUsed = powerInKW * timeInHours; // Calculate units used
      setTotalPowerUnits((prev) => (prev + unitsUsed).toFixed(4)); // Accumulate total units
    }, timeInterval * 1000); // Update every timeInterval seconds

    return () => clearInterval(interval);
  }, [power]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
     

      {/* Horizontal Meters Container */}
      
      <div className="flex h-screen w-screen justify-start gap-4">
  {/* Left Column (1/3 width) */}
  <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg w-1/3 h-1/2">
    <h2 className="text-xl font-semibold mb-4">Voltage</h2>
    <SpeedMeter value={voltage} label="V" max={240} />
    {/* Content for the left column */}
  </div>

  {/* Middle Column (1/3 width) */}
  <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg w-1/3 h-1/2">
    <h2 className="text-xl font-semibold mb-4">Power</h2>
    <SpeedMeter value={power} label="W" max={500} />
  </div>

  {/* Right Column (1/3 width) */}
  <div className="flex flex-col items-center bg-gray-800 p-8 rounded-lg w-1/3 h-1/2">
    <h2 className="text-xl font-semibold mb-4">Current</h2>
    <SpeedMeter value={current} label="mA" max={10} />
  </div>
</div>
    </div>
  );
};

export default Home;
