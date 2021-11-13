import React,{useState,useEffect} from 'react'
import { ProgressBar } from 'react-bootstrap'
export default function Progress() {
    document.title="Loading"
    const [now, setnow] = useState(0)
    useEffect(() => {
        
       const interval=setInterval(() => {
           setnow(oldnow=>{
             const newnow=oldnow+10
            if(newnow===80){
                clearInterval(interval)
            }
            return newnow
           })
       }, 1);
    }, [])
    let height={
        height:"0.3rem"
    }
    return (
        <ProgressBar style={height} min="0" max="100" now={now} />
    )
}
