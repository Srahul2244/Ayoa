function navbar(){
    return `<nav>
    <div>
      <label class="logo">Ayoa</label>
    </div>
    <div>
      <ul>
          <li><a class="active" href="#">Home</a></li>
          <li>
            <a href="#"
              >Products
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li><a href="./MindMap.html">--Ayoa Mind Map</a></li>
              <li><a href="#">--Ayoa Task</a></li>
              <li><a href="#">--Ayoa Ultimate</a></li>
            </ul>
          </li>
          <li><a href="#">Inclusivity</a></li>
          <li>
            <a href="#"
              >Resources
              <i class="fas fa-caret-down"></i>
            </a>
            <ul>
              <li><a href="./Blog.html">--Ayoa Blog</a></li>
              <li><a href="#">--Press & Articles</a></li>
              <li><a href="#">--Keynote Speakers</a></li>
              <li><a href="#">--Help Center</a></li>
            </ul>
          </li>
          <li><a href="#">Pricing</a></li>
          <li><a href="./login.html">Log in</a></li>
        </ul>
    </div>

  </nav>`
}
export default navbar; 