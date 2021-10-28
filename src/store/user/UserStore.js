import { action, observable } from "mobx";





export default class UserStore{

    @observable user = {};
    @observable loginState = 0; //0 : 로그인 시도 안함, 1 : 로그인 성공, 2 : 로그인 실패

    @action
    setUser = (user) =>{
        this.user = user;
    }

    @action
    setLoginState = (value) =>{
        this.loginState = value;
    }



}