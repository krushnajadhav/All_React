const WelcomeMessage = ({onGetPostClick}) =>{
    return(
    <center className="mt-5"><h5>There are no Post's</h5>
    <button type="button" onClick={onGetPostClick} className="btn btn-primary">Get Post from Server</button>
    </center>
        
    )
}

export default WelcomeMessage;