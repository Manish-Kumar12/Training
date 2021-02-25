const date = new Date();

const renderCalender = () => //CREATE FUNCTION TO PASS CODE
{
    date.setDate(1);

    const year = date.getFullYear();

    const monthDays = document.querySelector(".days");//CREATE NEW VARIABLE MONTHS DATES
    //date.setMonth(5);
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate(); 

    const prevLastDay= new Date(date.getFullYear(),date.getMonth(),0).getDate();


    const firstDayIndex= date.getDay();

    const lastDayIndex =new Date(date.getFullYear(),date.getMonth()+1,0).getDay();

    const nextDays = 7 - lastDayIndex -1; //VARIABLE FOR NEXT MONTH'S DATES

    const months=[ "January", "February", "March","April", "May","June","July","August","September","October", "November","December"]; //CREATE ARRAY OF MONTHS

    document.querySelector(".date h1").innerHTML=months[date.getMonth()]+"&nbsp"+year;//DISPLAY HEADING(NAME OF MONTH & YEAR)

    let days=""; //DISPLAY DATES 

    for(let x=firstDayIndex; x>0; x--)//LOOP FOR PREVIOUS MONTH'S DATES 
    {
        days+=`<div class="prev-date">${prevLastDay-x+1}</div>`;
    }
    monthDays.innerHTML=days;

    for( let i=1; i<=lastDay; i++)//TODAY'S DATE
    {
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth())
        {
            days += `<div class="today">${i}</div>`;    
        }
        else
        {
            days += `<div>${i}</div>`;
        }
    }

    for(let j=1; j<=nextDays; j++)//LOOP FOR NEXT MONTH'S DATES
    {
        days+=`<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML=days;
}

document.querySelector('.left').addEventListener('click',() => //CLICK EVENT ON LEFT ARROW
{
    date.setMonth(date.getMonth()-1)
    renderCalender();
})

document.querySelector('.right').addEventListener('click',() => //CLICK EVENT ON RIGHT ARROW
{
    date.setMonth(date.getMonth()+1)
    renderCalender();
})

renderCalender(); //FUNCTION CALLED