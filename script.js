body {
    font-family: 'Montserrat', sans-serif;
    color: white;
    background-color: #cac376;
}

/* BACK TO TOP BUTTON */
#btt {
    position: fixed;
    margin-bottom: 20px;
    margin-right: 20px;
    bottom: 0;
    right: 0;
    opacity: 0.8;
    width: 50px;
    transition: margin-bottom 0.6s, opacity 0.6s;
}

#btt:hover {
    margin-bottom: 25px;
    opacity: 1;
}

/* WELCOME */
#welcome {
    color: #045353;
    background: url("./images/skyview.jpg") no-repeat center center/cover;
    height: 100vh;
    text-align: center;
}

#welcome h1,
#portfolio h1 {
    font-size: 4.375rem;
    font-weight: bold;
}

#welcome h3,
#portfolio h3 {
    font-size: 1.75rem;
}

/* DOWN ARROW */
#press {
    width: 60px;
    border: solid 4px white;
    border-radius: 40px;
    margin-top: 20%;
    transition: background-color 0.6s, opacity 0.6s, margin-top 1s;
}

#press:hover {
    background-color: #5BC2B4;
    opacity: 0.8;
    margin-top: 21%;
}

/* ABOUT */
#about {
    background-color: #0A3739;
    padding: 5%;
    height: 100vh;
}

#about h1 {
    font-size: 2.5rem;
    font-weight: bold;
    text-align: left;
}

#about p {
    text-align: left;
}

#email,
#portScroll {
    display: inline-block;
    background-color: #26816E;
    padding: 2%;
    border-radius: 40px;
    transition: box-shadow 0.5s, color 0.8s, background-color 0.5s;
    cursor: pointer;
}

#email img,
#portScroll img {
    width: 25px;
    vertical-align: middle;
    margin-right: 5px;
}

#email:hover,
#portScroll:hover {
    box-shadow: 5px 15px 30px #062928;
    background-color: #1A616C;
}

#self img {
    width: 35%;
    float: right;
    border: solid 8px #26816E;
    border-radius: 50%;
    box-shadow: 5px 15px 30px #062928;
}

/* PORTFOLIO */
#portfolio {
    background-color: #68BDCA;
    color: white;
    padding: 5%;
    height: 100vh;
}

#portfolio h3 {
    font-size: 1rem;
}

#port img {
    width: 100%;
    max-width: 500px;
    opacity: 0.5;
    transition: opacity 0.5s, box-shadow 0.5s;
}

#port img:hover {
    opacity: 1;
    box-shadow: 0px 10px 50px #406D91;
}

/* NAV */
#openmenu {
    font-size: 1.25rem;
    background-color: #68BDCA;
    border-bottom: solid 2px white;
    border-right: solid 2px white;
    position: fixed;
    padding: 2px;
    width: 10%;
    text-align: center;
    top: 0;
    left: 0;
    transition: width 0.5s;
}

#openmenu:hover {
    width: 15%;
    cursor: pointer;
}

.overlay {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.9);
    overflow-x: hidden;
    transition: 0.5s;
}

.overlay-content {
    position: relative;
    top: 25%;
    width: 100%;
    text-align: center;
    margin-top: 30px;
}

.overlay a {
    padding: 8px;
    text-decoration: none;
    font-size: 36px;
    color: #818181;
    display: block;
    transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
    color: #f1f1f1;
}

.closebtn {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 60px;
}

/* Media Query */
@media screen and (max-height: 450px) {
    .overlay a {
        font-size: 20px;
    }
    .closebtn {
        font-size: 40px;
        top: 15px;
        right: 35px;
    }
}
