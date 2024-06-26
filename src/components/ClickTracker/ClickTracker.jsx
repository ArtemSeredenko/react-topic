import { useEffect, useState } from 'react';

export default function ClickTracker() {
  const [clicks, setClicks] = useState(0);
  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    console.log('Effects', clicks);
  }, [clicks]);

  useEffect(() => {
    console.log(new Date(date));
  }, [date]);

  const formattedTime = new Date(date).toLocaleTimeString('en-GB', {
    hour12: false,
  });

  return (
    <div>
      <button onClick={() => setClicks(clicks + 1)}>Clicks: {clicks}</button>
      <button onClick={() => setDate(Date.now())}>Date: {formattedTime}</button>
    </div>
  );
}
