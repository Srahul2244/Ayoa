function navbar(){
    return `<header>
    <div class="container">
        <input type="checkbox" name="" id="check">
        
        <div class="logo-container">
            <img class="logo" src="https://www.ayoa.com/wp-content/themes/droptaskreload/navigation/images/ayoa_bluenavlogo.svg" alt="">
        </div>

        <div class="nav-btn">
            <div class="nav-links">
                <ul>
                    <li class="nav-link" style="--i: .6s">
                        <a href="#">Home</a>
                    </li>
                    <li class="nav-link" style="--i: .85s">
                        <a href="#">Products<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link">
                                    <a href="#">Ayoa Mind Map</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="#">Ayoa Task</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="#">Ayoa Ultimate</i></a>
                                </li>
                                <div class="arrow"></div>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link" style="--i: 1.35s">
                        <a href="#">Inclusivity</a>
                    </li>
                    <li class="nav-link" style="--i: 1.1s">
                        <a href="#">Resources<i class="fas fa-caret-down"></i></a>
                        <div class="dropdown">
                            <ul>
                                <li class="dropdown-link">
                                    <a href="#">Ayoa Blog</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="#">Press & Articles</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="#">Keynote Speaker</a>
                                </li>
                                <li class="dropdown-link">
                                    <a href="#">Help Center</a>
                                </li>
                                <div class="arrow"></div>
                            </ul>
                        </div>
                    </li>
                    <li class="nav-link" style="--i: 1.35s">
                        <a href="#">Pricing</a>
                    </li>
                </ul>
            </div>

            <div class="log-sign" style="--i: 1.8s">
                <a href="#" class="btn transparent">Log in</a>
            </div>
        </div>

        <div class="hamburger-menu-container">
            <div class="hamburger-menu">
                <div></div>
            </div>
        </div>
    </div>
</header>
<main>
    <section>
        <div class="overlay"></div>
    </section>
</main>`
}
export default navbar; 