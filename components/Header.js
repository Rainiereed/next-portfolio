import Link from 'next/link'
import styles from '../styles/Home.module.css'


function Header() {
    return (
        <div>
            <div>{/* navigation */}
                <ul>
                    <li>
                        <h2>
                            <Link href="/">
                            <a>Projects</a>
                            </Link>
                        </h2>
                    </li>
                    <li>
                        <h2>
                            <Link href="/about">
                            <a>About me</a>
                            </Link>
                        </h2>
                    </li>
                </ul>
            </div>
            <h1 className={styles.title}>My portfolio</h1>
            <p className={styles.description}>
                Hi! My name is Wei Lu, I am a passionate web developer! I love to draw, write and to do anything creative like coding!
            </p>
            

        </div>

    )
}

export default Header