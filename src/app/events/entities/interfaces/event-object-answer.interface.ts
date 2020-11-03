export interface EventObjectAnswerInterface {
    id: number;
    location: string;
    organizer: string;
    phone: string;
    notes: string;
    date: {
        year: number,
        month: number,
        day: number,
    };
    startTime: {
        hours: number,
        minutes: number,
    };
    endTime: {
        hours: number,
        minutes: number,
    };
    title: string;
}
