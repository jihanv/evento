import { EventoEvent } from "@/lib/types"
import EventCard from "@/components/Event-card";

type EventListProps = {
    city: string;
}


export default async function EventList({ city }: EventListProps) {
    if (process.env.NODE_ENV === "development") {
        await new Promise((r) => setTimeout(r, 2000));
    }
    const result = await fetch(
        `https://bytegrad.com/course-assets/projects/evento/api/events?city=${city}`
    );

    const events: EventoEvent[] = await result.json();
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>

    )
}
