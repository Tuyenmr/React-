const Hello =({name})=>{
    return <h1> Hello {name}</h1>
}
Hello.propTypes={
    name:PropTypes.string
  }
Hello.defaultProps={
    name:'tuyen',
  }
