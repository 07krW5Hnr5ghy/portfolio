import photo from '../assets/profile.png';

const Home = () => {
    return(
        <div id="Home_container">
            <h1>Juan Pablo Romero</h1>
            <img src={photo} alt="" width={100} height={120}/>
            <h3>Fullstack Developer</h3>
        </div>
    );
};

export default Home;