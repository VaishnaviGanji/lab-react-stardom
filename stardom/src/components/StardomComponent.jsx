import React, { Component } from 'react'
import prostar from './prostars.json';
import './StardomComponent.css'
export default class Table extends Component {

    constructor(){
        super();
        this.state = {
            prostars: [prostar[0],prostar[1],prostar[2],prostar[3],prostar[4]]
        }
    }

    renderProstars = () => {
        const data = this.state.prostars;
        const mapRow = data.map( prostar => (
            <tr key={prostar.id}>
                <td><img src={prostar.pictureUrl } alt={prostar.pictureUrl} /></td>
                <td>{prostar.name}</td>
                <td>{prostar.popularity}</td>
                <td><button className="delete-button">Delete</button></td>     

            </tr>
        ));
        return mapRow;
    }
    
    addRandomProstar = () => {
        let remainingProstar = prostar.slice(5,prostar.length);
        const random = Math.floor(Math.random() * remainingProstar.length);
        this.setState( { prostars:this.state.prostars.concat(remainingProstar[random])});
    }

    sortName = () => {
        var prostars = this.state.prostars;
        prostars.sort( (ProstarName1,ProstarName2) => {
            let first = ProstarName1.name.toLocaleLowerCase();
            let second = ProstarName2.name.toLocaleLowerCase();

            if(first<second){
                return -1
            }
            else if(first>second){
                return 1
            }
            else{
                return 0
            }
        });
        this.setState({prostars:prostars});
    }

    sortPopularity = () => {
        const prostars = this.state.prostars;
        prostars.sort( (ProstarName1,ProstarName2) => {
            let first = ProstarName1.popularity;
            let second = ProstarName2.popularity;

            if(first>second){
                return -1
            }
            else if(first<second){
                return 1
            }
            else{
                return 0
            }
        });
        this.setState({prostars:prostars});
    }

    render() {
        return (
            <>
                <div className="table-content">
                    <div className="buttons">
                        <button className="addProstar" onClick={this.addRandomProstar}>Get Random Contact</button>
                        <button className="sortByName" onClick={this.sortName}>Sort By Name</button>
                        <button className="sortByPopularity" onClick={this.sortPopularity}>Sort By Popularity</button>
                    </div>
                    <div >
                        <center>
                        <table className="tableProstar">
                            <thead className="tableHeading">
                            <tr>
                                <th>Picture</th>
                                <th>Name</th>
                                <th>Popularity</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {this.renderProstars()}
                            </tbody>
                        </table>
                        </center>
                    </div>

                </div>
            </>
        )
    }
}