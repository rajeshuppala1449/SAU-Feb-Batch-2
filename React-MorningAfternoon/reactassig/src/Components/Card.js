import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {
    state = {
        link: "http://books.google.com/books/content?id=F1wgqlNi8AMC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    }
    render() {
        return (
            <Link to="/details">
                <div style={{
                    padding: "10px", marginLeft: "15px", marginBottom: "20px", boxShadow: "-5px 1px 24px -6px rgba(0,0,0,0.71)"
                }
                }>
                    <div style={{ border: "2px black solid", height: "270px", width: "170px" }}>

                        <img style={{ height: "200px", width: "170px" }} src={this.props.item.thumbnailUrl}></img>
                        <br></br>
                        <label style={{ fontSize: "15px" }}>{this.props.item.title}</label>
                    </div>
                </div >
            </Link>
        )
    }
}
export default Card;