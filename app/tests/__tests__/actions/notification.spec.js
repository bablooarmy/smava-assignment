import {SHOW_NOTIFICATION, REMOVE_NOTIFICATION, pushNotification,removeNotification} from './../../../actions/notification'
describe('>>>A C T I O N --- Test notification',()=>{
    it('+++ actionCreator pushNotification', () => {
        let messageToShow = "congrats submitted successfully";
        const show = pushNotification(messageToShow);
        expect(show).toEqual({type:SHOW_NOTIFICATION, message:messageToShow})
    });
    it('+++ actionCreator removeNotification', () => {
        const hide = removeNotification()
        expect(hide).toEqual({type:REMOVE_NOTIFICATION})
    });
});
