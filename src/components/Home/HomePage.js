import videoHomepage from "../../assets/video-homepage.mp4";
const HomePage = (Props) => {
    return (
        <div className="homepage-container">
            <video src={videoHomepage} autoPlay loop muted >
            </video>
            <div className="homepage-content">
                <div className="title-1">There 's a better way to ask</div>
                <div className="title-2"> Get answers to your technical questions from our community of developers. And share your knowledge to help others. Everyone is welcome.</div>
                <div>
                    <button className="btn btn-dark">Get started for free</button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;