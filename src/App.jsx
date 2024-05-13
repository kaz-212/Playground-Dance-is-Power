import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

export default function App() {
  const NOUNS = ["Freedom", "Liberation", "Expression", "Power"];
  const [wordIndex, setWordIndex] = useState(0);
  const nounRef = useRef(null);
  const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const typeWord = async wordIndex => {
    const currentWord = NOUNS[wordIndex % 4];
    for (let i = 0; i <= currentWord.length; i++) {
      await sleep(30 + Math.random() * 400);
      console.log(currentWord.slice(0, i));
      nounRef.current.innerText = currentWord.slice(0, i);
    }
    await sleep(1000);
    for (let i = currentWord.length; i >= 0; i--) {
      await sleep(80);
      console.log(currentWord.slice(0, i));
      nounRef.current.innerText = currentWord.slice(0, i);
    }
    setWordIndex(wordIndex + 1);
  };

  useEffect(() => {
    typeWord(wordIndex);
  }, [wordIndex]);

  return (
    <main>
      <h1>
        Dance is <span className='noun' ref={nounRef}></span>
      </h1>
      <Spline scene='https://prod.spline.design/nbNul2bDeW3SRbn0/scene.splinecode' />
    </main>
  );
}
