export const ProductsNotFound = ({ searchTerm }) => {
  return (
    <h2 className="text-[22px] px-[10%] text-center">Searched term `{searchTerm}`doesnt match any product criteria</h2>
  );
};