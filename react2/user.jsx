const User=(user)=>{
if(user){
    return (
        <div>
            <Hello name={user.name}></Hello>
            <button>thoat</button>
        </div>
    )
}
 
    return (
        <div>
            <div>dang nhap </div>
            <div>dang ki</div>
        </div>
    )
}
User.propTypes={
    user:PropTypes.exact(
        {
            name:PropTypes.string,
            isAdmin : PropTypes.bool
        }
    )
}
User.defaultProps={
    user:''
}
