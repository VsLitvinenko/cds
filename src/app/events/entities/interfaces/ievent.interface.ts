export interface IEventInterface {
    title: string;
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
}
