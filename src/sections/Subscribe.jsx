import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container flex justify-between items-center max-lg:flex-col gap-10"
      id="contact-us"
    >
      <h3 className="text-3xl leading-11 lg:max-w-md font-palanquin font-bold">
        Suscríbete para recibir
        <span className="text-coral-red "> Actualizaciones </span>& nuestro
        Newsletter
      </h3>

      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input
          type="text"
          placeholder="name@example.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button
            label="Suscríbete"
            fullWidth
          />
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
