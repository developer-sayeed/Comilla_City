const CustomHeading = ({ tittel }) => {
  return (
    <section className="container mx-auto px-4 py-8  text-center">
      <h2 className="text-2xl font-semibold text-blue-950 bg-blue-300 py-4">
        {tittel}
      </h2>
    </section>
  );
};
export default CustomHeading;
