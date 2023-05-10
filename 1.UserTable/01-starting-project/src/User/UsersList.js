import Card from "../UI/Card.js";
import "./UsersList.css";
export default function UsersList(props){
    console.log(props.users, "");
    return(
        <Card className="users">
           <ul>
                {
                    props.users.map((item, index)=>(
                        <li key = {item.id}>{item.name} ({item.age} Years)</li>
                    ))
                }
            </ul>
        </Card>
    );
}