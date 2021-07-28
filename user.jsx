import React, {component} from 'react';

import './style.css';
export default class users extends component{
    state = {
        
    people : [
    
        {
         name : 'Richard',
         surname : 'Ntjana',
         age : 28,
         location : 'Bochum'
        },
        {
            name : 'moshe',
            surname : 'matlou',
            age : 24,
            location : 'Moletji'
           },
           {
            name : 'nakedi',
            surname : 'maja',
            age : 54,
            location : 'Dendron'
           },
           {
            name : 'jack',
            surname : 'Masha',
            age : 42,
            location : 'greenside'
           },

    ]
};

render() {
  let personInfo = this.state.people.map((person,index)=>{
  return(
       <div key = {index}>
           <h1 className={'Details'}>
               {person.name} {person.surname} {this.verifyAge(person.age)}
           </h1>
       </div>)
});

return(
    <div className={'cover'}>
        {personInfo}
    </div>
);
}

verifyAge = (age) => {
    let message = '';

    if (age =>18 ){
        message = 'You are old enough to code'
    }else
    {
        message = 'You are not old enough to code'
     }
return message;
}
}


