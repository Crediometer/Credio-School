import {combineReducers} from 'redux';
import {registerReducer, formReducer, forgetReducer} from './Registration/RegisterReducer';
import {forgetotpReducer, otpReducer} from './Registration/OtpReducer';
import authReducer from './Login/LoginReducer';
import { profileReducer } from './Profile/ProfileReducer';
import { transactionReducer, transactionStudentReducer } from './Transactions/TransactionReducer';
import { schooldetailsReducer, studentsReducer } from './Students/StudentsReducer';
import { profiledataReducer, settingReducer, smsdataReducer, uploadimageReducer } from './Settings/SettingsReducer';
import cardReducer from './Card/CardReducer';
import {depositReducer, keyReducer} from './Deposit/DepositReducer'
import resetpasswordReducer from './Registration/ResetpasswordReducer';
import { paymentReducer } from './Payment/PaymentReducer';
import { addGradeReducer, deleteGradeReducer, gradeReducer, updateGradeReducer } from './Students/Grade/GradeReducer';
import { addGrade } from './Students/Grade/GradeAction';
const rootReducer = combineReducers({
    login: authReducer,
    register: registerReducer,
    otp: otpReducer,
    forgetotp: forgetotpReducer, 
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
    deposit: depositReducer,
    key: keyReducer,
    resetpassword: resetpasswordReducer,
    forget: forgetReducer,
    payment: paymentReducer,
    school: schooldetailsReducer,
    grade: gradeReducer,
    addGrade: addGradeReducer, 
    editGrade: updateGradeReducer,
})

export default rootReducer;