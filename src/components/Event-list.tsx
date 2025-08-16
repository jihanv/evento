import { EventoEvent } from "@/lib/types"
import EventCard from "@/components/Event-card";
import { getEvents } from "@/lib/utils";

type EventListProps = {
    city: string;
}


export default async function EventList({ city }: EventListProps) {
    if (process.env.NODE_ENV === "development") {
        await new Promise((r) => setTimeout(r, 2000));
    }

    const events = await getEvents(city)
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>

    )
}
