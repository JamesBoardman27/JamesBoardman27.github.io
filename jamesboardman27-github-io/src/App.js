import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <h1>Hi, my name is James.</h1>
            <p>
              I am a Computer Science student who is in his third and final year of study at The University of Manchester. <br/>
              I am also a software engineer who has undertaken a number of internships during my studies. <br/>
              In 2022, I built an EdTech web application for one of The University of Manchester's programming course modules. <br/>
              In 2023, I worked on cutting-edge autonomous vehicle technology with Five AI and Bosch. <br/>
              To find out more about my experience and education, click the right arrow button!
            </p>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Second slide"/>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="..." alt="Third slide"/>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
        </div>
      </header>
    </div>
  );
}

export default App;
