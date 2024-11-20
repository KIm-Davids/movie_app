import Header from "@/app/component/Header";
import Providers, {Provider} from "@/Providers"
import Slider from '@/app/component/Slider'
import SearchBar from '@/app/component/searchBar'
import TVSeriesSlider from "@/app/component/SeriesSlider";

export default function Home() {
  return (
      <Providers>
        <Header/>
        <SearchBar />
        <Slider />
        <TVSeriesSlider />
      </Providers>

  );
}
