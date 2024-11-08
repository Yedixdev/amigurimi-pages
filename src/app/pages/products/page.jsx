import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedShinyText from "../../../components/ui/animated-shiny-text";
import CollectionsAndProducts from "../../components/product/CollectionAndProducts"

export default function Products() {
  return (
    <div className="bg-[#83838322]">
      <Header/>
      <div className="flex flex-col items-center gap-3  mt-14 text-[#1f6c76] ">
          <div className="font-lato text-4xl font-bold text-center text-[#1f6c76] pt-14">Nuestros Amigurumis</div>
            <AnimatedShinyText>
               <div className="font-itim text-2xl text-center font-bol"> Todos elaborados a mano</div>
            </AnimatedShinyText>
         </div>
      <div>
        <CollectionsAndProducts/>
      </div>
      <Footer/>
    </div>
  );
}