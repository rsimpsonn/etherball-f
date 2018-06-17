import React from 'react';

import '../themes.css';
import searchicon from '../assets/search_icon.png';

const FilterMarket = props => {
    return (
        <div className="form-group" style={{ display: "flex", flexDirection: "row" }}>
            <img src={searchicon} alt="search" style={{ height: "30px", marginTop: "10px", marginLeft:"20px" }}/>
            <input
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={props.onSearchChange}
                value={props.search}
                style={{
                    borderWidth: "0px",
                    width: "300px",
                    marginRight: "150px",
                }}
            />

            <select
                className="custom-select"
                onChange={props.sortPosition}
                style={{
                    width: "250px",
                    margin: "10px 10px 0 10px",
                    borderWidth: 0
                }}
            >
                <option selected="">Position</option>
                <option value="PG">PG</option>
                <option value="SG">SG</option>
                <option value="Whatever else">Whatever else</option>
            </select>
            <select
                className="custom-select"
                onChange={props.sortSpecies}
                style={{
                    width: "200px",
                    margin: "10px 10px 0 10px",
                    borderWidth: 0,
                }}
            >
                <option selected="">Species</option>
                <option value="Sloth">Sloth</option>
                <option value="Rabbit">Rabbit</option>
                <option value="Bear">Bear</option>
            </select>
        </div>
    );
}

export default FilterMarket;