
// let myName="Tuyen"
// let isdeptrai=true

// function createApp(){
//   const now=new Date();
//   return (
//     <div className="tuyen">
//         <h1 className="heading">{myName} ok</h1>
//         <p>bay gio la {now.toLocaleTimeString()}</p>
//         {isdeptrai && <div>
//                  tuyen dep trai
//           </div>}
//         <img src="https://image-us.24h.com.vn/upload/2-2021/images/2021-05-22/anh-8-1621645023-458-width650height813.jpg" alt="" />
//         <p>{myName} dep trai vl</p>
//       </div>
    
//   )
// }
// const root = ReactDOM.createRoot(document.querySelector("#app"));
// setInterval(()=>{
//   root.render(createApp());
// },1000)
function Time(){
const now=new Date();
return <p> it {now.toLocaleDateString()}</p>
}
function Hello(props){
  return <h1>{props.name} {props.children} dep trai</h1>
}

Hello.propTypes={
  name:PropTypes.string
}
Hello.defaultProps={
  name:'tuyen dai ca',
  children: PropTypes.node
}

function Avatar({src,alt}){
  return <img src={src}  alt={alt}/>
}
Avatar.propTypes={
  name:PropTypes.string
}
function App(){
  let user1={
    name:"tuyen",
    age:22,
  }
  let avatar={
    alt:'anh dep',
    src:"https://1.bp.blogspot.com/-SUmRDH1qTIo/X_9o3AbFW0I/AAAAAAAAWRI/LhZEhj0OnKwopj-F7qJmjG580qsb1ZfsgCLcBGAsYHQ/s0/hayvnnet-cuc-pham-gai-xinh-tuyen-chon-t1-2021%2B%25282%2529.jpg"
  }
  return <div>
    <Avatar {...avatar}></Avatar>
    <Hello {...user1}>
      {[<span>abc</span>,<p>hehe</p>]}
    </Hello>
    <Hello name='tuyen'></Hello>
    <Hello></Hello>
    <Time/>
    <Time/>
    <Time/>
    <Time/>
    <Time/>
  </div>
}




const root=ReactDOM.createRoot(document.querySelector("#app"))
root.render(App())
