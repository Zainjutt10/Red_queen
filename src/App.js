import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import "./App.css";
 
const App = () => {
  const { ref, getAnimation } = useWebAnimations({
    keyframes:[{ transform: 'translateY(0)' },
              { transform: 'translateY(-100%)' } ],
    timing: {
      easing: 'steps(7, end)',
      direction: "reverse",
      duration: 600,
      playbackRate: 1,
      iterations: Infinity
    }
  });
  const reftree=useWebAnimations({
    keyframes:[{ transform: 'translateX(1000px)' },
    { transform: 'translateX(-1000px)' } ],
      timing: {
      duration: 4000,
      playbackRate: 0,
      iterations: Infinity
      }
  })
  const refgrass=useWebAnimations({
    keyframes:[{ transform: 'translateX(1000px)' },
    { transform: 'translateX(-1000px)' } ],
      timing: {
      duration: 2000,
      playbackRate: 0,
      iterations: Infinity
      }
  })
  const refchess=useWebAnimations({
    keyframes:[{ transform: 'translateX(1000px)' },
    { transform: 'translateX(-1500px)' } ],
      timing: {
      duration: 5000,
      playbackRate: 0,
      iterations: Infinity
      }
  })
  const refpawn=useWebAnimations({
    keyframes:[{ transform: 'translateX(1000px)' },
    { transform: 'translateX(-1000px)' } ],
      timing: {
      duration: 5000,
      playbackRate: 0,
      iterations: Infinity
      }
  })
  const refright=useWebAnimations({
    keyframes:[{ transform: 'translateX(1000px)' },
    { transform: 'translateX(-1500px)' } ],
      timing: {
      duration: 4000,
      playbackRate: 0,
      iterations: Infinity
      }
  })
  const refbacktree=useWebAnimations({
    keyframes:[{ transform: 'translateX(1000px)' },
    { transform: 'translateX(-1000px)' } ],
      timing: {
      duration: 6500,
      playbackRate: 0,
      iterations: Infinity
      }
  })
  
  const replay = () => {
    getAnimation().playbackRate*=2;
    console.log("clicked");
    speedup();
  };
  function speedup()
  {
    console.log("called");
    reftree.getAnimation().playbackRate+=1.5;
    refchess.getAnimation().playbackRate+=1.5;
    refright.getAnimation().playbackRate+=1.5;
    refpawn.getAnimation().playbackRate+=1.5;
    refbacktree.getAnimation().playbackRate+=1.5;
  }
  return (
    <div className="wrapper">
  <div className="sky"></div>
  <div className="earth">
    <div id="red-queen_and_alice" onClick={replay}>
      <img id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place."
      ref={ref} 
      />
    </div>
  </div>

  <div className="scenery" id="foreground1">
    <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" "
    ref={reftree.ref}
    />
  </div>
  <div className="scenery" id="foreground2">    
    <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " 
    ref={refgrass.ref}
    />
    <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" "
    ref={refchess.ref}
    />
  </div>
  <div className="scenery" id="background1">
    <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " 
    ref={refpawn.ref}
    />
    <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " 
    ref={refright.ref}
    />
    <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " 
    ref={refbacktree.ref}
    />
  </div>
  {/* <div className="scenery" id="background2">
    <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" "
    
    />

    <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
    <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
  </div> */}
</div>
  );
};

export default App;