import { Calendar } from "@/components/ui/calendar"
import { useState } from "react";

function ShadCnCalendar() {
    const [date,setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-4 text-blue-500">Calendar</h1>
            <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-lg border"
            />
        </div>
    )
}

export default ShadCnCalendar
