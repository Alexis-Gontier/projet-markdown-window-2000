import CitationDuJour from "../components/api/Quote"
import BlagueDuJour from "../components/api/Joke"
import EventsDuJour from "../components/api/Events"
import RecetteDuJour from "../components/api/Recipe"
import MocktailDuJour from "../components/api/Mocktail"


export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
    <CitationDuJour/>
    <BlagueDuJour/>
    <EventsDuJour/>
    <MocktailDuJour/>
    <RecetteDuJour/>
    </div>
  )
}