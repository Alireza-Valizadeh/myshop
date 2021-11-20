export function signUpUserApi(api, newUserData) {
    return api.$post('/register', newUserData)
}