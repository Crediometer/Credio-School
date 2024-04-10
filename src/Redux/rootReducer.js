import {combineReducers} from 'redux';
import {registerReducer, formReducer} from './Registration/RegisterReducer';
import otpReducer from './Registration/OtpReducer';
import authReducer from './Login/LoginReducer';
import { profileReducer } from './Profile/ProfileReducer';
import { transactionReducer, transactionStudentReducer } from './Transactions/TransactionReducer';
import { studentsReducer } from './Students/StudentsReducer';
import { profiledataReducer, settingReducer, smsdataReducer, uploadimageReducer } from './Settings/SettingsReducer';
import cardReducer from './Card/CardReducer';
const rootReducer = combineReducers({
    login: authReducer,
    register: registerReducer,
    otp: otpReducer,
    form: formReducer,
    profile: profileReducer,
    transaction: transactionReducer,
    student: studentsReducer,
    studentTransaction: transactionStudentReducer,
    uploadimage: uploadimageReducer,
    profiledata: profiledataReducer,
    sms: smsdataReducer,
    notification: settingReducer,
    card: cardReducer,
})

export default rootReducer;