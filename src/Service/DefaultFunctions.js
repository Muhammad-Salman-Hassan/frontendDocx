export function HandleStatus(status){
    if(status===0){
        return <span class="badge badge-warning" style={{backgroundColor:"#EFCC00"}}>PENDING</span>
    }else if(status===1){
        return <span class="badge badge-success" style={{backgroundColor:"green"}}>APPROVED</span>
    }else if(status===2){
        return <span class="badge badge-danger" style={{backgroundColor:"red"}}>REJECTED</span>
    }else{
        return "ERROR"
    }

}