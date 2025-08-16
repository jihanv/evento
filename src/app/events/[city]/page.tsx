import EventList from "@/components/Event-list";
import H1 from "@/components/H1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/utils";
import { Metadata } from "next";

export function generateMetadata({ params }: {
    params: { city: string };
}): Metadata {
    const city = params.city

    return ({
        title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
    })
}

export default async function EventsPage({
    params,
}: {
    params: { city: string };
}) {

    const city = params.city;

    return (
        <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
            <H1 className="mb-28">
                {city === "all" && "All Events"}

                {city !== "all" &&
                    `Events in ${capitalize(city)}`}
            </H1>

            <Suspense fallback={<Loading />}>
                <EventList city={city} />
            </Suspense>


        </main>
    );
}
