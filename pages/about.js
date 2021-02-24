import styles from '../styles/Home.module.css'

/* About me page */
export default function About() {
    return (
        <div>
            
            <div className={styles.card} >
            <div>
                    <h2>Work</h2>
                    <br/>
                    <h3>Fullstack Developer</h3>
                    <p>Reykavik Academy of Web Development, 2020.11-present</p>
                    <hr></hr>
                    <br/>
                </div>
                <div>
                    <h3>Fullstack Developer</h3>
                    <p>Obtrax Femtech, 2020.7-2020.10</p>
                    <hr></hr>
                    <br/> 
                </div>
                <div>
                    <h2>Education</h2>
                    <br/>
                    <h3>Frontend Developer, Diploma,</h3>
                    <p>Hyper Island, 2019.8-2021.4</p>
                    <hr></hr>
                    <br/>
                </div>
                <div>
                    <h3>Computational Linguistics, Master of Engineering</h3>
                    <p>University of Peking, 2010-2013</p>
                    <hr></hr>
                    <br/> 
                </div>
                
            </div>
            <div className={styles.card}>
                <h2>Contact Me</h2>
                <h3>Email</h3>
                <a href = "mailto: wei.lu@hyperisland.se"><p>wei.lu@hyperisland.se</p></a>
            </div>
        
        </div>
    )
}