# Cài thư viện jsx
npm i clsx

```jsx
import clsx from 'clsx'
import styles from './Button.module.css'

function Button() {
    return (
        <>
            <button className={styles.btn}>
                Click me!
            </button>
            <button className={clsx(styles.btn, styles.active)}>
                Click me!
            </button>
        </>
    )
}

export default Button
```

### Cách truyền className={} -> props className={} nhận kiểu dữ liệu string
1. className={`${styles.btn} ${styles.active}`}
2. className={[styles.btn, styles.active].join(' ')}
3. className={clsx(styles.btn, styles.active)} -> Sử dụng thư viện clsx

### Cách truyền props
# Truyền props 'primary'
```jsx
import Button from "./components/Button";
import GlobalStyles from "./components/GlobalStyles"

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: '32px'}}>
        <Button />
        <Button primary /> 
      </div>
    </GlobalStyles>
    
  );
}

export default App;

```

# Nhận props 'primary'

```jsx
import clsx from 'clsx'
import styles from './Button.module.css'

function Button({ primary }) {
    const classes = clsx(styles.btn, {
        [styles.primary]: primary,
        'd-flex': true
    })
    return (
        <button className={classes}>
            Click me!
        </button>
    )
}

export default Button
```

