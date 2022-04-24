// Store
import { useSelector } from 'react-redux';

export const ErrorMessage = () => {
  const { error } = useSelector((state) => ({ error: state.todo.error }));
  return (
    <section
      className="flex text-red-100 bg-red-700 border border-red-700
    rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-10">
      <span className="font-bold">
        ERROR: <span className="font-normal">{error}</span>
      </span>
    </section>
  );
};
