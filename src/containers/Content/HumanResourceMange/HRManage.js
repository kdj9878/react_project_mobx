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
  };

  openModal = (item) =>{
      console.log(item);
  }

  componentDidMount() {
    this.getData(res => {
      this.setState({
        initLoading: false,
        data: res,
        list: res,
      });
    });
  }

  getData = async (callBack) =>{
    await RequestAxios.requestData('/api/user/list', null, "GET")
      .then(res =>{
        callBack(res)
    });
    
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
          // In real scene, you can using public method of react-virtualized:
          // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
          window.dispatchEvent(new Event('resize'));
        },
      );
    });
  };

  render() {
    const { initLoading, loading, list } = this.state;

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
             actions={[ <MoreInfomation data={item} />]}
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