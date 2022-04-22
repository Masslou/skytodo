// Store
import { useDispatch } from 'react-redux';
// Actions
import { dataActions } from '../redux/actions/dataActions';

export const useFetchTodos = () => {
  const dispatch = useDispatch();
  const { fetchToDos } = dataActions;

  const fetchData = () => {
    dispatch(fetchToDos());
  };

  return { fetchData };
};
