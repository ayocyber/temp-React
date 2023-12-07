import React from 'react'

const Temprature = () => {
    const [temp , setTemp] = React.useState(0)
    const [tempcolor , setTempColor] = React.useState("cold")

    React.useEffect(()=>{
        if(temp > 15 ){
            setTempColor("hot")
        }else if(temp < 0){
            setTempColor("cold")
        }else{
            setTempColor("neutral")
        }
    },[temp])
    function increseTemp(){
        setTemp(prev => prev + 1)
    
    }
    function reduceTemp(){
        setTemp(prev => prev - 1)
    }
  return (
    <div className='app-container'>
        <div className='temperature-display-container'>
            <div className={`temperature-display ${tempcolor}`}>
                {temp}°c
            </div>
        </div>
        <div className='button-container'>
                <button onClick={increseTemp}>+</button>
                <button onClick={reduceTemp}>-</button>
            </div>
    </div>
  )
}

export default Temprature