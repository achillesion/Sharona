import { useProgress } from "@react-three/drei"

export default function Preloader(){
    const { progress } = useProgress()

    return(
        <div className="preloader">
            <img src="logo.png"/>
             <h1 className="play-btn" onClick={() => document.querySelector('.preloader').style.display = 'none'}>{progress === 100 ? 'Play' : progress }</h1>
            
        </div>
    )
}