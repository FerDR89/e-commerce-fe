import { MainLayout } from "components/layout";
import { SearchDesktop, SearchMobile } from "components/search";
import { useWindowSize } from "lib/hooks";

export function SearchPage() {
  const { width } = useWindowSize();

  return (
    <MainLayout>
      {width < 376 ? <SearchMobile /> : <SearchDesktop />}
    </MainLayout>
  );
}
