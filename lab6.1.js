class Date {
    constructor(day, month, year) {
      this.setDay(day);
      this.setMonth(month);
      this.setYear(year);
    }
  
    getDay() {
      return this.day;
    }
  
    setDay(day) {
      if (day >= 1 && day <= 31) {
        this.day = day;
      } else {
        throw new Error("Недопустимое значение дня");
      }
    }
  
    getMonth() {
      return this.month;
    }
  
    setMonth(month) {
      if (month >= 1 && month <= 12) {
        this.month = month;
      } else {
        throw new Error("Недопустимое значение месяца");
      }
    }
  
    getYear() {
      return this.year;
    }
  
    setYear(year) {
      this.year = year;
    }
  
    format1() {
      const monthNames = [
        "января", "февраля", "марта", "апреля", "мая", "июня",
        "июля", "августа", "сентября", "октября", "ноября", "декабря"
      ];
      return `${this.day} ${monthNames[this.month - 1]} ${this.year} года`;
    }
  
    format2() {
      const formattedDay = this.day.toString().padStart(2, "0");
      const formattedMonth = this.month.toString().padStart(2, "0");
      return `${formattedDay}/${formattedMonth}/${this.year}`;
    }
  }
  
  const dates = [
    new Date(5, 1, 2018),
    new Date(15, 6, 2018),
    new Date(20, 9, 2019),
    new Date(12, 1, 2020),
    new Date(25, 12, 2021)
  ];
  
  // а) список дат для заданного года
  const targetYear = 2018;
  console.log(`Список дат для года ${targetYear}:`);
  for (const date of dates) {
    if (date.getYear() === targetYear) {
      console.log(date.format1());
    }
  }
  
  // б) список дат, которые имеют заданное число
  const targetDay = 12;
  console.log(`Список дат, содержащих день ${targetDay}:`);
  for (const date of dates) {
    if (date.getDay() === targetDay) {
      console.log(date.format2());
    }
  }