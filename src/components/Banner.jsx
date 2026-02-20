import video2 from '../assets/video2.mp4'

function Banner() {
  return (
        <section>
        <video src={video2} autoPlay loop muted playsInline className="w-full" playbackRate="2.0"></video>
      </section>
  )
}

export default Banner