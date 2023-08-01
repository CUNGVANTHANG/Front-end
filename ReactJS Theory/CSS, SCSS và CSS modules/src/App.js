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

// Development: npm start / yarn start -> CSS internal
// Production: npm run build / yarn build -> CSS external
