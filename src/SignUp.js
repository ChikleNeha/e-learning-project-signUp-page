import React from "react";

export default function SignUp() {
  return (
    <div className="form">
      <img src="https://64.media.tumblr.com/fbeeafd50df0d7a2360486f48c69e317/4cdfc594aa5e8f5e-dd/s540x810/6b30f6c7f1f37041cfa19340190d6456e0c563bd.jpg" width="430px" />
      <div className="form--inside--div">
        <p id="p1">We are</p>
        <p id="p2">Invite only rigth now</p>
        <p id="p3">10 million+ people have joined our network.</p>
        <p id="p4">We invite you to join the tribe.</p>
      </div>
      <div className="sign--up--div">
        <h1>Sign Up</h1>
        <p id="input--heading">Email address</p>
        <input className="inputs" type="email" placeholder="Enter your email"/>
        <p id="input--heading">Set password</p>
        <input className="inputs" type="Password" placeholder="Enter your password"/> <br/>
        <div className="checkbox--div"><input id="checkbox" type="checkbox"/> 
        <p>Show Password</p></div>
        <button className="sign--up--button">Sign Up</button>
        <div className="the--hr--tags"><hr/> or <hr/></div>
        <button className="with--google--button">Continue with Google</button>
      </div>
    </div>
  );
}
