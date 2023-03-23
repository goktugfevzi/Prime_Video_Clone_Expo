import { showMessage } from "react-native-flash-message";

export default function Notification(message, description, type) {
  showMessage({
    message: message,
    description: description,
    type: type
  });
}