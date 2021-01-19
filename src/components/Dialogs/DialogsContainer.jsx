import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/withAuthRedirect";
import { sendMessageBody } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogPage: state.dialogPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageBody(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);;