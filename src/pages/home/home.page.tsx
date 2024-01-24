import {Calendar, dayjsLocalizer} from "react-big-calendar"
import "react-big-calendar/lib/css/react-big-calendar.css"
import dayjs from "dayjs"
import "dayjs/locale/pt-br"
import Api from "../../services/api.service";
import { useEffect, useState } from "react";
import Sidebar from "../../components/ui/sideBar";

const messages = {
    allDay: 'Dia todo',
    previous: 'Anterior',
    next: 'Próximo',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    agenda: 'Agenda',
    date: 'Data',
    time: 'Hora',
    event: 'Evento',
};

export const HomePage: React.FC = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const response = await Api.get("/events");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const mappedEvents = response.data.map((event: any) => ({
                start: new Date(event.startTime),
                end: new Date(event.endTime),
                title: event.title,
            }));
    
            setEvents(mappedEvents);
        };
    
        fetchEvents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    dayjs.locale("pt-br")
    const localizer = dayjsLocalizer(dayjs)

    return (
        <div className="w-full h-screen">
            <Sidebar/>
            <Calendar 
            localizer={localizer} 
            messages={messages}
            events={events}/>
        </div>
    );
}  