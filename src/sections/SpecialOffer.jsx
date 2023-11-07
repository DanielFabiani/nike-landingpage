import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          alt="ofertas"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Ofertas
          <span className="text-coral-red "> especiales</span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Embárcate en un viaje de compras que redefine tu experiencia con
          ofertas insuperables. Desde selecciones de primera hasta ahorros
          increíbles ofrecemos un valor inigualable que nos diferencia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navegue por un reino de posibilidades diseñado para satisfacer sus
          deseos únicos, superando las expectativas más elevadas.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button
            label="Comprar"
            iconURL={arrowRight}
          />
          <Button
            label="Mas información"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};
export default SpecialOffer;
