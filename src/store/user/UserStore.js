import { action, observable } from "mobx";





export default class UserStore{

    @observable user = {};


    @action
    setUser = (user) =>{
        this.user = user;
    }



}