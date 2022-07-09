import {Main} from '../../pages';
import {PromoInfoType} from '../../types/common';

type AppProps = {
  promoInfo: PromoInfoType
}

function App({promoInfo}: AppProps): JSX.Element {
  return (
    <Main promoInfo={promoInfo} />
  );
}

export default App;
