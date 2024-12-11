import React from 'react'

const FooterHeader = () => {
  return (
    <div>
        <div className="footer-header">
            <div className="list1">
                <ul>
                    <li>
                    <video src="assets/images/home.mp4" autoPlay muted loop></video>
                    <a href="/">Home</a></li>
                    <li>
                    <video src="assets/images/breakfast.mp4" autoPlay muted loop></video>
                    <a href="/">Breakfast</a></li>
                    <li className='middle-list'>
                    <video src="assets/images/treadmill.mp4" autoPlay muted loop></video>
                    <a href="/">Exercise</a></li>
                    <li>
                    <video src="assets/images/yoga.mp4" autoPlay muted loop></video>
                    <a href="/">Meditation</a></li>
                    <li>
                    <video src="assets/images/user.mp4" autoPlay muted loop></video>
                    <a href="/">Account</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default FooterHeader;