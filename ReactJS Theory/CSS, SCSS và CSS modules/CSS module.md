### App.js
``` jsx
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import GlobalStyles from './components/GlobalStyles';

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: '0 32px'}}>
        <Heading />
        <Paragraph />
      </div>
    </GlobalStyles>
    
  );
}

export default App;
```

### Tạo tên file CSS module: Paragraph.module.css, Heading.module.css...


### Cách viết class kiểu camleCase cho CSS module: Ví dụ headingShop, paragraphContent...

### Cách import CSS module

``` jsx
import styles from './Paragraph.module.css'

function Paragraph() {
    return (
        <p className={styles.paragraph}>
            Waiting for update...
        </p>
    )
}

export default Paragraph

```

### Tạo file global CSS

``` jsx
import './GlobalStyles.css'

function GlobalStyles({ children }) {
    return children
}

export default GlobalStyles
```

