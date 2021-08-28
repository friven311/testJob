import React, {Component} from 'react';
import './index.scss';

export default class SearchPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
        this.onUpadateSearch = this.onUpadateSearch.bind(this)
    }

    onUpadateSearch(e) {
        const term = e.target.value
        this.setState({term})
        this.props.onUpadateSearch(term)
    }

    render() {
        return (
            <input
                className="search-panel"
                type="text"
                placeholder="Поиск по хэштегам"
                onChange={this.onUpadateSearch}
            />
        )
    } 
}
