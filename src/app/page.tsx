import React from "react";
import { Player } from "video-react";

import Header from "@/component/Header";
import Footer from "@/component/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      
      <div>
          <figure>
              <img src="../../public/images/bg_logo.png" alt="Ovum" />
          </figure>

          <div className="button">
              <a href="../../public/game/Ovum.zip" download="Ovum">Download</a>
              <img src="../../public/images/download.png" alt="download" />
          </div>
      </div>

      <article>
          <div>
              <figure>
                <img src="../../public/images/infographic.png" alt="Game" />
              </figure>

              <div>
                  <h1>About The Game</h1>

                  <h3>Save an egg and be a hero!</h3>

                  <p>We don’t know where it came from, but the owner of the nest is not amused of its' sudden arrival
                      thus pushes it out. You are the only one that can save it and find out what lies inside!</p>
              </div>
          </div>
      </article>

      <article>
          <div>
              <div>
                  <h1>Gameplay</h1>

                  <h3>Path a way through the three levels!</h3>

                  <p> Add different elements and create a safe path. Protect the egg and pay attention on its health! After three cracks it’s game over!</p>
              </div>
              
              {/* <Player>
                  <source src="../../public/video/game_video.mp4" type="video/mp4" />
              </Player> */}
          </div>
      </article>

      <article>
          <div>
              <div>
                  <h1>Updates Soon To Come!</h1>

                  <h3>SAVE EVEN MORE EGGS!</h3>
              </div>
          </div>
      </article>

      <Footer></Footer>
    </div>
  );
}

export default Home;