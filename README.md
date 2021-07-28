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
toast.info(<p>Info Message</p>, 5);

//returns a success message from a string
toast.warning("Warning Message");

//returns a success message from an HTML element, with no timeout, in the top left corner of the screen
toast.error(<p>Error Message</p>, 0, { alignment: 'top-left' });

```

## API

This component provides some static methods with usage and arguments below

```javascript
message.success(toastContent, duration?, options)
message.error(toastContent, duration?, options)
message.info(toastContent, duration?, options)
message.warning(toastContent, duration?, options)
message.custom(messageContent, duration?, options)
```

###### Arguments

| Argument  | Description | Type | Default |
| ------------- | ----------------------- | ------------- | ----- |
| toastContent  | The content of the message  | HTMLElement \| string | \- |
| duration  | How long to display the toast message (in seconds). Set to 0 if you do not want it to auto dismiss.  | number | 3 |
| options | Options to allow for customization. Currently only supports alignment. | options | defaultOptions |

The options object accepts the following properties
```javascript
{
    alignment,
    background,
    textColor,
    icon,
    iconColor
}
```
###### Default options
```javascript
{
    alignment: 'top-center',
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

## License
[MIT](https://choosealicense.com/licenses/mit/)
