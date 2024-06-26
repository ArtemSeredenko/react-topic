import { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log('CleanUp');
      clearInterval(id);
    };
  }, []);

  const formattedTime = time.toLocaleTimeString('en-GB', { hour12: false });

  return <div>{formattedTime}</div>;
}
