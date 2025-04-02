import React from "react";

const ControlsPanel = ({
  curve,
  setCurve,
  distance,
  setDistance,
  yHeight,
  setYHeight,
  showGrid,
  setShowGrid,
  ambientLight,
  setAmbientLight,
}) => {
  return (
    <div className="controls">
      <label>Curve: {curve}</label>
      <input type="range" min="0" max="20" value={curve} onChange={(e) => setCurve(e.target.value)} />

      <label>Distance: {distance}</label>
      <input type="range" min="1" max="10" value={distance} onChange={(e) => setDistance(e.target.value)} />

      <label>Y Height: {yHeight}</label>
      <input type="range" min="-5" max="5" value={yHeight} onChange={(e) => setYHeight(e.target.value)} />

      <label>
        <input type="checkbox" checked={showGrid} onChange={() => setShowGrid(!showGrid)} />
        Show Grid
      </label>

      <label>
        <input type="checkbox" checked={ambientLight} onChange={() => setAmbientLight(!ambientLight)} />
        Ambient Light
      </label>
    </div>
  );
};

export default ControlsPanel;
