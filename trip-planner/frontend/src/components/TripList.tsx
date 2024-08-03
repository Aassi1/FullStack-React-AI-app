import React from "react"
import { Trip } from "../Types"
import TripCard from "./Trip"
import "./Trip.css"

type Props = {
    trips: Trip[];
    onDelete: (id: string) => void;
    onAddNote: (tripId: string, note: string) => void;
    onDeleteNote: (tripIp: string, noteIndex: number) => void;
}

function TripList ({trips, onDelete, onAddNote, onDeleteNote}: Props) {
    return <div className="trip-list-container">
        {trips && trips.map((trip, index) => <TripCard 
            key={index}
            trip={trip}
            index={index}
            onDelete={onDelete}
            onAddNote={onAddNote}
            onDeleteNote={onDeleteNote}
        />)}
    </div>
}

export default TripList