
const countValue = document.querySelector('#counter');

const increment = () =>{

    //get ht evalue from Ui
    let value = parseInt(countValue.innerText);
    //update the value
    value=value+1;
    //set the value onto ui
    countValue.innerText =value;
}

const decrement =()=>{
      //get ht evalue from Ui
      let value = parseInt(countValue.innerText);
      //update the value
      value=value-1;
      //set the value onto ui
      countValue.innerText =value;
};