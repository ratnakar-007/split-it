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
        case 0 : return <span>Settled Up!</span> ;
        case 1 : return <span>Owe : {settle.owe}</span>;
        case -1 : return <span>Owe : {settle.owed}</span>;
        default: return <sapn></sapn>
    };
};


const ListItem = (props) => {
    const item  = props.item;
    return (
     <span>
          <span>{item.name}</span>
          <div><SettleStatus item={item}></SettleStatus></div>
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