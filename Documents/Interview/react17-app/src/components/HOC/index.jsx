function HOC(WrappedComp){
    return function Comp(props){
        return(
            <WrappedComp {...props} additionalData={'Alice'}/>
        )
    }
}


function AppComp({data, additionalData}){
    console.log('data', data);
    
    return (
        <>
            <div>{data}</div>
            <div>{additionalData}</div>
        </>
    )
}

export default HOC(AppComp);