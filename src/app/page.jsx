import Inicio from "./pages/inicio/page";
import Header from "./components/Header";
export default function Home() {
  return (
    <>
    <div className="w-full min-h-screen bg-[#fcfcfc] "> 
      <Header />
      <Inicio />
    </div>
     
    </>
  );
}
