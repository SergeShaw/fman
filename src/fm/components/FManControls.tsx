import * as React from 'react';
import { Location } from 'history';

import Button from 'material-ui/Button';

interface FManControlsProps {
  goBack: Function;
  goUp: Function;
  uri: Location;
}

const FManControls: React.SFC<FManControlsProps> = (props) => {
  return (
    <div>
      <Button
        onClick={() => props.goUp()}
        disabled={props.uri.pathname === '/'}
      >
        На уровень вверх
      </Button>
      <Button
        onClick={() => props.goBack()}
      >
        Назад
      </Button>
    </div>
  );
};

export default FManControls;
