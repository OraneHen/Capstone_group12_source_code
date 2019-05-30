import fetch from 'cross-fetch';
import { loadStart, loadEnd, loadFailure } from '../components/common/actions/loaders';
//import { registration } from '../reducers/display/registration';

const REGISTRATION = 'REGISTRATION';

export const registerCustomer = (registration, dispatch) => {
    return new promise((resolve) =>{
        dispatch(loadStart(REGISTRATION));
        fetch('http://localhost:8080/customer/insert', {
            method:"POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },        
            body: JSON.stringify({
                customer:{
                    firstName: registration.firstName,
                    lastName: registration.lastName,
                    phoneNumber: registration.phoneNumber,
                    email: registration.email,
                    dob: registration.dob,
                    sex: registration.sex,
                    trn: registration.trn,
                    emergencyPhone: registration.emergencyPhone,
                },
                address:{
                    line1: registration.line1,
                    line2: registration.line2,
                    city: registration.city,
                    parish: registration.parish,
                },
                firearms:[{
                    issueDate: registration.issueDate,
                    originalIssueDate: registration.originalIssueDate,
                    expiryDate: registration.expiryDate,
                    licenseNumber: registration.licenseNumber,
                    make: registration.make,
                    serialNumber: registration.serialNumber,
                    approvedRounds: registration.approvedRounds,
                    carryCondition: registration.carryCondition
                }]
        })
    }).then( res=>{
        if (res.status == 200){
            dispatch(loadEnd(REGISTRATION, res.json()));
            resolve(true);
        }
        else {
            dispatch(loadFailure(REGISTRATION));
            resolve(false);
        }
    }).catch(err => {
        console.error(err);
    });
    });
}