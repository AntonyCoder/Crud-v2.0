import dayjs from 'dayjs';
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);
dayjs.locale('ru');

//Форматирование даты для отображения времени с момента публикации
function formatDate(created){
    const date = dayjs(created)
    const now = dayjs();

    const diffMinutes = now.diff(date, 'minute');
    const diffHours = now.diff(date, 'hour');
    const diffDays = now.diff(date, 'day');

    let displayDate;

    if(diffMinutes < 60) {
      displayDate = `${diffMinutes} мин`
    } else if(diffHours < 24) {
      displayDate = `${diffHours} час`
    } else {
      displayDate = `${diffDays} дн`
    }

    return displayDate;
}

export default formatDate;