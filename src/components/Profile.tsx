import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/matheuscl.png" alt="@matheuscl" />
            <div>
                <strong>Matheus Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="Level Image" />
                    Level 1
                </p>
            </div>
        </div>
    )
}
