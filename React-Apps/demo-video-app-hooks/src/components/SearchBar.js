import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {

    const [term, setTerm] = useState('');

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(term);
    }


    return (
        <div className="search-bar ui segment">
            <form className="ui form" onSubmit={onSubmit}>
                <div className="field">
                    <label>Search For A Video</label>
                    <input type= "text" value={term} onChange={(event) => {setTerm(event.target.value)}}/>
                </div>                
            </form>
        </div>
    );

}

// class SearchBar extends React.Component {


//     onInputChange = (event) => {
//         this.setState({ term: event.target.value} );
//     }


//     render() {
        
//     }
// }

export default SearchBar;