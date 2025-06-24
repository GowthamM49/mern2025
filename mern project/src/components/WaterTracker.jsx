import { useState, useEffect } from 'react';
import WaterDisplay from './WaterDisplay';
import ActionButtons from './ActionButtons';
import './WaterTracker.css';

function WaterTracker() {
  const [intake, setIntake] = useState(0);
  const goal = 2700; // Daily goal in ml
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const newPercentage = Math.min((intake / goal) * 100, 100);
    setPercentage(newPercentage);
  }, [intake, goal]);

  const addWater = (amount) => {
    setIntake(currentIntake => Math.min(currentIntake + amount, goal));
  };

  const resetIntake = () => {
    setIntake(0);
  };

  return (
    <div className="app-container">
      <h1 className="title">Water Intake Tracker</h1>
      <WaterDisplay percentage={percentage} intake={intake} goal={goal} />
      <ActionButtons addWater={addWater} resetIntake={resetIntake} />
    </div>
  );
}

export default WaterTracker; 