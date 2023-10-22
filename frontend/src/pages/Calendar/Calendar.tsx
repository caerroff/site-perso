import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'

function Calendar() {
    return (
        <>
            <div className='mx-auto max-w-[2000px]'>
                <FullCalendar
                    plugins={[dayGridPlugin]}
                    initialView="dayGridMonth"
                    locale='FR-fr'
                />
            </div>
        </>
    )
}

export default Calendar