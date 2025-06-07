import styles from "./Container.module.css"

type ContainerProps = {
    children: React.ReactNode
}

export function Container({children}: ContainerProps) {
    return (
        <div className={styles.contain}>
            <div className={styles.content}>{children}</div>
        </div>
    )
}