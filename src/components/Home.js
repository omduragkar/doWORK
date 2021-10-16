import { Link } from "react-router-dom";

export default function Home() {
    return (
    <div class="row text-center" style={{display:'flex', justifyItems:'center', justifyContent:'space-between', marginTop:"3rem", marginBottom:'3rem'}}>
        <div className="col-sm-5 mx-auto" style={{padding:"6% 0% 2% 10%", fontWeight:"bolder"}}>
                <h1 style={{ fontWeight:"bolder"}} className="text-center"><em>What are you looking For?</em></h1>
                <h4> Let us Assist you</h4>
                <Link className='btn btn-outline-primary' to="/auth/signin">Signin</Link>
                <Link className='btn btn-outline-primary mx-2' to="/auth/signup">SignUp</Link>
        </div>
        <div className="col-sm-7">
            <img style={{padding:"1%", fontWeight:"bolder"}} src="/images/Homewhat.svg" alt="Homepageimage" height={400}/>
        </div>
    </div>
)}