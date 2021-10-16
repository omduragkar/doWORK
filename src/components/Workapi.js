import { Link } from "react-router-dom"

const Workapi = ()=>{
    return(
        <div class="card" style={{width: '50rem', margin:'4%'}}>
            <div className="card-body row" style={{padding:'5%'}} >
                <div className="col-md-8">
                    <h5 className="card-title">Small Dev Work</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Estimated time and Status</h6>
                    <p className="card-text">need to work on Some JS skills to build project</p>
                    <Link to="/work/" className="card-link btn btn-outline-primary">Read More</Link>
                </div>
                <div className="col-md-4"  style={{display:'flex', alignContent:'center', margin:'auto'}}>
                    <a href="/" className="card-link btn btn-outline-dark">Apply Now</a>
                    <a href="/" className="card-link btn btn-outline-danger">BookMark</a>
                </div>
            </div>
        </div>  
    )
}
export default Workapi