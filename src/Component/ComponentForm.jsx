import React, { Component } from 'react';
import ComponentList from './ComponentList';

class ComponentForm extends Component {
  
    constructor(props) {
      super(props)
      this.state = {
        todoItem : '',
        items : []
      }

      this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            // penulisan dibawah sama dengan 
            // items : this.state.items.concat([this.state.todoItem])
            items: [...this.state.items, this.state.todoItem],
            
            // set kolom jadi kosong
            todoItem :''
        })
    }

    handleChange = (e) => {
        this.setState({
            todoItem: e.target.value
        });
        console.log(this.state.todoItem)
    }
  
    render() {
      return(
        <div>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.todoItem} onChange={this.handleChange}/>
                    <button>Add</button>
                </form>
            </div>
            <div>
                <ComponentList items={this.state.items} />
            </div>
        </div>
      )
    }
  }

export default ComponentForm;