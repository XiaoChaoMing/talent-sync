import Carosel from "@/components/base/carosel";
import { MainLayout } from "@/components/layout/main-layout/MainLayout";

const home = () => {
  return (
    <MainLayout>
      <div className="flex flex-col gap-2 p-5">
        {/* carousel */}
        <div className="flex w-full justify-center px-15">
          <Carosel />
        </div>
      </div>
    </MainLayout>
  );
};

export default home;
