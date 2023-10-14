import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {
    return (
        <>
            <FullCalendar
                plugins={[dayGridPlugin]}
                initialView="dayGridMonth"
                locale='FR-fr'
            />
        </>
    )
}

export default Calendar