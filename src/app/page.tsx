import Image from "next/image";
import Header from "@/app/component/Header";
import Providers, {Provider} from "@/Providers"

export default function Home() {
  return (
      <Providers>
        <Header/>
      </Providers>

  );
}
