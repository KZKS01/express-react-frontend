import { useParams } from "react-router";
import Main from "../components/Main";

function Show(props) {
  const { id } = useParams();
  const people = props.people;//pass down people
  //declares a var: person and initializes it to either null 
  //or an object, if people is defined & contains an object with an _id property equal to the value of id
  const person = people ? people.find((p)=>p._id === id) : null;
  //If people is truthy, the expression before the : is evaluated and assigned to person
  //find method is called on people, with a callback fn that takes one arg: p representing each element of the array. The fn checks whether p._id is equal to the value of the id var

  const loaded = () => {
    return (
      <div>
        <h1>{person.name}</h1>
        <h2>{person.title}</h2>
        <img className="avatar-image"
        src={person.image} 
        alt={person.title} 
        />
      </div>
    );
  };

  const loading = () => {
    return <h1>Loading...</h1>
  };

  return (
      <div className="person">
        {person ? loaded() : loading()}
      </div>
    );
  };
export default Show;