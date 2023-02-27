//typically the entry point of the application; responsible for rendering the root React component and mounting it to the DOM.

import { useState } from "react";
import { Link } from "react-router-dom";

function Index(props) {
  const [form, setform] = useState({
    name: "",
    image: "",
    title: ""
  });

  // What are the events a form and form inputs can trigger?
  // Submit & On Change
  // MERGE
  const handleChange = (event) => {
    setform((prevState) => ({
      ...prevState,
      //When an evt occurs, the browser creates an evt object that contains information about the event, such as the evt type and the element that triggered it
      [event.target.name]: event.target.value,//event.target.value is the current value of the input field at the time the onChange event was triggered
    }));
  }

  const handleSubmit = (event) => { 
    event.preventDefault();
    props.createPeople(form);
    setform({
      name: '',
      image: '',
      title: '',
    });
  }


  const loaded = () => {
    return props.people.map((form) => (
      <div key={form._id} className="form">
        <Link to={`/people/${form._id}`}>
          <h1>{form.name}</h1>
        </Link>
        <img src={form.image} alt="img" />
        <h3>{form.title}</h3>
      </div>
    )
  )};

  const loading = () => {
    return <h1>Loading...</h1>;
  };
    
  return (
    <section className="form-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={form.name}
          name="name"
          placeholder="name"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.image}
          name="image"
          placeholder="image URL"
          onChange={handleChange}
        />
        <input
          type="text"
          value={form.title}
          name="title"
          placeholder="title"
          onChange={handleChange}
        />
        <input type="submit" value="Create form" />
      </form>
      {props.people ? loaded() : loading()}
    </section>
  );
}

export default Index;
