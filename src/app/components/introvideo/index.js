export default function IntroVideo (){
    return (
        <video width={600} height={400} controls autoPlay muted preload="auto">
            <source src="/videos/introvideo.mp4" type="video/mp4"></source>
            Your browser does not support the video tag.
        </video>
    );
}