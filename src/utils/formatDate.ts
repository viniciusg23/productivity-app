export function formatDate(date: Date): string {
    const actualDate = new Date();

    if(actualDate.getTime() === date.getTime()){
        return "Today"
    }

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return `${weekdays[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}
