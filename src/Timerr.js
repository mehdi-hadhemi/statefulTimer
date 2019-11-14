import React from 'react';

 class Timerr extends React.Component{
     constructor(props){
     super(props)
     this.state={
         count:0,
         start:false
     }
     setInterval(() => this.state.start ? this.setState({count:this.state.count+1000}) : clearInterval(this.state.count),1000)
    }
    getStarted = () => {
        this.setState({start: !this.state.start})
    }
     getReset =()=> {
         this.setState({count:0,start:false})

     }
   
     

     render(){
        const {count}=this.state
        var   seconds = String(parseInt((count/1000)%60)).padStart(2, '0')
        var minutes = String(parseInt((count/(1000*60))%60)).padStart(2, '0')
        var hours = String(parseInt((count/(1000*60*60))%24)).padStart(2, '0')
          return (
              <div>
                  <h1>{hours} : {minutes} : {seconds}</h1>
                  <button onClick={this.getStarted}>{this.state.start ? 'stop' : 'start'}</button>
                  <button onClick={this.getReset}>Reset</button>
              </div>
          )
      }
    }
      export default Timerr;
      

//           const Convert = (props)=>{
    
//         var   seconds = parseInt((props.time/1000)%60)
//           var minutes = parseInt((props.time/(1000*60))%60)
//           var hours = parseInt((props.time/(1000*60*60))%24);
 
//      hours = (hours < 10) ? "0" + hours : hours;
//      minutes = (minutes < 10) ? "0" + minutes : minutes;
//      seconds = (seconds < 10) ? "0" + seconds : seconds;
          
//      return (<div className='time'> 
//          <p> {hours}   : {minutes} : {seconds} </p>
//          </div>
//      )
//           }  
//           <div className='boutton'>
//    <button>{label}</button>
//    <button>Reset</button>
   
    
//     </div>
