import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header>
      <h1 className='title'>
        <span>WebDev</span> News
      </h1>
      <p className={styles.description}>Keep up to date with the latest development news.</p>
      <style jsx>
        {`
          .title {
            color: red;
          }
        `}
      </style>
    </header>
  )
}

export default Header
