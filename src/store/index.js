import UserStore from './user/UserStore'


class RootStore {

    constructor(){
        this.userStore = new UserStore(this);
    }
}

export default RootStore;