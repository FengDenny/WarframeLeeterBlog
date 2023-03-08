import Hero from "./Hero";
import Solution from "./Solution";
import DailysSolved from "./DailysSolved";
import Statistics from "./Statistics";
import Profile from "./Profile";
import BadgesBanner from "../../components/util/Banner/BadgesBanner";

export default function Home() {
  return (
    <div>
      <Hero />
      <Solution />
      <DailysSolved />
      <Statistics />
      <Profile />
      <BadgesBanner />
    </div>
  );
}
