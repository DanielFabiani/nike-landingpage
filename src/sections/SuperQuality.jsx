//import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Nuestros calzados son
          <br />
          <span className="text-coral-red ">importados </span>
          <span className="text-coral-red ">y originales </span>
        </h2>

        <p className="mt-4 lg:max-w-lg info-text">
          Garantizando un confort y un estilo de primera, las zapatilla nike son
          meticulosamente elaboradas y están diseñadas para elevar tu
          experiencia, proporcionándote una calidad, innovación y un toque de
          elegancia.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Por eso preferimos Nike, por su dedicación al detalle y la excelencia
          garantizan su satisfacción
        </p>
        <div className="mt-11">
          <Button label="Descripción" />
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img
          src={shoe8}
          alt="Zapatillas superiores"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};
export default SuperQuality;
