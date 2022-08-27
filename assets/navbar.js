function navbar(){
    return `<nav>
    <div class="navbar">
      <i class='bx bx-menu'></i>
      <div class="logo"><a href="#">Ayoa</a></div>
      <div class="nav-links">
        <div class="sidebar-logo">
          <span class="logo-name">Ayoa</span>
          <i class='bx bx-x' ></i>
        </div>
        <ul class="links">
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">Products</a>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="htmlCss-sub-menu sub-menu">
              <li><a href="#">Ayoa Mind Map</a></li>
              <li><a href="#">Ayoa Task</a></li>
              <li><a href="#">Ayoa Ultimate</a></li>
            </ul>
          </li>
          <li><a href="#">Inclusivity</a></li>
          <li>
            <a href="#">Resources</a>
            <i class='bx bxs-chevron-down htmlcss-arrow arrow  '></i>
            <ul class="htmlCss-sub-menu sub-menu">
              <li><a href="#">Ayoa Blog</a></li>
              <li><a href="#">Press & Articles</a></li>
              <li><a href="#">Keynote Speaker</a></li>
              <li><a href="#">Help Center</a></li>
            </ul>
          </li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div class="login">
        <a href="">Login</a>
      </div>
    </div>
  </nav>`
}
export default navbar; 