import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal () {
    const { level, closeLevelUpModal } = useContext(ChallengesContext)
    return (
        <div className={styles.overlay}>
            <div className={styles.levelUpModalContainer}>
                <header>{level}</header>

                <strong>Parabens</strong>
                <p>Voce alcancou um novo nivel</p>

                <button type="button" onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="Fechar" />
                </button>
            </div>
        </div>
    )
}