import EventList from "@/components/Event-list";
import H1 from "@/components/H1";
import { EventoEvent } from "@/lib/types";

export default async function EventsPage({
    params,
}: {
    params: { city: string };
}) {
    const city = params.city;

    const result = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

    const events: EventoEvent[] = await result.json();
    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-28">
                {city === "all" && "All Events"}

                {city !== "all" &&
                    `Events in ${city.charAt(0).toUpperCase() + city.slice(1)}`}
            </H1>


            <EventList events={events} />

        </main>
    );
}
