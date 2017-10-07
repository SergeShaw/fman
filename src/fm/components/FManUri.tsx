import * as React from 'react';

import TextField from 'material-ui/TextField';

interface FManUriProps {
  uri: string;
  goToFolder: Function;
}

export default class FManUri extends React.Component<FManUriProps, {}> {
  private _uriInput: HTMLInputElement | null;

  componentWillReceiveProps(nextProps: FManUriProps) {
    if (this._uriInput) {
      this._uriInput.value = nextProps.uri;
    }
  }

  render() {
    const {uri, goToFolder, } = this.props;
    return (
      <div>
        <TextField
          fullWidth={true}
          id="uri"
          margin="normal"
          defaultValue={uri}
          type="text"
          inputRef={(input: any) => this._uriInput = input}
          onKeyPress={(event: any) => {
            if (event.key === 'Enter' && this._uriInput) {
              goToFolder(this._uriInput.value);
            }
          }}
        />
      </div>
    );
  }
}
