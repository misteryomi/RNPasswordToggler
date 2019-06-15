# React Native Password Toggler

A Simple password toggler (Hide/Show) component for React Native's TextInput field

This component allows you Toggle the password fields for your React Native forms.

## Installation

Install via NPM


```bash
npm install react-native-password-toggler --save
```

## Usage

```python
import RNPasswordToggler from 'react-native-password-toggler';
 
export default class App extends Component {

  state = {
      password: '',
      show: false, //optional
  }
  render() {
    return (
        <RNPasswordToggler 
                onChangeText={(value) => this.setState({password: value})}
                show={this.state.show} 
            />
    )
  }
}

```

## Props

| Command | Description |
| --- | --- |
| `show` | Show or hide text input (Default: *false*) |
| `iconStyle` | Custom style (Example: *{color: 'red'}*) |

You can use default React Native's [TextInput props](https://facebook.github.io/react-native/docs/view#props) also.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[GPL](https://www.gnu.org/licenses/gpl-3.0.en.html)