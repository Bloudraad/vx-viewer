const e=["#FDFFB6","#FFD6A5","#FFADAD","#FFC6FF","#BDB2FF","#A0C4FF","#9BF6FF","#99E1DC","#8EEDD6","#A6ECA8","#CAFFBF","#D9ED92"],n=window.location.hash?window.location.hash.replace("#",""):"6",o=parseInt(n);document.querySelector("body").style.backgroundColor=e[o%e.length],document.querySelector("#viewer").innerHTML=`\n    <model-viewer\n      style="width: 100vw; height: 100vh"\n      src="./test_models/${n}.gltf"\n      camera-controls\n      orientation="0deg 0deg 210deg"\n      shadow-intensity="1"\n    />`,document.querySelector("#viewer model-viewer").addEventListener("load",(()=>{document.querySelector("#loader").style.display="none"}));
//# sourceMappingURL=index.b82c8937.js.map
