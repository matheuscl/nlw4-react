import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheuscl.png" alt="@matheuscl" />
            <div>
                <strong>Matheus Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Image" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}
