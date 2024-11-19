import React, { useRef, useEffect } from 'react';

const SpeedMeter = ({ value, label, max }) => {
  const canvasRef = useRef(null);

  const drawArc = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = 140;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Gradient for arc
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    gradient.addColorStop(0, '#67e8f9'); // Blue
    gradient.addColorStop(1, '#22c55e'); // Green

    // Draw arc
    ctx.beginPath();
    ctx.lineWidth = 20;
    ctx.strokeStyle = gradient;
    ctx.arc(centerX, centerY, radius, Math.PI, 0);
    ctx.stroke();
  };

  const drawNeedle = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const length = 100;

    const rotation = (value / max) * Math.PI; // Map value to radians
    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.rotate(rotation - Math.PI / 2);

    // Needle
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(-5, 10);
    ctx.lineTo(5, 10);
    ctx.lineTo(0, -length);
    ctx.closePath();
    ctx.fillStyle = '#e11d48';
    ctx.fill();
    ctx.restore();
  };

  useEffect(() => {
    drawArc();
    drawNeedle();
  }, [value]);

  return (
    <div className="relative flex items-center justify-center">
      <canvas ref={canvasRef} width="300" height="300" className=""></canvas>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
  {/* Empty space with margin */}
  <p className="mb-20"></p>
  

  {/* Your Value and Label */}
  <p className="text-2xl font-bold">
    {value} {label}
  </p>
</div>

    </div>
  );
};

export default SpeedMeter;
