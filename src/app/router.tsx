import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import { paths } from "@/config/path";
import MyProjects from "./pages/my-projects/my-projects";
import Applicant from "./pages/applicants/applicant";
import RecruitRequest from "./pages/recruit-request/recruit-request";
import Template from "./pages/template/template";

const NotFoundPage = lazy(() => import("@/components/error/NotFoundPage"));
const Home = lazy(() => import("@/app/pages/home/home"));
export const AppRouter = () => {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: paths.home,
          element: <Home />
        },
        {
          path: paths.myProjects,
          element: <MyProjects />
        },
        {
          path: paths.applicant,
          element: <Applicant />
        },
        {
          path: paths.recruitRequest,
          element: <RecruitRequest />
        },
        {
          path: paths.template,
          element: <Template />
        }
      ],
      errorElement: <NotFoundPage />
    }
  ]);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
