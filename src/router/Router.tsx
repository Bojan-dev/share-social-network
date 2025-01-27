import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { Test } from '../pages/Test';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={'/blogs/:id'} element={<Test />} />
    </>
  )
);
