import { EventoEvent } from "@prisma/client";
import EventCard from "@/components/Event-card";
import { getEvents } from "@/lib/utils";
import PaginationControls from "./pagination-controls";

type EventListProps = {
    city: string;
    page: number;
}


export default async function EventList({ city, page }: EventListProps) {
    // if (process.env.NODE_ENV === "development") {
    //     await new Promise((r) => setTimeout(r, 2000));
    // }



    const { events, totalCount } = await getEvents(city, page)

    const previousPath = page > 1 ? `/events/${city}?page=${page - 1}` : ""
    const nextPath = totalCount > page * 6 ? `/events/${city}?page=${page + 1}` : ""
    return (
        <section className="max-w-[1100px] flex flex-wrap gap-10 justify-center px-[20px]">
            {events.map(event => (
                <EventCard key={event.id} event={event} />
            ))}
            <PaginationControls previousPath={previousPath} nextPath={nextPath} />
        </section>

    )
}
