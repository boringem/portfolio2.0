import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../styles/Button.module.css';

function Button(props) {
    const router = useRouter()
    var linkDest = props.dest
    if (props.isLink === 'true') {
        return (
            <a href={linkDest} target="_blank" rel="noopener noreferrer">
                <button className={`${props.color} ${styles["m-button"]} mr-5`}>{props.text}</button>
            </a>
        )
    } else {
        return (
            <button type="button" className={`${props.color} ${styles["m-button"]} mr-5`} onClick={() => router.push(linkDest)}>{props.text}</button>
        )
    }
}

export default Button