import './ExpenceDate.css';
function ExpenceDate(props) {
    const day = props.date?.toLocaleString('en-US', { day: '2-digit' });
    let monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[props.date?.getMonth()];
    const year = props.date?.getFullYear();  
    return (
        <div className='expense-date'>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
        </div>
    );
  }
  
  export default ExpenceDate;
  