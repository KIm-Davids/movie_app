import Image from "next/image";
import Header from "@/app/component/Header";
import Providers, {Provider} from "@/Providers"
import Slider from '@/app/component/Slider'

export default function Home() {
  return (
      <Providers>
        <Header/>
        <Slider />
      </Providers>

  );
}
