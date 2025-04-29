import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CallToAction from "./components/CallToAction/CalltoAction";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <About></About>
        <CallToAction></CallToAction>
      </main>
    </>
  );
}

export default App;
