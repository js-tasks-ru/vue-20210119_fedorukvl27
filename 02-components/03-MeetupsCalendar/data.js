export function getActualMonth(date,action){
    if(!action){
        return date.toLocaleString(navigator.language,{
            month: 'long',
        });
    }
    else if(action === 'next'){
        return date.getMonth()+1;
    }
    else if(action === 'previous'){
        return date.getMonth()-1;
    }
}

export function getDaysInMonth(month, year) {
    const daysInCurrentMonth=new Date(year, month+1, 0).getDate();
    const prevLastDay = new Date(year, month, 0).getDate();
    const firstDayIndex = new Date(year, month, 0).getDay();
    const lastDayIndex = new Date(year, (month+1), 0).getDay();
    const daysList = [];
    for (let day=firstDayIndex; day>0 ;day--){
        daysList.push({
            id: prevLastDay-day +1,
            isPreviousMonth: true,
            date: new Date(year,month,prevLastDay-day+2).toISOString().slice(0,10),
        });
    }
    for (let day = 1; day <= daysInCurrentMonth;day++){
        daysList.push({
            id: day,
            date: new Date(year,month,day+1).toISOString().slice(0,10),
        });
    }
    for (let day = 1; day <= lastDayIndex; day++){
        daysList.push({
            id: day,
            isNextMonth: true,
            date: new Date(year,month,day).toISOString().slice(0,10),
        });
    }
    return daysList;
}
