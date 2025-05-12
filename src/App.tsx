import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import CallToAction from "./components/CallToAction/CalltoAction";
import Footer from "./components/Footer/Footer";
import FormSection from "./components/FormSection/FormSection";
import ShortenResults from "./components/ShortenResults/ShortenResults";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <FormSection></FormSection>
        <ShortenResults></ShortenResults>
        <About></About>
        <CallToAction></CallToAction>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
