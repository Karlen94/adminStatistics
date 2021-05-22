import React from 'react'
import PercentagesSlider from "react-percentages-slider";


export default function Percentages(props) {
    const {divisions,setDivisions}=props
    return  <PercentagesSlider divisions={divisions} setDivisions={setDivisions}/>
}
