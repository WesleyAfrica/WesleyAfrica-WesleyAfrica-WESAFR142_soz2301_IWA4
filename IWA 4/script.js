let date = 2050;
let status = 'student';
let count = 0;

if (date = 2050) {
    count = count + 4
	console.log("January", 'New Years Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')


if (status == "student") {
    count = count + 1
    console.log('June', 'Youth Day')
}


  console.log('August', 'Womens Day')
  console.log('September', 'Heritage Day')
  date = 'December'
  console.log(date, 'Day of Reconciliation')
  count = count + 3


  if (status == "parent") {
      count = count + 1
    console.log(date, 'Christmas Day')	
  }

  count = count + 1
  console.log(date, 'Day of Goodwill')
  
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)