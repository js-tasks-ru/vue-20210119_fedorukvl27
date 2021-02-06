const monthArray =['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];

export function getActualMonth(date,action){
    if(!action){
        return monthArray[date.getMonth()];
    }
    else if(action === 'next'){
        return date.getMonth()+1;
    }
    else if(action === 'previous'){
        return date.getMonth()-1;
    }
}

export function daysInMonth(month, year) {
    const daysInCurrentMonth=new Date(year, (month+1), 0).getDate();
    const dayList = [];
    for (let day = 1; day <= daysInCurrentMonth;day++){
        dayList.push({
            id: day,
            date: String(new Date(year,month,day)).slice(0,15),
        });
    }
    return dayList;
}
