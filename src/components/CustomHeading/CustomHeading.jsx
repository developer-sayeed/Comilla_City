// eslint-disable-next-line react/prop-types
const CustomHeading = ({ tittel, className }) => {
  return (
    <section className="  py-8 sm:py-1  text-center">
      <h2
        className={`text-2xl font-semibold text-white bg-[#0FABCA] py-4 ${className}`}
      >
        {tittel}
      </h2>
    </section>
  );
};
export default CustomHeading;
