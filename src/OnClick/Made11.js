import React, { Component } from 'react'

export default class Made11 extends Component {
    constructor(){
        super()
    
        this.state={
            clicks11:[{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},],
            numberOfG11: 0,
            clicks22:[{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},],
            numberOfG22: 0,
            clicks33:[{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},],
            numberOfG33: 0,
            clicks44:[{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},],
            numberOfG44: 0,
            clicks55:[{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},],
            numberOfG55: 0,
            clicks66:[{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},{"name":"G"},],
            numberOfG66: 0,
            score: 0,
            shotsRem: 12
        }
        
        
    }
    showMore11=()=>{
       this.setState(state=>({numberOfG11: state.numberOfG11+1}));
       this.setState(state=>({score: state.score+1}));
       this.setState(state=>({shotsRem: state.shotsRem-1}));
    }
    showMore22=()=>{
        this.setState(state=>({numberOfG22: state.numberOfG22+1}));
        this.setState(state=>({score: state.score+2}));
        this.setState(state=>({shotsRem: state.shotsRem-1}));
     }
     showMore33=()=>{
        this.setState(state=>({numberOfG33: state.numberOfG33+1}));
        this.setState(state=>({score: state.score+3}));
        this.setState(state=>({shotsRem: state.shotsRem-1}));
     }
     showMore44=()=>{
        this.setState(state=>({numberOfG44: state.numberOfG44+1}));
        this.setState(state=>({score: state.score+4}));
        this.setState(state=>({shotsRem: state.shotsRem-1}));
     }
     showMore55=()=>{
        this.setState(state=>({numberOfG55: state.numberOfG55+1}));
        this.setState(state=>({score: state.score+5}));
        this.setState(state=>({shotsRem: state.shotsRem-1}));
     }
     showMore66=()=>{
        this.setState(state=>({numberOfG66: state.numberOfG66+1}));
        this.setState(state=>({score: state.score+6}));
        
     }
     missed=()=>{
         this.setState(state=>({shotsRem: state.shotsRem-1}))
     }
     reset=()=>{
        this.setState(state=>({shotsRem: 12}))
        this.setState(state=>({numberOfG11: 0}));
        this.setState(state=>({numberOfG22: 0}));
        this.setState(state=>({numberOfG33: 0}));
        this.setState(state=>({numberOfG44: 0}));
        this.setState(state=>({numberOfG55: 0}));
        this.setState(state=>({numberOfG66: 0}));
        this.setState(state=>({score: 0}));
    }
    

    render() {
    const itemsToShow11=this.state.clicks11.slice(0,this.state.numberOfG11).map(clicks11=><div>{clicks11.name}</div>)
    const itemsToShow22=this.state.clicks22.slice(0,this.state.numberOfG22).map(clicks22=><div>{clicks22.name}</div>)
    const itemsToShow33=this.state.clicks33.slice(0,this.state.numberOfG33).map(clicks33=><div>{clicks33.name}</div>)
    const itemsToShow44=this.state.clicks44.slice(0,this.state.numberOfG44).map(clicks44=><div>{clicks44.name}</div>)
    const itemsToShow55=this.state.clicks55.slice(0,this.state.numberOfG55).map(clicks55=><div>{clicks55.name}</div>)
    const itemsToShow66=this.state.clicks66.slice(0,this.state.numberOfG66).map(clicks66=><div>{clicks66.name}</div>)
    const scoreSet=this.state.score
    const shotSet=this.state.shotsRem
    if (this.state.shotsRem===0){
        return (
            <div>
            <div>
               <h1>Final Score: {scoreSet}</h1> 
            </div>
            <div>
                <button onClick={this.reset}>New Game</button>
            </div>
            </div>
        )
    }else{
        return (
            <div > 
            <div className="row">
                11ft
                <div>
                <button onClick={this.showMore11}>made</button>
                <button onClick={this.missed}>missed</button>
                </div>
                {itemsToShow11}    
            </div>
            <div className="row">
                22ft
                <div>
                <button onClick={this.showMore22}>made</button>
                <button onClick={this.missed}>missed</button>
                </div>
                {itemsToShow22}
            </div>
            <div className="row">
                33ft
                <div>
                <button onClick={this.showMore33}>made</button>
                <button onClick={this.missed}>missed</button>
                </div>
                {itemsToShow33}
            </div>
            <div className="row">
                44ft
                <div>
                <button onClick={this.showMore44}>made</button>
                <button onClick={this.missed}>missed</button>
                </div>
                {itemsToShow44}
            </div>
            <div className="row">
                55ft
                <div>
                <button onClick={this.showMore55}>made</button>
                <button onClick={this.missed}>missed</button>
                </div>
                {itemsToShow55}
            </div>
            <div className="row">
                66ft
                <div>
                <button onClick={this.showMore66}>made</button>
                <button onClick={this.missed}>missed</button>
                </div>
                {itemsToShow66}
            </div>
            <div>Shots Remaining: {shotSet}</div>
            <div>Total Score: {scoreSet}</div>
            </div>
        )
    }
}
}
