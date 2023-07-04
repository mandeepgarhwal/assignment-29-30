import './app.css';


var pincode = 12001
var name = "mandeep garhwal"
var details = {name:"Sachin", job:"Developer", country:"Dubai"}
var array = ["React", "Angular", "Vue.js"]
const time =  new Date()

var newjsx = <>
<h1>My name is lakhan</h1>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae, est! Exercitationem adipisci quis dolor facilis porro cumque blanditiis voluptatem deleniti eius minus vel cupiditate iusto eveniet voluptas, qui, voluptates dolores?</p>
<ul>
    <li>  tea</li>
    <li>coffee</li>
    <li>cold drink</li>
</ul>


</>
const isExistingCLient = false;
var style1 = {color: "red"}

var active = <>  <h1>isACtive is positive</h1></>
var inactive = <>  <h1>isACtive is negative</h1></>
var isACtive = false

export default function App(){
    return (
    <>
    <h2>this is my first self made react app</h2>
    {pincode}
    <br />
    {name}
    <h2>Name : {details.name}, job : {details.job}, country : {details.country}</h2>
    <br />
    <h2>{array[0]}, {array[1]}, {array[2]} </h2>
    <br />
    {time.toLocaleTimeString()}
    <br />
    <br />
    <img src="https://source.unsplash.com/random/1920x1080/?wallpaper,landscape" />
    <br />
    <br />
    <br />
    <img src="./image.jpg" style={{width : "500px", height : "500px"}} />

    <br />
    {10*2-10/5}

    <br />
    <br />
    <br />
    {newjsx}
    <h1 style={style1}>this is example of internal styling</h1>
    <br />
    <br />
    <h1 id='extstyle'>this is example of external styling</h1>
    <br />
    <br />
    <h1 style={{color: "green"}}>this is example of styling using style attribute</h1>
    <br />
    <br />
    <h1>Below given is example for conditional rendering</h1>
    <br />
    <br />
    {isExistingCLient ? (
        <>
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
        </>
      ) : (
        <>
          <h1> Hi!, condition is negative </h1>
          <h3> Welcome to my first app </h3>
        </>
      )}


    
    
    




    
    
    
    
    
    
    </>)

}