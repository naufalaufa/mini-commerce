import { RouterProvider } from "react-router-dom";
import { PRIVATE_ROUTER, PUBLIC_ROUTER } from "./routers";
import { Suspense, useEffect } from "react";
import { useProfile } from "./hooks/useAuth";
import { useAuthStore } from "./store/useAuthStore";
import { Loading, PageError } from "./components";
import LayoutAuth from "./components/Layout/LayoutAuth";

const App = () => {
  const { data: userProfile, isLoading, error } = useProfile();
  const addUser = useAuthStore((state) => state.addUser);

  useEffect(() => {
    if (userProfile) {
      addUser(userProfile);
    }
  }, [addUser, userProfile]);

  if (isLoading) return <Loading />;
  if (error) return <PageError />;

  return (
    <>
      {!userProfile ? (
        <Suspense fallback={<Loading />}>
          <LayoutAuth>
            <RouterProvider router={PUBLIC_ROUTER} />
          </LayoutAuth>
        </Suspense>
      ) : (
        <Suspense fallback={<Loading />}>
          <div className="w-[95vw] m-auto">
            <RouterProvider router={PRIVATE_ROUTER} />
          </div>
        </Suspense>
      )}
    </>
  );
};

export default App;
