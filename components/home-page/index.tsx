import { LayOutWithOutSearch, MainLayout } from "components/layout";
import { useWindowSize } from "lib/hooks";

export function HomePage() {
  const { width } = useWindowSize();

  return <MainLayout>Hola</MainLayout>;
}
