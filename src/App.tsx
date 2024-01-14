import { useEffect, useState } from 'react';

import './App.css';
import CategorisedExcuse from './components/CategorisedExcuse';
import { ExcuseCategory } from './ExcuseCategory';
import BuildYourOwnExcuse from './components/BuildYourOwnExcuse';

const App = () => {
    const [excuseCategories, setExcuseCategories] = useState<ExcuseCategory[]>([]);
    const [whatOptions, setWhatOptions] = useState<string[]>([]);
    const [whereOptions, setWhereOptions] = useState<string[]>([]);

    useEffect(() => {
      fetch('/excuses.json')
        .then((response) => response.json())
        .then((data) => {
            setExcuseCategories(() => data.categories);
            setWhatOptions(() => data.byoe.what);
            setWhereOptions(() => data.byoe.where);
      });
  }, []);

  return (
      <div className="app">
          <h1>Need an excuse?</h1>
          <CategorisedExcuse categories={excuseCategories}/>
          <BuildYourOwnExcuse whatOptions={whatOptions} whereOptions={whereOptions}/>
      </div>
  );
}

export default App;
