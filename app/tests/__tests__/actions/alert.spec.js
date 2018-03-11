import {SHOW_ALERT, HIDE_ALERT, showAlert,hideAlert} from './../../../actions/alert'
describe('>>>A C T I O N --- Test alert',()=>{
    it('+++ actionCreator showAlert', () => {
        let messageToShow = "congrats submitted successfully";
        const show = showAlert(messageToShow);
        expect(show).toEqual({type:SHOW_ALERT, message:messageToShow})
    });
    it('+++ actionCreator hideAlert', () => {
        const hide = hideAlert()
        expect(hide).toEqual({type:HIDE_ALERT})
    });
});
