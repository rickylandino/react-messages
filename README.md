# @rickylandino/react-messages

React Messages are customizable and lightweight messages for use with React. 

This package currently just supports toast messages, but more interactive messages, dialogs, etc. will be added.

## Installation
```npm
npm install @rickylandino/react-messages
```

## Usage

```javascript
import { toast } from '@rickylandino/react-messages'

//returns a success message from a string
toast.success("Success Message");

//returns a success message from an HTML element, with a 5 second timeout
toast.info(<p>Info Message</p>, { duration: 5 });

//returns a warning message from a string
toast.warning("Warning Message");

//returns an error message from an HTML element, with no timeout, in the top left corner of the screen
toast.error(<p>Error Message</p>, { alignment: 'top-left', duration: 0 });

```

## API

This component provides some static methods with usage and arguments below

```javascript
message.success(toastContent, options)
message.error(toastContent, options)
message.info(toastContent, options)
message.warning(toastContent, options)
message.loading(toastContent, options)
message.custom(messageContent, options)
```

###### Arguments

| Argument  | Description | Type | Default |
| ------------- | ----------------------- | ------------- | ----- |
| toastContent  | The content of the message  | HTMLElement \| string | \- |
| options | Options to allow for customization. Currently only supports alignment. | options | defaultOptions |

The options object accepts the following properties
```javascript
{
    alignment,
    duration
    background,
    textColor,
    icon,
    iconColor
}
```
Note: background, textColor, icon, and iconColor will only display with the message.custom() method. Otherwise, it will use predefined icons and colors.

###### Default options
```javascript
{
    alignment: 'top-center',
    duration: 3,
    background: '#fff',
    textColor: '#000',
    icon: 'fas fa-bell',
    iconColor: '#fff'
}
```

###### Object attributes
| Argument  | Description | Type |
| ------------- | ----------------------- | ------------- |
| alignment  | The placement of the toast message. Options are as follows: <br /> 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-left'  | string |
| background  | The background color used for the toast message. Accepts Hex colors.  | string |
| textColor  | The text color used for the toast message. Accepts Hex colors.  | string |
| icon  | Font awesome icon associated to the toast message. Any free icons they provide will work with this.  | string |
| iconColor  | The icon color used for the toast message, if you want it different from the text color. Accepts Hex colors.  | string |

## License
[MIT](https://choosealicense.com/licenses/mit/)
