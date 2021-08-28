import './index.scss';
import React,{Component} from 'react'
import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import PostList from '../post-list'

import PostAddForm from '../post-add-form'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[
        {label:'Going to learn #React', id:1},
        {label:'Going to #shop', id:2},
        {label:'Going to #work', id:3}
      ],
      term: ''
    }
    this.deleteItem = this.deleteItem.bind(this)
    this.editItem = this.editItem.bind(this)
    this.addItem = this.addItem.bind(this) 
    this.onUpadateSearch = this.onUpadateSearch.bind(this)

    this.maxId = 4
  }

  deleteItem(id) {
    this.setState(({data}) => {
      const index = data.findIndex(elem => elem.id === id);
      
      const before = data.slice(0, index)
      const after = data.slice(index+1)
      const newArr = [...before,...after]
      return {
        data: newArr
      }
    })
  }
  addItem(body) {
    const newItem = {
      label:body,
      id: this.maxId++
    }
    this.setState(({data}) => {
      const newArr = [...data, newItem]
      return {
        data: newArr
      }
    })
  }

  searchPost(items, term) {
    if(term.length === 0) {
      return items
    }
    return items.filter( (item) => {
      return item.label.indexOf(term) > -1
    })

  }
  onUpadateSearch(term) {
    this.setState({term})
  }

  editItem(id) {
    const value = prompt("Расширьте todo",this.state.data[id].label)
    this.setState(({data}) => {
      data[id-1].label = value;
      return {
        data:data
      }
    })
    
  }
  

  render(){
    const {data, term} = this.state
    const allPosts = data.length
    
    const visiblePosts = this.searchPost(data, term) 

    return (
      <div className="app">
          <AppHeader 
            allPosts={allPosts}/>
          <div className="search-panel d-flex">
            <SearchPanel
              onUpadateSearch={this.onUpadateSearch}/>
          </div>
          <PostList 
            posts={visiblePosts}
            onDelete={this.deleteItem}
            onEdit={this.editItem}
            />
          <PostAddForm
            onAdd={this.addItem}/>
      </div>
    )
  }
  
}
