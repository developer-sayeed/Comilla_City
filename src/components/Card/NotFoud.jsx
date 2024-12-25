const NotFoud = ({ titel }) => {
  return (
    <>
      <p className="text-red-500 text-center col-span-3 py-10 bg-white mt-2 shadow-sm">
        দুঃখিত কোনো {titel} খুঁজে পাওয়া যায়নি!
      </p>
    </>
  );
};
export default NotFoud;
