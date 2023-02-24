import React,{Component} from "react";
import {connect} from "react-redux";
import {createTutorial} from "../slices/tutorials"
import {Link} from "react-router-dom"

class AddTutorial extends Component{
  constructor(props){
   super(props)
   this.onChangeTitle=this.onChangeTitle.bind(this);
   this.onChangeDescription=this.onChangeDescription.bind(this);
   this.saveTutorial=this.saveTutorial.bind(this);
   this.newTutorial=this.newTutorial.bind(this);
   this.state={
    id:1,
    title:"",
    description:"",
    published:false,
    submitted:false,
    error:""
   };
  }
   
  onChangeTitle(e){
    this.setState({error:""})
    this.setState({title:e.target.value})
  }

  onChangeDescription(e){
    this.setState({error:""})
    this.setState({description:e.target.value})
  }

  saveTutorial(){  
    const {id,title,description}=this.state
    const index=id+1
    this.setState({id:index})
    if(id!=0 && title!="" && description!="")
    {
      console.log(index)
      console.log(id)
    this.props.dispatch(createTutorial({id,title,description}));
    this.setState({
            submitted: true,
            published: true,
          });
    }else{
      this.setState({error:"All fields Requireds"})
    }
  }

  newTutorial() {
    this.setState({
      id: 1,
      title: "",
      description: "",
      published: false,
      submitted: false,
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <button className="btn btn-success" onClick={this.newTutorial}>
              Add
            </button>
            <Link to="/tutorials">
            <button className="btn btn-warning">
              List
            </button>
            </Link>
          </div>
        ) : (
          <div>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="title"
              />
               <span className="errors">{this.state.error}</span>
            </div>
           
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                className="form-control"
                id="description"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="description"
              />
               <span className="errors">{this.state.error}</span>
            </div>
           
           
            <button onClick={this.saveTutorial} className="btn btn-success">
              Submit
            </button>
          </div>
        )}
      </div>
    );
  }
}
// const mapDispatchToProps = (dispatch) => {
//   const title=this.props.title
//   const description=this.props.description
//   return () => dispatch(createTutorial({title,description}))
// };

export default connect()(AddTutorial);