import { action, observable } from "mobx";





export default class UserStore{

    @observable user = {};
    @observable loginState = false

    @action
    setUser = (user) =>{
        this.user = user;
    }

    @action
    setLoginState = (trueOrFalse) =>{
        this.loginState = trueOrFalse;
    }



}