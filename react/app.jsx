
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
function Hello({user}){
  return <h1>{user.name},{user.age} dep trai</h1>
}
function App(){
  let user1={
    name:"tuyenok",
    age:22,
  }
  return <div>
    <Hello user={user1}/>
    <Time/>
    <Time/>
    <Time/>
    <Time/>
    <Time/>
  </div>
}

const root=ReactDOM.createRoot(document.querySelector("#app"))
root.render(App())
