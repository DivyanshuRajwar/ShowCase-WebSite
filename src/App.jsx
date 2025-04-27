import React, { useState, useEffect } from "react";
import "./App.css";
import Projects from "./Component/Projects";
import Loader from "./Component/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <Projects />} 
    </div>
  );
}

export default App;
