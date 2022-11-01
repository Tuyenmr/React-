function Header(){
    return(
        <div className="heading"> 
          <h1>Our Reviews</h1>
          <div className="line">
          </div>
        </div>
    )
}
function ReviewsCard(){
    return (
        <div className="reviewscard">
            <div className="author">
                <div className="avatar">
                  <img src="https://fauto.vn/wp-content/uploads/2022/08/anh-sexy-8.jpg" alt="" />
                  <div className="phay">
                  <i class="bi bi-info-circle"></i>
                  </div>
                </div>
                <div className="info">
                 <h2>Mr Tuyen</h2>
                 <h2>Web Development</h2>
                </div>
            </div>
            <div className="content">
             <p>React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.</p>

            </div>
            <div className="control">
            <i class="bi bi-arrow-left-circle-fill"></i>
            <i class="bi bi-arrow-right-circle-fill"></i>
            </div>
        </div>
    )
}

function App(){
    return (
        <div className="appcontent">
            <Header/>
            <ReviewsCard/>
        </div>
    )
}
const root=ReactDOM.createRoot(document.querySelector("#app"))
root.render(App())
