let redirectKey = 'redirect'
const  setRedirect = (value) =>{
    sessionStorage.setItem(redirectKey, value)
}
const  getRedirect = (value) =>{
    sessionStorage.getItem(value)
}
export default {
    setRedirect,
    getRedirect
}