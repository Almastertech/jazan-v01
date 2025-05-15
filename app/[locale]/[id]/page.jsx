import { Hero } from "@/components/location/Hero";
import { TouristDestinations } from "@/components/location/TouristDestinations";
import getData from "@/lib/api";

async function LocationPage({ params }) {
  const states_data = await getData("home");
  const govs = states_data.govs;
  const { id } = await params;
  const currState = govs.find((state) => state.state === id);
  return (
    <>
      <Hero states_data={govs} data={currState} />
      {/* <TouristDestinations data={currState} /> */}
    </>
  );
}

export default LocationPage;
