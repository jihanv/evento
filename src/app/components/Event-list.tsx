import { EventoEvent } from "@/app/lib/types"
import EventCard from "@/app/components/Event-card";

type EventListProps = {
    events: EventoEvent[];
}


export default function EventList({ events }: EventListProps) {
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
        </section>

    )
}
