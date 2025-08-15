import { EventoEvent } from "@/app/lib/types"
import EventCard from "@/app/components/Event-card";

type EventListProps = {
    events: EventoEvent[];
}


export default function EventList({ events }: EventListProps) {
    return (
        events.map(event => (
            <EventCard key={event.id} event={event} />
        ))
    )
}
