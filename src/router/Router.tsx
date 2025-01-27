import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Outlet,
  Route,
} from 'react-router-dom';
import { BlogDetails } from '../pages/BlogDetails';
import { Blogs } from '../pages/Blogs';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Navigate to={'/blogs'} replace={true} />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path={'/blogs/:id'} element={<BlogDetails />} />
    </Route>
  )
);
