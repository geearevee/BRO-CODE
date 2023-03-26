import './App.css';
function Home (){
    return (
<div>
<div className="banner">
        <div className="navbar">
<img src="./images/5039684.jpg" className="App-logo" alt="logo" />
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Flight-Booking</a></li>
                <li><a href="#">Extras</a></li>
            </ul>
            

        </div>
        <div className="content">
          <h1>BRO - CODE</h1>
          <p>ONE STOP SOLUTION FOR EVERYTHING</p>
          <div>
            <a href="google.com">
                <button type="button"><span></span>LOGIN</button>
            </a>
          </div>
        </div>
        <div className = "footer">
            <ul>
                <li><a href="facebook.com"><i className="fa-brands fa-facebook"></i></a></li>
                <li><a href="instagram.com"><i className="fa-brands fa-instagram"></i></a></li>
                <li><a href="linkedin.com"><i className="fa-brands fa-linkedin"></i></a></li>
            </ul>
        </div>  
    </div>
    

</div>
)}

export default Home;