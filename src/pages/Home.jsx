import Navbar from "../components/navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects"
import Together from "../components/together";
import Services from "../components/services";
import Contact from "../components/Contact";
// import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div>
      {/* ✅ Use capitalized component name */}
      <Navbar />  

      <main className="mt-25">
        <Hero />
         <About />
         <Services /> 
         <Projects />
        <Together/> 
        <Contact /> 
      </main>

      {/* ✅ Floating WhatsApp Button */}
      {/* <WhatsAppButton /> */}
    </div>
  );
}
