import Main from '../../pages/main/main';
import {PromoInfoType} from '../../types/types';

type AppProps = {
  promoInfo: PromoInfoType
}

function App({promoInfo}: AppProps): JSX.Element {

  return (
    <Main promoInfo={promoInfo} />
  );
}

export default App;
