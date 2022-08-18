import {useDispatch, useSelector, TypedUseSelectorHook} from 'react-redux';
import type { RootState, AppDispatch } from '.';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useaAppSelector: TypedUseSelectorHook<RootState> = useSelector;