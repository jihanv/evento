import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { EventoEvent, PrismaClient } from "@prisma/client";
import prisma from "./db";
import { notFound } from "next/navigation";

// const prisma = new PrismaClient();

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

export function capitalize(text: string) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export async function getEvents(city: string) {
  const events = await prisma.eventoEvent.findMany({
    where: {
      city: city === "all" ? undefined : capitalize(city),
    },
    orderBy: {
      date: "asc",
    },
  });

  return events;
}

export async function getEvent(slug: string) {
  const event = await prisma.eventoEvent.findUnique({
    where: {
      slug: slug,
    },
  });

  if (!event) {
    return notFound();
  }
  return event;
}
