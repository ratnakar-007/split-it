import React, { Component } from 'react';
import { List } from 'antd';

const data = [
    {
        name : "Manav",
        settleData : {
            status : -1,
            owed : 100
        }
    },
    {
        name : "Ratan",
        settleData : {
            status : 1,
            owe : 100
        },
    },
    {
        name : "Harmeet",
        settleData : {
            status : 0
        }
    }
]


const SettleStatus = (props) => {
    const settle = props.item.settleData;
    switch(settle.status) {
        case 0 : return <span> Settled Up!</span> ;
        case 1 : return <span> Owe : {settle.owe}</span>;
        case -1 : return <span> Owed : {settle.owed}</span>;
        default: return <sapn></sapn>
    };
};


const ListItem = (props) => {
    const item  = props.item;
    return (
     <span align = 'center'>
          <div className='btn btn-floating pink lighten-1'>{item.name[0]}</div>  
          <span> {item.name}</span>
          <span><SettleStatus item={item}></SettleStatus></span>
     </span>
    )
  }


class Dashboard extends Component {

    render() {
        return(
            <div>

                <List 
                    dataSource={data}
                    renderItem={item => (
                            <List.Item> 
                                <ListItem item={item}></ListItem>                       
                            </List.Item>
                        )}
                />
            </div>    
        )
    }
}

export default Dashboard;