
function toHoursMinutesSeconds(value)
{
    return `${Math.floor(value / 3600)}:${Math.floor((value - (Math.floor(value / 3600)*3600)) / 60)}:${Math.floor(value - (Math.floor((value - (Math.floor(value / 3600)*3600)) / 60)*60) - (Math.floor(value / 3600) * 3600 ))}`
}

console.log(toHoursMinutesSeconds(3600));
console.log(toHoursMinutesSeconds(3720));
console.log(toHoursMinutesSeconds(3725));
