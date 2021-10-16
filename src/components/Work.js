import Workapi from "./Workapi";

const Work = ()=>{
    return(
        <div className="container-fluid mx-auto" style={{height:'60rem'}}>
            <div className="text-lg text-bold" style={{display:'flex', justifyContent:'center'}}>
                <h1 style={{fontWeight:'900', padding:'8%'}}><em>List of Works</em></h1>
            </div>
            <div className="row">
                <div className="col-md-4" style={{marginTop:'2%', borderRight:"2px solid gray"}}>
                    <h2 style={{fontWeight:'600', display:'flex', justifyContent:'center', margin:'auto'}}><em>Filters</em></h2>
                </div>
                <div className="col-md-8" style={{overflowY:'scroll', height:'40rem'}}>
                    <Workapi/>
                    <Workapi/>
                    <Workapi/>
                    <Workapi/>
                    <Workapi/>
                </div>
            </div>
        </div>
    )
}

export default Work;