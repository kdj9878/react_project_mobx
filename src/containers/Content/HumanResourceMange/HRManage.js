import React,{Component} from 'react';
import { List, Avatar, Button, Skeleton } from 'antd';
import RequestAxios from '../../../service/RequestAxios';

/* Modal 출력 버튼 */
import MoreInfomation from '../../../components/modalOpen/HRManage/MoreInfomation';

const count = 5;

class HRManage extends Component {


  state = {
    initLoading: true,
    loading: false,
    data: [],
    list: [],
    deptArray : null,
    deptDtArray : null
  };

  // openModal = (item) =>{
  //   console.log(item);
  // }

  componentDidMount() {
    this.getDeptData((deptArray, deptDtArray) =>{
      this.setState({
        deptArray : deptArray,
        deptDtArray : deptDtArray
      })
    })
    this.getUserData(res => {
      this.setState({
        initLoading: false,
        data: res,
        list: res,
      });
    });
    
  }

  getUserData = async (callBack) =>{
    await RequestAxios.requestData('/api/user/list', null, "GET")
          .then(res =>{
          callBack(res)
    });
  }
  
  getDeptData = async (callBack) =>{
    await RequestAxios.requestData('/api/common/deptMnt/list', null, "GET")
          .then(res => {
          const deptArray = [];
          const deptDtArray = [];
          res.map( value => {
            //부서 배열은 dermyCol이 전부 0으로 되어있음
            if(value.dermyCol === '0'){
              deptArray.push(value);
            }
            //따라서 여기에는 팀에 관련된 row가 push됨
            else{
              deptDtArray.push(value);
            }
          })
          callBack({deptArray : deptArray}, {deptDtArray : deptDtArray})
    })
  }

  updateList = (updatedList) => {
    this.setState({
      data : updatedList,
      list : updatedList
    })
  }

  onLoadMore = () => {
    this.setState({
      loading: true,
      list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
    });
    this.getData(res => {
      const data = this.state.data.concat(res.results);
      this.setState(
        {
          data,
          list: data,
          loading: false,
        },
        () => {
          // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
          // In real scene, you can using public method of react-virtualized: 잔디확인
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list, deptArray, deptDtArray } = this.state;
    //처음 state가 init 되었을 때 console이 찍히고
    //setState가 되면 새로운 props를 가지게 되므로 다시 랜더링이 되게 된다.

    // this.state.data.map((item, index) =>{
    //   console.log(item)
    // })
    const loadMore =
      !initLoading && !loading ? (
        <div
          style={{
            textAlign: 'center',
            marginTop: 12,
            height: 32,
            lineHeight: '32px',
          }}
        >
          <Button onClick={this.onLoadMore}>loading more</Button>
        </div>
      ) : null;

    return (
      
      <List
        className="demo-loadmore-list"
        loading={initLoading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item
             actions={[ 
             <MoreInfomation 
              data={item}
              updateList={this.updateList}
              arrayData = {[deptArray, deptDtArray]}
              />
            ]}
          >
            <Skeleton avatar title={false} loading={item.loading} active>
              <List.Item.Meta
                // avatar={<Avatar src={item.picture.large} />}
                title={item.userNickname}
                description={item.userDesc}
              />
            </Skeleton>
          </List.Item>
        )}
      />
    );
  }
}

export default HRManage;