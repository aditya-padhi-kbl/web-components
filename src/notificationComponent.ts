import { customElement, html, LitElement, property } from "lit-element";

@customElement('notification-component')
class NotificationComponent extends LitElement {
    @property({type: String})
    notification: string =  '';

    render() {
        return html `<h4>${this.notification}</h4>`
    }
}

export default NotificationComponent;