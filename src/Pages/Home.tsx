import photo from '../assets/profile.png';

const Home = () => {
    return(
        <div id="Home_container">
            <h1>Juan Pablo Romero</h1>
            <h3>Fullstack Developer</h3>
            <img src={photo} alt="" width={100} height={120}/>
        </div>
    );
};

export default Home;