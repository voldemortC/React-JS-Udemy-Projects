import ExpenceItems from "./ExpenceItems";
import "./ExpenseList.css";
export default function ExpenseList(props){
    if(props.filteredItems.length === 0){
        return <h1 className="expenses-list__fallback">No Expenses Found</h1>
    } else {
        return(
            <ul className="expenses-list">
                {
                    props.filteredItems.map((item)=>{
                        return(
                            <ExpenceItems
                            key={item.id}
                            title={item.title}
                            ammount={item.ammount}
                            date={item.date}
                            />
                        )
                    })
                }
            </ul>
        );
    }
}