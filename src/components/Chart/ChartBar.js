const ChartBar= props =>{
   let BarHeightFill="0%"
   if(props.max>0){
    BarHeightFill=Math.round((props.value/props.maxValue)*100)+"%"
   }
    return(
    <div className="chart-bar">
        <div className="chart-bar__inner">
       <div className="chart-bar__fill" style={{height:BarHeightFill}}></div>
        </div>
        <div className="chart-bar__label"></div>
    </div>
   )
}


export default ChartBar